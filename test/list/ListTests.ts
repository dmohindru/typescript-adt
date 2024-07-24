import { describe, test, expect } from '@jest/globals';
import { ComparableObject } from '../utils/ComparableObject';
import { NotComparableObject } from '../utils/NotComparableObject';
import { List } from '../../src/interfaces/List';

export function runListTests(
  adtName: string,
  createList: <T>(items: T[]) => List<T>
) {
  describe(`${adtName} constructor Test`, () => {
    test(`Should create ${adtName} object with zero size if no constructor args provided`, () => {
      const list = createList<string>([]);
      expect(list).toBeDefined();
      expect(list.size).toBe(0);
    });

    test(`Should create ${adtName} object with size of constructor args array length`, () => {
      const initialItems = ['one', 'two', 'three'];
      const list = createList<string>(initialItems);
      expect(list).toBeDefined();
      expect(list.size).toEqual(initialItems.length);
    });
  });

  describe(`${adtName} get() Test`, () => {
    let list: List<string>;
    const initialItems = ['one', 'two', 'three'];

    beforeEach(() => {
      list = createList<string>(initialItems);
    });

    test('Should return a valid value if index is within range', () => {
      const item = list.get(2);
      expect(item).toEqual(initialItems[2]);
    });

    test('Should return undefined value if index is out of range', () => {
      expect(list.get(-1)).not.toBeDefined();
      expect(list.get(3)).not.toBeDefined();
    });
  });

  describe(`${adtName} append() Test`, () => {
    test('Should append item to list', () => {
      const list = createList([1, 2, 3]);
      list.append(4);
      expect(list.size).toEqual(4);
      expect(list.get(3)).toEqual(4);
    });
  });

  describe(`${adtName} clear() Test`, () => {
    test('Should clear all items from list', () => {
      const list = createList(['one', 'two', 'three']);
      list.clear();
      expect(list.size).toEqual(0);
    });
  });

  describe(`${adtName} contains() Test with Comparable object`, () => {
    let list: List<ComparableObject>;
    const initialItems = [
      new ComparableObject('Abc', 10),
      new ComparableObject('Cde', 20),
      new ComparableObject('Efg', 30),
    ];
    beforeEach(() => {
      list = createList(initialItems);
    });

    test('Should return false if item not present in list', () => {
      const result = list.contains(new ComparableObject('rty', 40));
      expect(result).toBeFalsy();
    });

    test('Should return true if item present in list', () => {
      const result = list.contains(initialItems[2]);
      expect(result).toBeTruthy();
    });

    test('Should return true if item is new object and comparable to items in list', () => {
      const item = new ComparableObject('Abc', 10);
      const result = list.contains(item);
      expect(result).toBeTruthy();
    });
  });

  describe(`${adtName} contains() Test with NotComparable object`, () => {
    let list: List<NotComparableObject>;
    const initialItems = [
      new NotComparableObject('Abc', 10),
      new NotComparableObject('Cde', 20),
      new NotComparableObject('Efg', 30),
    ];

    beforeEach(() => {
      list = createList(initialItems);
    });

    test('Should return false if item not present in list', () => {
      const result = list.contains(new NotComparableObject('rty', 40));
      expect(result).toBeFalsy();
    });

    test('Should return true if item present in list', () => {
      const result = list.contains(initialItems[1]);
      expect(result).toBeTruthy();
    });

    test('Should return false even if object in question has same value', () => {
      const result = list.contains(new NotComparableObject('Abc', 10));
      expect(result).toBeFalsy();
    });
  });

  describe(`${adtName} indexOf() Test with Comparable object`, () => {
    let list: List<ComparableObject>;
    const initialItems = [
      new ComparableObject('Abc', 10),
      new ComparableObject('Cde', 20),
      new ComparableObject('Efg', 30),
    ];
    beforeEach(() => {
      list = createList(initialItems);
    });

    test('Should return -1 if item not present in list', () => {
      const result = list.indexOf(new ComparableObject('DEF', 40));
      expect(result).toEqual(-1);
    });

    test('Should return positive value if item present in list', () => {
      const result = list.indexOf(initialItems[2]);
      expect(result).toEqual(2);
    });

    test('Should return positive value if new object in question has same value', () => {
      const result = list.indexOf(new ComparableObject('Cde', 20));
      expect(result).toEqual(1);
    });
  });

  describe(`${adtName} indexOf() Test with NotComparable object`, () => {
    let list: List<NotComparableObject>;

    const initialItems = [
      new NotComparableObject('Abc', 10),
      new NotComparableObject('Cde', 20),
      new NotComparableObject('Efg', 30),
    ];

    beforeEach(() => {
      list = createList(initialItems);
    });

    test('Should return -1 if item not present in list', () => {
      const result = list.indexOf(new NotComparableObject('DFG', 40));
      expect(result).toEqual(-1);
    });

    test('Should return positive value if item present in list', () => {
      const result = list.indexOf(initialItems[0]);
      expect(result).toEqual(0);
    });

    test('Should return -1 if new object in question have same value', () => {
      const result = list.indexOf(new NotComparableObject('Efg', 30));
      expect(result).toEqual(-1);
    });
  });

  describe(`${adtName} isEmpty() test`, () => {
    test('Should return true for empty list', () => {
      const list = createList([]);
      expect(list.isEmpty()).toBeTruthy();
    });

    test('Should rturn false for non empty list', () => {
      const list = createList(['one', 'two', 'three']);
      expect(list.isEmpty()).toBeFalsy();
    });
  });

  describe(`${adtName} insert() test`, () => {
    let list: List<ComparableObject>;
    const initialItems = [
      new ComparableObject('Abc', 10),
      new ComparableObject('Cde', 20),
      new ComparableObject('Efg', 30),
    ];

    beforeEach(() => {
      list = createList(initialItems);
    });

    test(`Should insert item if index is within range`, () => {
      const newItem = new ComparableObject('New-Item', 40);
      list.insert(0, newItem);
      expect(list.size).toEqual(initialItems.length + 1);

      let item = list.get(0);
      expect(item).toEqual(newItem);

      list.insert(list.size, newItem);
      expect(list.size).toEqual(initialItems.length + 2);

      item = list.get(list.size - 1);
      expect(item).toEqual(newItem);

      list.insert(1, newItem);
      expect(list.size).toEqual(initialItems.length + 3);

      item = list.get(1);
      expect(item).toEqual(newItem);
    });

    test(`Should throw error with message Index Out of Bound if index in not within range`, () => {
      const newItem = new ComparableObject('New-Item', 40);
      expect(() => list.insert(-1, newItem)).toThrow('Index out of bound');
      expect(() => list.insert(initialItems.length + 1, newItem)).toThrow(
        'Index out of bound'
      );
    });
  });
}
