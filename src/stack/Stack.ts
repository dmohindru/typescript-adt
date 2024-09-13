/**
 * Interface representing a generic Stack ADT.
 */
export interface Stack<T> {
  /**
   * Adds an element to the top of the stack
   * @param item - The element to add.
   */
  push(item: T): void;

  /**
   * Removes and returns the top element of the stack
   * @returns The removed element, or undefined if stack is empty.
   */
  pop(): T | undefined;

  /**
   * Returns the top element without removing it
   * @returns The top element of stack, or undefined if stack is empty.
   */
  peek(): T | undefined;

  /**
   * Returns true if the stack is empty.
   * @returns True if the stack is empty, otherwise false.
   */
  isEmpty(): boolean;

  /**
   * Gets the number of elements in the stack.
   */
  readonly size: number;

  /**
   * Clears all elements from the stack.
   */
  clear(): void;
}
