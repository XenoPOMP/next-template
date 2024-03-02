import { useCallback, useEffect, useState } from 'react';

interface UseQueryLike<DataType> {
  data?: DataType;
  isError: boolean;
  error: any;
  isLoading: boolean;
  refetch: () => void;
}

/**
 * Hook for advanced usage of JS`s fetch func.
 *
 * Syntax is similar to react-query.
 *
 * @param action
 *
 * @example
 * type Post = {
 *     id: number;
 *     title: string;
 *     body: string;
 * }
 *
 * const { isLoading } = useFetch<Array<Post>>(async () => await fetch('http://localhost:4000'));
 */
export const useFetch = <T>(
  action: () => Promise<Response>,
): UseQueryLike<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAction = useCallback(() => {
    setIsLoading(true);
    setIsError(false);

    action()
      .then(async res => {
        setData((await res.json()) as T);
      })
      .catch(reason => {
        setIsError(true);
        setError(reason);
        setData(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [action]);

  useEffect(() => {
    // Execute promise initially
    handleAction();
  }, []);

  return {
    data,
    isError,
    error,
    isLoading,
    refetch: handleAction,
  };
};
