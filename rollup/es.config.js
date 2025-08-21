import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './esm/index.js',
  plugins: [
    shims(),
    nodeResolve(),
    commonjs(),
    json()
  ],
  output: {
    file: './worker.js',
    format: 'esm'
  }
};

function shims() {
  return {
    resolveId(specifier) {
      if(specifier.endsWith('canvas.cjs')) {
        return 'shim:canvas';
      }
    },
    load(id) {
      switch(id) {
        case 'shim:canvas': {
          return `
            class Canvas {
              constructor(width, height) {
                this.width = width;
                this.height = height;
              }
              getContext() { return null; }
              toDataURL() { return ''; }
            }
            export default {createCanvas: (width, height) => new Canvas(width, height)};
          `;
        }
      }
    }
  }
}