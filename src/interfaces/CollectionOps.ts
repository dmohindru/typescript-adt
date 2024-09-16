export interface CollectionOps {
  /**
   * Returns true if the collection is empty.
   * @returns True if the collection is empty, otherwise false.
   */
  isEmpty(): boolean;

  /**
   * Gets the number of elements in the collection.
   */
  readonly size: number;

  /**
   * Clears all elements from the collection.
   */
  clear(): void;
}
