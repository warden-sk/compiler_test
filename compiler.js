'use strict';
const compile = require('@warden-sk/compiler').default;

function compiler(code) {
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

exports.default = compiler;
