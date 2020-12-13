import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: './esm/index.js',
  plugins: [
    
    nodeResolve(),
    terser()
  ],
  
  output: {
    exports: 'named',
    file: './es.js',
    format: 'iife',
    name: 'linkedom'
  }
};
