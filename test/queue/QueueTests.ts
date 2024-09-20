import { describe, test, expect } from '@jest/globals';
import { Queue } from '../../src/queue';

export function runQueueTests(adtName: string, createQueue: <T>() => Queue<T>) {
  describe(`${adtName} constructor test`, () => {
    test(`Should create ${adtName} object`, () => {
      const queue = createQueue<string>();
      expect(queue).toBeDefined();
    });
  });

  describe(`${adtName} enqueue test`, () => {
    let queue: Queue<string>;
    beforeEach(() => {
      queue = createQueue<string>();
    });

    test('Should have zero items when queue object is created', () => {
      expect(queue.size).toEqual(0);
    });

    test('Should have size equal to number of items enqueued', () => {
      queue.enqueue('first');
      queue.enqueue('second');
      queue.enqueue('third');
      expect(queue.size).toEqual(3);
    });
  });

  describe(`${adtName} dequeue test`, () => {
    let queue: Queue<string>;
    beforeEach(() => {
      queue = createQueue<string>();
    });

    test('should return undefined when queue is empty', () => {
      const item = queue.dequeue();
      expect(item).not.toBeDefined();
    });
    test('should get items in queue in FIFO order', () => {
      const items = ['first', 'second', 'third'];
      items.forEach((item) => queue.enqueue(item));
      items.forEach((item) => {
        expect(queue.dequeue()).toEqual(item);
      });
    });
  });

  describe(`${adtName} peek test`, () => {
    let queue: Queue<string>;
    beforeEach(() => {
      queue = createQueue<string>();
    });
    test('should return undefined if queue is empty', () => {
      const item = queue.peek();
      expect(item).not.toBeDefined();
    });

    test('should return front of queue and not remove item from queue', () => {
      const items = ['first', 'second', 'third'];
      items.forEach((item) => queue.enqueue(item));
      items.forEach((_) => {
        expect(queue.peek()).toEqual(items[0]);
      });
      expect(queue.size).toEqual(items.length);
    });
  });
}
