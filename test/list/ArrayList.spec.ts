import { describe, test, expect } from '@jest/globals';
import { ArrayList } from '../../src/implementation/list/ArrayList';

describe('ArrayList constructor Test', () => {
  test('Should create ArrayList object on constructor invocation', () => {
    const arrayList = new ArrayList();
    expect(arrayList).not.toBeFalsy();
  });

  test('Should create ArrayList object with size capacity', () => {
    const arrayList = new ArrayList();
    expect(arrayList.size).toEqual(10);
  });
});
