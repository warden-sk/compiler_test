'use strict';
const path = require('path');
const webpack = require('webpack');

const compiler = webpack({
  entry: path.resolve('./private/index.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        loader: path.resolve(__dirname, './compiler.js'),
        test: /\.(?:css|tsx?)$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    globalObject: 'this',
    libraryTarget: 'umd2',
    path: path.resolve(__dirname, './public'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
});

compiler.watch({}, (_, __) => console.log(_, __?.toString({ colors: true })));
