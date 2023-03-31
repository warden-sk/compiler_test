import path from 'path';
import webpack from 'webpack';

const inputPath = path.resolve(__dirname, './private');
const outputPath = path.resolve(__dirname, './public');

const compiler = webpack({
  entry: path.resolve(inputPath, './index.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        loader: path.resolve(__dirname, './compiler.ts'),
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    globalObject: 'this',
    libraryTarget: 'umd2',
    path: outputPath,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
});

compiler.watch({}, (_, __) => console.log(_, __?.toString({ colors: true })));
