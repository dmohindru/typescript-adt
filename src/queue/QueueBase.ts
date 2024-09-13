import { CollectionOps } from 'src/interfaces';

export interface QueueBase<T> extends CollectionOps {
  /**
   * Removes and returns the element from the queue
   * @returns returns the element from the queue.
   */
  dequeue(): T | undefined;

  /**
   * Returns the element from the queue without removing it
   * @returns returns the element from the queue without removing it.
   */
  peek(): T | undefined;
}
