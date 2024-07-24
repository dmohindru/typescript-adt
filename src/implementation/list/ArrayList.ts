import { List } from '../../interfaces/List';
import { Comparable } from '../../interfaces/Comparable';
import { IterableCollection } from '../../interfaces/Iterable';

export class ArrayList<T>
  implements List<T>, IterableCollection<T>, Comparable<T>
{
  private dataStore: T[];
  constructor(items: T[] = []) {
    if (items.length > 0) {
      this.dataStore = [...items];
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
    if (item) this.dataStore.push(item);
  }

  clear(): void {
    this.dataStore = [];
  }

  compareTo(other: T): number {
    return 0;
  }

  contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  forEach(callback: (item: T, index: number) => void): void {
    throw new Error('Not Implemented');
  }

  get(index: number): T | undefined {
    if (index > -1 && index < this.dataStore.length)
      return this.dataStore[index];
    return undefined;
  }

  indexOf(item: T): number {
    return this.dataStore.findIndex((currentItem) => {
      if (this.isComparable<T>(item) && this.isComparable<T>(currentItem))
        return item.compareTo(currentItem) === 0;
      else return item == currentItem;
    });
  }

  insert(index: number, item: T): void {
    if (index < 0 || index > this.size) throw new Error('Index out of bound');
    this.dataStore.splice(index, 0, item);
  }

  isEmpty(): boolean {
    return this.dataStore.length === 0;
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

  private isComparable<T>(obj: any): obj is Comparable<T> {
    return (
      obj !== null &&
      typeof obj === 'object' &&
      typeof obj.compareTo === 'function'
    );
  }
}
