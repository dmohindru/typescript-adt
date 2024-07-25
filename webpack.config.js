const path = require('path');

module.exports = {
  entry: {
    list: './src/implementation/list/ArrayList.ts',
    // stack: './src/stack/Stack.ts',
    // queue: './src/queue/Queue.ts',
    // graph: './src/graph/Graph.ts',
    // tree: './src/tree/Tree.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'typescript-adt',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devtool: 'source-map',
  externals: {
    // Specify any libraries you do not want to include in your bundle
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
  },
};
