import { runListTests } from './ListTests';
import { describe } from '@jest/globals';
import { ArrayList } from '../../src/implementation/list/ArrayList';

describe('Run ArrayList Test', () => {
  runListTests('ArrayList', (items) => new ArrayList(items));
});
