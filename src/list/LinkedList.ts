import { List } from './List';
import { Comparable } from '../interfaces';
import { IterableCollection } from '../interfaces';

export class LinkedList<T> implements List<T>, IterableCollection<T> {
  constructor(items: T[] = []) {
    throw new Error('Not Implemented');
  }
  get size(): number {
    throw new Error('Not Implemented');
  }

  [Symbol.iterator](): Iterator<T>;
  [Symbol.iterator](): Iterator<T>;
  [Symbol.iterator](): Iterator<T, any, any>;
  [Symbol.iterator](): any {}

  append(item: T): void {
    throw new Error('Not implemented');
  }

  clear(): void {
    throw new Error('Not implemented');
  }

  contains(item: T): boolean {
    throw new Error('Not implemented');
  }

  forEach(callback: (item: T, index: number) => void): void {
    throw new Error('Not implemented');
  }

  get(index: number): T | undefined {
    throw new Error('Not implemented');
  }

  indexOf(item: T): number {
    throw new Error('Not implemented');
  }

  insert(index: number, item: T): void {
    throw new Error('Not implemented');
  }

  isEmpty(): boolean {
    throw new Error('Not implemented');
  }

  remove(item: T): boolean {
    throw new Error('Not implemented');
  }

  removeAt(index: number): T | undefined {
    throw new Error('Not implemented');
  }

  toArray(): T[] {
    throw new Error('Not implemented');
  }
}
