import { runStackTests } from './StackTest';
import { describe } from '@jest/globals';
import { ArrayStack } from '../../src/stack';

describe('Run ArrayStack Tests', () => {
  runStackTests('ArrayStack', () => new ArrayStack());
});
