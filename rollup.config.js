import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import {getBabelOutputPlugin} from '@rollup/plugin-babel'
export default [{
    input: 'src/forms/validators/index.js',
    output: {
      dir: 'dist/validators',
      format: 'es',
      plugins:[
        getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ] },
          terser())
      ]
    },
    plugins: [
      //babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: [ ]
  },
  {
    input: 'src/forms/formats/index.js',
    output: {
      dir: 'dist/formats',
      format: 'es',
      plugins:[terser(),
        getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ] })
      ]
    },
    plugins: [
      //babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: []
  },
  {
    input: 'src/forms/core/index.js',
    output: {
      dir: 'dist/core',
      format: 'es',
      plugins: [
        getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ] })
      ],
    },
    plugins: [
      //babel({ babelHelpers: 'bundled' ,exclude: 'node_modules/**',}),
      nodeResolve()
    ],
    external: ['vue']
  }]; 
