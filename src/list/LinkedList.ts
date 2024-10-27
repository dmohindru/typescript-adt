import { List } from './List';
import { Comparable } from '../interfaces';
import { IterableCollection } from '../interfaces';

interface Node<T> {
  data: T;
  next: Node<T> | null;
}

export class LinkedList<T> implements List<T>, IterableCollection<T> {
  private head: Node<T> | null = null;
  private end: Node<T> | null = null;
  private _size: number = 0;

  constructor(items: T[] = []) {
    let prev: Node<T> | null = this.head;
    for (const item of items) {
      const newItem: Node<T> = {
        data: item,
        next: null,
      };
      if (!this.head) {
        this.head = newItem;
        this.end = newItem;
      } else if (prev) {
        prev.next = newItem;
        this.end = newItem;
      }
      prev = newItem;
      this._size++;
    }
  }

  get size(): number {
    return this._size;
  }

  append(item: T): void {
    const newNode = {
      data: item,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.end = this.head;
    } else if (this.end !== null) {
      this.end.next = newNode;
      this.end = newNode;
    } else {
      throw new Error('This error should never be thrown');
    }
    this._size++;
  }

  clear(): void {
    this.head = this.end = null;
    this._size = 0;
  }

  contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  forEach(callback: (item: T, index: number) => void): void {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      callback(current.data, counter);
      current = current.next;
      counter++;
    }
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this._size) {
      return undefined;
    }
    let current: Node<T> | null = this.head;
    let counter = 0;
    while (current !== null && counter < index) {
      current = current.next;
      counter++;
    }
    return current?.data;
  }

  indexOf(item: T): number {
    let next = this.head;
    let counter = 0;
    while (next !== null) {
      if (this.isComparable<T>(next.data) && this.isComparable<T>(item)) {
        let result = next.data.compareTo(item);
        if (result === 0) return counter;
      } else {
        let result = next.data === item;
        if (result) {
          return counter;
        }
      }
      counter++;
      next = next.next;
    }
    return -1;
  }

  insert(index: number, item: T): void {
    if (index < 0 || index > this._size) throw new Error('Index out of bound');
    const newItem: Node<T> = {
      data: item,
      next: null,
    };

    if (index === 0) {
      newItem.next = this.head;
      this.head = newItem;
      this._size++;
    } else {
      let current = this.head;
      let counter = 0;
      while (current !== null && counter < index - 1) {
        current = current.next;
        counter++;
      }
      if (current) {
        newItem.next = current.next;
        current.next = newItem;
        this._size++;
      }
    }
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  remove(item: T): boolean {
    let current = this.head;
    let previous = this.head;
    while (current !== null) {
      if (this.isComparable(current.data) && this.isComparable(item)) {
        if (current.data.compareTo(item) === 0) {
          break;
        }
      } else {
        if (current.data === item) {
          break;
        }
      }
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return false;
    }
    if (current === this.head) {
      this.head = current.next;
    } else if (previous !== null) {
      previous.next = current.next;
    }
    this._size--;
    return true;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this._size) {
      return undefined;
    }

    if (index === 0 && this.head !== null) {
      const val = this.head.data;
      this.head = this.head.next;
      this._size--;
      return val;
    }
    let current = this.head;
    let previous = this.head;
    let counter = 0;
    while (current !== null && counter !== index) {
      previous = current;
      current = current.next;
      counter++;
    }

    if (previous != null) {
      const val = current?.data;
      previous.next = current?.next ?? null;
      this._size--;
      return val;
    }
  }

  toArray(): T[] {
    let current = this.head;
    const array: T[] = [];
    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  [Symbol.iterator](): Iterator<T> {
    let current = this.head;
    return {
      next(): IteratorResult<T> {
        if (current !== null) {
          const val = current.data;
          current = current.next;
          return { value: val, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  private isComparable<T>(obj: any): obj is Comparable<T> {
    return (
      obj !== null &&
      typeof obj === 'object' &&
      typeof obj.compareTo === 'function'
    );
  }
}
