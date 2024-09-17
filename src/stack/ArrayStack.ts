import { Stack } from './Stack';
import { ArrayList } from '../list';
export class ArrayStack<T> implements Stack<T> {
  private dataStore: ArrayList<T>;
  constructor() {
    this.dataStore = new ArrayList<T>();
  }

  push(item: T): void {
    this.dataStore.append(item);
  }

  pop(): T | undefined {
    return this.dataStore.removeAt(this.dataStore.size - 1);
  }

  peek(): T | undefined {
    return this.dataStore.get(this.dataStore.size - 1);
  }

  isEmpty(): boolean {
    return this.dataStore.size === 0;
  }
  get size(): number {
    return this.dataStore.size;
  }

  clear(): void {
    this.dataStore.clear();
  }
}
