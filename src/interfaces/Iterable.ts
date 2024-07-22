/**
 * Interface representing an iterable collection.
 */
export interface IterableCollection<T> extends Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
