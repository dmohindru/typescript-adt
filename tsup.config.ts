import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  target: ['es2022', 'node18'],
  entry: {
    index: 'src/index.ts',
    'list/index': 'src/list/index.ts',
    'interfaces/index': 'src/interfaces/index.ts',
  },
  clean: true,
  dts: false,
  minify: true,
  sourcemap: false,
  splitting: true,
});
