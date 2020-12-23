import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
export default [{
    input: 'src/forms/validators/index.js',
    output: {
      dir: 'dist/validators',
      format: 'es',
      plugins:[]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [ ]
  },
  {
    input: 'src/forms/formats/index.js',
    output: {
      dir: 'dist/formats',
      format: 'es',
      plugins:[]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: []
  },
  {
    input: 'src/forms/core/index.js',
    output: {
      dir: 'dist/core',
      format: 'es',
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: []
  }]; 
