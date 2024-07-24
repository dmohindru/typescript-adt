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

  describe(`${adtName} remove() test with Comparable Object`, () => {
    let list: List<ComparableObject>;
    const initialItems = [
      new ComparableObject('Abc', 10),
      new ComparableObject('Cde', 20),
      new ComparableObject('Efg', 30),
    ];

    beforeEach(() => {
      list = createList(initialItems);
    });

    test('Should remove item from list if present in list on basis of referential equality', () => {
      const result = list.remove(initialItems[0]);
      expect(result).toBeTruthy();
      expect(list.contains(initialItems[0])).toBeFalsy();
      expect(list.size).toEqual(initialItems.length - 1);

    });

    test('Should not remove item if not present in list', () => {
      const result = list.remove(new ComparableObject('DEF', 40));
      expect(result).toBeFalsy();
      expect(list.size).toEqual(initialItems.length);
    });

    test('Should remove item from list if compareTo is equal', () => {
      const itemToRemove = new ComparableObject('Efg', 30);
      const result = list.remove(itemToRemove);
      expect(result).toBeTruthy();
      expect(list.contains(itemToRemove)).toBeFalsy();
      expect(list.contains(itemToRemove)).toBeFalsy();
    });
  });

  describe(`${adtName} removeAt() test`, () => {
    const initialItems = ['One', 'Two', 'Three', 'Four'];
    test('Should remove item at index if within range', () => {
      const list = createList(initialItems);
      let itemRemoved = list.removeAt(0);
      expect(itemRemoved).toEqual(initialItems[0]);

      itemRemoved = list.removeAt(list.size - 1);
      expect(itemRemoved).toEqual(initialItems[3]);

      itemRemoved = list.removeAt(1);
      expect(itemRemoved).toEqual('Three');

      expect(list.size).toEqual(1);
    });

    test('Should return undefined if index out of bound', () => {
      const list = createList(initialItems);
      let itemRemoved = list.removeAt(-1);
      expect(itemRemoved).toBeFalsy();
      itemRemoved = list.removeAt(list.size);
      expect(itemRemoved).toBeFalsy();

      expect(list.size).toEqual(initialItems.length);
    });
  });

  describe(`${adtName} toArray() test`, () => {

    test('Return array should be equal to supplied array', () => {
      const initialItems = [
        new ComparableObject('Abc', 10),
        new ComparableObject('Cde', 20),
        new ComparableObject('Efg', 30),
      ];
      const list = createList(initialItems);

      const returnedArray = list.toArray();
      expect(returnedArray).toEqual(initialItems);
    });
  });

  describe(`${adtName} forEach() test`, () => {
    test('Should return running total of number array supplied', () => {
      const initialItems = [1, 2, 3, 4, 5];
      const list = createList(initialItems);

      let runningTotal = 0;
      const indexArray = [];
      list.forEach((item, index) => {
        runningTotal += item;
        indexArray.push(index);
      });

      expect(runningTotal).toEqual(initialItems.reduce((acc, curr) => acc + curr, 0));
      expect(indexArray.length).toEqual(initialItems.length);
    });
  });
}
