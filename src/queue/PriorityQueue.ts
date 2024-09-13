import { QueueBase } from './QueueBase';

/**
 * Interface representing a generic PriorityQueue ADT.
 */
export interface PriorityQueue<T> extends QueueBase<T> {
  /**
   * Adds an element to the queue with a given priority
   * @param item - The element to add.
   * @param priority - The priority of item.
   */
  enqueue(item: T, priority: number): void;
}
