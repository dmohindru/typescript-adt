import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  target: ['es2022', 'node18'],
  entry: {
    index: 'src/index.ts',
    'list/index': 'src/list/index.ts',
    'interfaces/index': 'src/interfaces/index.ts',
    'stack/index': 'src/stack/index.ts',
    'queue/index': 'src/queue/index.ts',
    'tree/index': 'src/tree/index.ts',
    'graph/index': 'src/graph/index.ts',
  },
  clean: true,
  dts: false,
  minify: true,
  sourcemap: false,
  splitting: true,
});
