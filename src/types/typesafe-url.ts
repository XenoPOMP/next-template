type ExtractRouteParams<T extends string> = string extends T
  ? Record<string, string> // Fallback if T is just 'string'
  : T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractRouteParams<Rest>]: string }
    : T extends `${string}:${infer Param}`
      ? { [K in Param]: string }
      : // eslint-disable-next-line ts/no-empty-object-type
        {};

type Sanitize<T> = Omit<T, ''>;

export type TypesafeUrl<T extends string> =
  T extends `${string}://${string}/${infer Route}`
    ? Sanitize<ExtractRouteParams<Route>>
    : Sanitize<ExtractRouteParams<T>>;
