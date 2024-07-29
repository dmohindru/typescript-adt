import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: {
    index: 'src/index.ts',
    'list/index': 'src/list/index.ts',
    'interfaces/index': 'src/interfaces/index.ts',
  },
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  sourcemap: true,
});
