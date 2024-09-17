import { describe, test, expect } from '@jest/globals';
import { Stack } from '../../src/stack';

export function runStackTests(adtName: string, createStack: <T>() => Stack<T>) {
  describe(`${adtName} constructor test`, () => {
    test(`Should create ${adtName} object`, () => {
      const stack = createStack<string>();
      expect(stack).toBeDefined();
    });
  });

  describe(`${adtName} push() test`, () => {
    let stack: Stack<string>;
    beforeEach(() => {
      stack = createStack<string>();
    });

    test('Should have zero items when stack object is created', () => {
      expect(stack.size).toEqual(0);
    });

    test('Should have size equal to number of pushed items', () => {
      stack.push('first');
      stack.push('second');
      stack.push('third');
      expect(stack.size).toEqual(3);
    });
  });

  describe(`${adtName} pop() test`, () => {
    let stack: Stack<string>;
    beforeEach(() => {
      stack = createStack<string>();
    });
    test('Should return undefined object when pop operation done on empty stack', () => {
      const item = stack.pop();
      expect(item).not.toBeDefined();
    });

    test('Should pop items in reverse order in which items were pushed', () => {
      const items = ['first', 'second', 'third'];
      items.forEach((item) => stack.push(item));
      for (let i = stack.size - 1; i > 0; i--) {
        const item = stack.pop();
        expect(item).toEqual(items[i]);
      }
    });

    test('Should adjust stack size when items popped from stack', () => {
      stack.push('first');
      stack.push('second');
      stack.pop();
      stack.push('third');
      expect(stack.size).toEqual(2);
    });
  });

  describe(`${adtName} peek() test`, () => {
    let stack: Stack<string>;
    const items = ['first', 'second', 'third'];
    beforeEach(() => {
      stack = createStack<string>();
      items.forEach((item) => stack.push(item));
    });

    test('Should return top of stack and not pop it from stack', () => {
      const item = stack.peek();
      const stackSize = stack.size;
      expect(item).toEqual(items[items.length - 1]);
      expect(stackSize).toEqual(items.length);
    });

    test('Should return undefined when stack is empty', () => {
      items.forEach((_) => stack.pop());
      const item = stack.peek();
      expect(item).not.toBeDefined();
    });
  });

  describe(`${adtName} isEmpty() test`, () => {
    test('Should return true when stack is empty', () => {
      const stack = createStack<string>();
      stack.push('first');
      stack.push('second');
      stack.pop();
      stack.pop();
      const isEmpty = stack.isEmpty();
      expect(isEmpty).toBeTruthy();
    });

    test('Should return false when stack is not empty', () => {
      const stack = createStack<string>();
      stack.push('first');
      const isEmpty = stack.isEmpty();
      expect(isEmpty).toBeFalsy();
    });
  });

  describe(`${adtName} clear() test`, () => {
    test('Should remove all items from stack', () => {
      const items = ['first', 'second', 'third'];
      const stack = createStack<string>();
      items.forEach((item) => stack.push(item));
      stack.clear();
      expect(stack.size).toEqual(0);
    });
  });
}
