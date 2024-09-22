import { ArrayList } from '../list';
import { Queue } from './Queue';

export class ArrayQueue<T> implements Queue<T> {
  private dataStore: ArrayList<T>;
  constructor() {
    this.dataStore = new ArrayList<T>();
  }
  enqueue(item: T): void {
    this.dataStore.append(item);
  }
  dequeue(): T | undefined {
    return this.dataStore.removeAt(0);
  }
  peek(): T | undefined {
    return this.dataStore.get(0);
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
