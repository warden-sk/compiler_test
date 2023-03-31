import compile from '@warden-sk/compiler';
import type webpack from 'webpack';

function compiler(this: webpack.LoaderContext<{}>, code: string): string {
  const filePath = this.resourcePath;

  if (/\.tsx?$/.test(filePath)) {
    code = compile(filePath, {
      assets: ['./index.css', './index.js'],
      outputPath: './public',
      reportErrors: false,
      useTransformers: true,
    });
  }

  return code;
}

export default compiler;
