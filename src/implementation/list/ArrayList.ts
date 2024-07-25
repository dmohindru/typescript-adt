import { List } from '../../interfaces/List';
import { Comparable } from '../../interfaces/Comparable';
import { IterableCollection } from '../../interfaces/Iterable';

export class ArrayList<T>
  implements List<T>, IterableCollection<T>
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
    let index = 0;
    const items = this.dataStore;
    return {
      next(): IteratorResult<T> {
        if (index < items.length) {
          return {value: items[index++], done: false}
        } else {
          return {value: undefined, done: true}
        }
      }
    }
  }

  append(item: T): void {
    if (item) this.dataStore.push(item);
  }

  clear(): void {
    this.dataStore = [];
  }

  contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  forEach(callback: (item: T, index: number) => void): void {
    this.dataStore.forEach((currItem, currIndex) => callback(currItem, currIndex));
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
    if (index < 0 || index > this.size) this.throwError('Index out of bound');
    this.dataStore.splice(index, 0, item);
  }

  isEmpty(): boolean {
    return this.dataStore.length === 0;
  }

  remove(item: T): boolean {
    const index = this.indexOf(item);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      return true;
    }
    return false;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index > this.dataStore.length - 1) {
      return undefined;
    }
    const itemToRemove = this.dataStore[index];
    this.dataStore.splice(index, 1);
    return itemToRemove;
  }

  toArray(): T[] {
    return this.dataStore;
  }

  private isComparable<T>(obj: any): obj is Comparable<T> {
    return (
      obj !== null &&
      typeof obj === 'object' &&
      typeof obj.compareTo === 'function'
    );
  }

  private throwError(message: string) {
    throw new Error(message);
  }
}
