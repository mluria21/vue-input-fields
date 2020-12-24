import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
//import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import vue from 'rollup-plugin-vue';
export default [{
    input: 'src/forms/validators/index.js',
    output: {
      dir: 'dist/validators',
      format: 'esm',
      exports: 'named',
      //name:'validaor',
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve(),
      commonjs(),
      buble()
    ],
    external: [/core-js/,'libphonenumber-js']
  },
  {
    input: 'src/forms/formats/index.js',
    output: {
      dir: 'dist/formats',
      format: 'esm',
      exports: 'named',
      //name:'format',
      plugins:[terser()]
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve(),
      commonjs(),
      buble()
    ],
    external: [/core-js/,'libphonenumber-js']
  },
  {
    input: 'src/forms/core/index.js',
    output: {
      dir: 'dist/core',
      format: 'esm',
      exports: 'named',
      //name:'core',
      plugins: [terser()],
      // globals: {
      //   vue: 'Vue'
      // }
    },
    plugins: [
      babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve(),
      commonjs(),
      buble()
    ],
    external: ['vue',/core-js/,'libphonenumber-js']
  },
  {
    input: 'src/fields/nova/index.js', // Path relative to package.json
    output: {
        exports: 'named',
        dir:'dist/fields/nova',
        plugins: [terser()]
    },
    plugins: [
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],}),
        //buble(), // Transpile to ES5
    ],
    external: [/core-js/,'libphonenumber-js','vue']
  }
]; 
  