'use strict';
const compile = require('@warden-sk/compiler').default;

function compiler(code) {
  const filePath = this.resourcePath;

  if (/\.tsx?$/.test(filePath)) {
    /**
     * For more information, visit the compiler documentation at:
     * https://github.com/warden-sk/compiler
     */
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
