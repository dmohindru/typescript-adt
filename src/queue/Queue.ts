import { QueueBase } from './QueueBase';

/**
 * Interface representing a generic Queue ADT.
 */
export interface Queue<T> extends QueueBase<T> {
  /**
   * Adds an element to the queue
   * @param item - The element to add.
   */
  enqueue(item: T): void;
}
