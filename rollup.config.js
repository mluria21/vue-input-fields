import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
export default [{
    input: 'src/forms/validators/index.js',
    output: {
      dir: 'dist/validators',
      format: 'es',
      plugins:[/*terser()*/]
    },
    plugins: [
      babel({ babelHelpers: 'runtime' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [/@babel\/runtime/]
  },
  {
    input: 'src/forms/formats/index.js',
    output: {
      dir: 'dist/formats',
      format: 'es',
      plugins:[/*terser()*/]
    },
    plugins: [
      babel({ babelHelpers: 'runtime' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [ /core-js/,/@babel\/runtime/]
  },
  {
    input: 'src/forms/core/index.js',
    output: {
      dir: 'dist/core',
      format: 'es',
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'runtime' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [ /core-js/,/@babel\/runtime/]
  }];