import { List } from '../../interfaces/List';
import { Comparable } from '../../interfaces/Comparable';
import { IterableCollection } from '../../interfaces/Iterable';

export class ArrayList<T>
  implements List<T>, IterableCollection<T>, Comparable<T>
{
  private dataStore: T[];
  constructor(items: T[] = []) {
    if (items.length > 0) {
      this.dataStore = [...items]
    } else {
      this.dataStore = items;
    }
  }
  get size(): number {
    return this.dataStore.length;
  }

  [Symbol.iterator](): Iterator<T> {
    throw Error('Not Implemented');
  }

  append(item: T): void {
    if (item)
      this.dataStore.push(item);
  }

  clear(): void {
    this.dataStore = [];
  }

  compareTo(other: T): number {
    return 0;
  }

  contains(item: T): boolean {
    return false;
  }

  forEach(callback: (item: T, index: number) => void): void {}

  get(index: number): T | undefined {
    if (index > -1 && index < this.dataStore.length)
      return this.dataStore[index];
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
