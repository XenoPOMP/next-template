import { CustomError } from 'ts-custom-error';

export type EnvKey = string;

type GetFunc<
  Result extends string | undefined | boolean | number = string | undefined,
> = (key: EnvKey) => Result;

export class VariableExistenceError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}

interface IUseEnvHook {
  /** Get .env key, even if it is not defined. */
  get: GetFunc;

  /**
   * Get .env key and throw, if it is not
   * defined.
   */
  getOrThrow: GetFunc<string>;

  /** Get .env key value and convert it to boolean, even if it is not defined. */
  getBoolean: GetFunc<boolean>;
}

/**
 * This hook allows you to use .env file.
 */
export const useEnv = (): IUseEnvHook => {
  const get: GetFunc = key => {
    return process.env[key];
  };

  const getOrThrow: GetFunc<string> = key => {
    const value = get(key);

    if (typeof value === 'undefined') {
      throw new VariableExistenceError(
        `Variable ${key} is not defined in .env config.`,
      );
    }

    return value;
  };

  const getBoolean: IUseEnvHook['getBoolean'] = key => {
    const value = get(key);

    if (typeof value === 'undefined') {
      return false;
    }

    return value === 'true';
  };

  return {
    get,
    getOrThrow,
    getBoolean,
  };
};
