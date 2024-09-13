/**
 * Interface representing a generic List ADT.
 */
export interface List<T> {
  /**
   * Adds an element to the end of the list.
   * @param item - The element to add.
   */
  append(item: T): void;

  /**
   * Inserts an element at a specific position in the list.
   * @param index - The position to insert the element.
   * @param item - The element to insert.
   */
  insert(index: number, item: T): void;

  /**
   * Removes and returns the element at a specific position.
   * @param index - The position of the element to remove.
   * @returns The removed element, or undefined if the index is out of bounds.
   */
  removeAt(index: number): T | undefined;

  /**
   * Removes the first occurrence of an element from the list.
   * @param item - The element to remove.
   * @returns True if the element was removed, otherwise false.
   */
  remove(item: T): boolean;

  /**
   * Returns the element at a specific position.
   * @param index - The position of the element to return.
   * @returns The element at the specified position, or undefined if the index is out of bounds.
   */
  get(index: number): T | undefined;

  /**
   * Returns the index of the first occurrence of an element, or -1 if not found.
   * @param item - The element to search for.
   * @returns The index of the element, or -1 if not found.
   */
  indexOf(item: T): number;

  /**
   * Returns true if the list contains the specified element.
   * @param item - The element to check for.
   * @returns True if the element is in the list, otherwise false.
   */
  contains(item: T): boolean;

  /**
   * Returns true if the list is empty.
   * @returns True if the list is empty, otherwise false.
   */
  isEmpty(): boolean;

  /**
   * Clears all elements from the list.
   */
  clear(): void;

  /**
   * Returns an array representation of the list.
   * @returns An array containing all the elements in the list.
   */
  toArray(): T[];

  /**
   * Iterates over the list and executes the provided function for each element.
   * @param callback - The function to execute for each element.
   */
  forEach(callback: (item: T, index: number) => void): void;

  /**
   * Gets the number of elements in the list.
   */
  readonly size: number;

  /**
   * Return an iterator for List.
   */
  [Symbol.iterator](): Iterator<T>;
}
