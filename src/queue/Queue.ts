/**
 * Interface representing a generic Queue ADT.
 */
export interface Queue<T> {
  /**
   * Adds an element to the queue
   * @param item - The element to add.
   */
  enqueue(item: T): void;

  /**
   * Removes and returns the element with the highest priority
   * @returns returns the element with the highest priority.
   */
  dequeue(): T | undefined;

  /**
   * Returns the element with the highest priority without removing it
   * @returns returns the element with the highest priority without removing it.
   */
  peek(): T | undefined;

  /**
   * Checks if the queue is empty
   * @returns returns true if queue is empty, otherwise false.
   */
  isEmpty(): boolean;

  /**
   * Gets the number of elements in the queue.
   */
  readonly size: number;

  /**
   * Clears all elements from the queue.
   */
  clear(): void;
}
