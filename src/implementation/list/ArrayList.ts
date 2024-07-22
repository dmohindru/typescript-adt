import { List } from '../../interfaces/List';
import { Comparable } from '../../interfaces/Comparable';
import { IterableCollection } from '../../interfaces/Iterable';

export class ArrayList<T>
  implements List<T>, IterableCollection<T>, Comparable<T>
{
  private dataStore: T[];
  constructor() {
    this.dataStore = [];
  }
  get size(): number {
    return this.dataStore.length;
  }

  [Symbol.iterator](): Iterator<T> {
    throw Error('Not Implemented');
  }

  append(item: T): void {}

  clear(): void {}

  compareTo(other: T): number {
    return 0;
  }

  contains(item: T): boolean {
    return false;
  }

  forEach(callback: (item: T, index: number) => void): void {}

  get(index: number): T | undefined {
    return undefined;
  }

  indexOf(item: T): number {
    return 0;
  }

  insert(index: number, item: T): void {}

  isEmpty(): boolean {
    return false;
  }

  remove(item: T): boolean {
    return false;
  }

  removeAt(index: number): T | undefined {
    return undefined;
  }

  toArray(): T[] {
    return [];
  }
}
