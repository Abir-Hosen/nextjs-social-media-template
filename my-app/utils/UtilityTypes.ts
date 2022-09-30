export type NotUndefined<T> = Exclude<T, undefined>;

export type AnyObject = {
  [key: string]: any;
};
