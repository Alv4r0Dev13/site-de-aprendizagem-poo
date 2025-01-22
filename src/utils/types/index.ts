/** Make all properties of T optional, but at least one is required */
export type NotEmptyPartial<
  T,
  U = { [K in keyof T]: Pick<T, K> },
> = Partial<T> & U[keyof U];
