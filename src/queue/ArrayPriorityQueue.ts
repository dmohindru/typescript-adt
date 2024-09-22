import { PriorityQueue } from './PriorityQueue';
export class ArrayPriorityQueue<T> implements PriorityQueue<T> {
  enqueue(item: T, priority: number): void {
    throw new Error('Method not implemented.');
  }
  dequeue(): T | undefined {
    throw new Error('Method not implemented.');
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.');
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
  get size(): number {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
}
