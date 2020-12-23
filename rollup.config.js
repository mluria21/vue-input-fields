import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
export default [{
    input: 'src/forms/validators/index.js',
    output: {
      dir: 'dist/validators',
      format: 'cjs',
      name:'validaor',
      sourcemap:true,
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [/core-js/]
  },
  {
    input: 'src/forms/formats/index.js',
    output: {
      dir: 'dist/formats',
      format: 'cjs',
      name:'format',
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [/core-js/]
  },
  {
    input: 'src/forms/core/index.js',
    output: {
      dir: 'dist/core',
      format: 'cjs',
      name:'core',
      plugins: [terser()],
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: ['vue',/core-js/]
  }]; 
