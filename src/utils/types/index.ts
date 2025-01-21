/** Make all properties of T optional, but at least one is required */
export type NotEmptyPartial<T> = { [K in keyof T]: Pick<T, K> }[keyof T];
