import { CollectionOps } from 'src/interfaces';

export interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

interface BinarySearchTree<T> extends CollectionOps {
  /**
   * Inserts a value into the tree.
   * @param value - The value to insert into the tree.
   */
  insert(value: T): void;

  /**
   * Searches for a value in the tree.
   * @param value - The value to search for in the tree.
   * @returns The node with the specified value, or null if not found.
   */
  search(value: T): TreeNode<T> | null;

  /**
   * Deletes a value from the tree.
   * @param value - The value to delete from the tree.
   */
  delete(value: T): void;

  /**
   * Performs in-order traversal (Left, Root, Right).
   * @param callback - A function to apply to each visited node.
   */
  inOrderTraversal(callback: (node: TreeNode<T>) => void): void;

  /**
   * Performs pre-order traversal (Root, Left, Right).
   * @param callback - A function to apply to each visited node.
   */
  preOrderTraversal(callback: (node: TreeNode<T>) => void): void;

  /**
   * Performs post-order traversal (Left, Right, Root).
   * @param callback - A function to apply to each visited node.
   */
  postOrderTraversal(callback: (node: TreeNode<T>) => void): void;

  /**
   * Returns the minimum value in the tree.
   * @returns The node with the minimum value, or null if the tree is empty.
   */
  findMin(): TreeNode<T> | null;

  /**
   * Returns the maximum value in the tree.
   * @returns The node with the maximum value, or null if the tree is empty.
   */
  findMax(): TreeNode<T> | null;

  /**
   * Returns the height of the tree (the longest path from root to leaf).
   * @returns The height of the tree.
   */
  getHeight(): number;
}
