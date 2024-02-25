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

export const useEnv = () => {
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
