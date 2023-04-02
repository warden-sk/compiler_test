'use strict';
const compile = require('@warden-sk/compiler').default;

function compiler(code) {
  const filePath = this.resourcePath;

  if (/\.css$/.test(filePath)) {
    return;
  }

  if (/\.tsx?$/.test(filePath)) {
    code = compile(filePath, {
      assets: ['./index.css', './index.js'],
      outputPath: './public',
      publicPath: 'http://127.0.0.1',
      reportErrors: true,
      useServer: true,
      useTransformers: true,
    });
  }

  return code;
}

exports.default = compiler;
