import { CustomError } from 'ts-custom-error';

export type EnvKey = 'CANONICAL_URL';

type GetFunc<Result extends string | undefined = string | undefined> = (
  key: EnvKey
) => Result;

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
        `Variable ${key} is not defined in .env config.`
      );
    }

    return value;
  };

  return {
    get,
    getOrThrow,
  };
};
