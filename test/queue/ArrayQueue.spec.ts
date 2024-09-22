import { runQueueTests } from './QueueTests';
import { describe } from '@jest/globals';
import { ArrayQueue } from '../../src/queue';

describe('Run ArrayQueue Tests', () => {
  runQueueTests('ArrayQueue', () => new ArrayQueue());
});
