import { runListTests } from './ListTests';
import { describe } from '@jest/globals';
import { LinkedList } from '../../src/list';

describe('Run LinkedList Test', () => {
  runListTests('LinkedList', (items) => new LinkedList(items));
});
