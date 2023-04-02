'use strict';
const Cache = require('@warden-sk/compiler/Cache').default;
const compile = require('@warden-sk/compiler').default;
const compileCss = require('@warden-sk/compiler/compileCss').default;

const cache = new Cache();

function compiler(code) {
  const path = this.resourcePath;

  if (/\.css$/.test(path)) {
    compileCss({ cache, outputPath: './public', path });

    return '';
  }

  if (/\.tsx?$/.test(path)) {
    code = compile(path, {
      assets: ['./index.css', './index.js'],
      cache,
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
