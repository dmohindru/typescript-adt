import { describe, test, expect } from '@jest/globals';
import { ArrayList } from '../../src/implementation/list/ArrayList';
import {ComparableObject} from "../utils/ComparableObject";

describe('ArrayList constructor Test', () => {
  test('Should create ArrayList object with zero size if no constructor args provided', () => {
    const arrayList = new ArrayList<string>();
    expect(arrayList).toBeDefined();
    expect(arrayList.size).toBe(0);
  });

  test('Should create ArrayList object with size of constructor args array length', () => {
    const initialItems = ['one', 'two', 'three'];
    const arrayList = new ArrayList<string>(initialItems);
    expect(arrayList).toBeDefined();
    expect(arrayList.size).toEqual(initialItems.length);
  });
});

describe('ArrayList get() Test', () => {
  let arrayList: ArrayList<string>;
  const initialItems = ['one', 'two', 'three'];

  beforeEach(() => {
    arrayList = new ArrayList<string>(initialItems)
  });

  test('Should return a valid value if index is within range', () => {
    const item = arrayList.get(2);
    expect(item).toEqual(initialItems[2]);
  });

  test('Should return undefined value if index is out of range', () => {
    expect(arrayList.get(-1)).not.toBeDefined();
    expect(arrayList.get(3)).not.toBeDefined();
  });
});

describe('ArrayList append() Test', () => {
  test('Should append item to list', () => {
    const arrayList = new ArrayList([1, 2, 3]);
    arrayList.append(4);
    expect(arrayList.size).toEqual(4);
    expect(arrayList.get(3)).toEqual(4);
  });
});

describe('ArrayList clear() Test', () => {
  test('Should clear all items from list', () => {
    const arrayList = new ArrayList(['one', 'two', 'three']);
    arrayList.clear();
    expect(arrayList.size).toEqual(0);
  });
});

describe('ArrayList contains() Test with Comparable object', () => {
  let arrayList: ArrayList<ComparableObject>
  const initialItems = [
      new ComparableObject('Abc', 10),
      new ComparableObject('Cde', 20),
      new ComparableObject('Efg', 30)
  ];
  beforeEach(() => {
    arrayList = new ArrayList<ComparableObject>(initialItems);
  });

  test('Should return false if item not present in list', () => {
    const result = arrayList.contains(new ComparableObject('rty', 40));
    expect(result).toBeFalsy();
  });

  test('Should return true if item present in list', () => {
    const result = arrayList.contains(initialItems[2]);
    expect(result).toBeTruthy();
  });

  test('Should return true if item is new object and comparable to items in list', () => {
    const item = new ComparableObject('Abc', 10);
    const result = arrayList.contains(item);
    expect(result).toBeTruthy();
  });
});


describe('ArrayList contains() Test with NotComparable object', () => {

})


