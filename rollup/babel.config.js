import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: './esm/index.js',
  plugins: [
    
    nodeResolve(),
    babel({
      presets: ['@babel/preset-env'],
      babelHelpers: 'bundled'
    })
  ],
  
  output: {
    exports: 'named',
    file: './index.js',
    format: 'iife',
    name: 'linkedom'
  }
};
