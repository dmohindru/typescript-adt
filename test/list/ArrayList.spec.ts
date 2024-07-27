import { runListTests } from './ListTests';
import { describe } from '@jest/globals';
import { ArrayList } from '../../src';

describe('Run ArrayList Test', () => {
  runListTests('ArrayList', (items) => new ArrayList(items));
});
