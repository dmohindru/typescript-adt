import { describe, test, expect } from '@jest/globals';
import { sum } from '../src';

describe('Sum Function', () => {
  test('Return correct value', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test('A failing test', () => {
    expect(false).toBeFalsy();
  });
});
