import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';
export default [{
    input: 'src/forms/validators',
    output: {
      dir: 'dist/validators',
      format: 'esm',
      //name:'validaor',
      //plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve(),
      commonjs()
    ],
    external: [/core-js/]
  },
  {
    input: 'src/forms/formats/index.js',
    output: {
      dir: 'dist/formats',
      format: 'esm',
      //name:'format',
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve(),
      commonjs()
    ],
    external: [/core-js/]
  },
  {
    input: 'src/forms/core/index.js',
    output: {
      dir: 'dist/core',
      format: 'esm',
      //name:'core',
      plugins: [terser()],
      // globals: {
      //   vue: 'Vue'
      // }
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve(),
      commonjs()
    ],
    external: ['vue',/core-js/]
  }]; 
