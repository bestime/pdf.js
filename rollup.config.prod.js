import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import json from '@rollup/plugin-json'


const toolName = 'jUtilsBase'

function zeroTo2 (data) {
  if(data < 10) {
    return '0' + data
  } else {
    return String(data)
  }
}

function simpleFromatTime (date) {
  var year = zeroTo2(date.getFullYear());
  var month = zeroTo2(date.getMonth() + 1);
  var day = zeroTo2(date.getDate());
  var hour = zeroTo2(date.getHours());
  var minute = zeroTo2(date.getMinutes());
  var second = zeroTo2(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}


function getBanner () {
  return `/**
 * 纯JS工具库 => ${toolName}
 * @update ${simpleFromatTime(new Date())}
 */`
}




export default [
  {
    input: './build/generic-legacy/build/pdf.mjs',
    output: {
      file:  `./build/generic-legacy/build/pdf.js`,
      banner: getBanner(),
      format: 'umd',    
      strict: true,
      name: toolName,
      indent: false,
      sourcemap: false,
      
    },
    
    plugins: [
      nodeResolve(), 
      json(),
      commonjs(),  
      babel({
        babelHelpers: 'bundled',
        exclude: "node_modules/**",
        extensions: [
          '.mjs'
        ]
      }),  
      terser({
        ie8: true,
        compress: true,
        output: {
          beautify: false
        }
      }),    
    ]
  },

  {
    input: './build/generic-legacy/build/pdf.worker.mjs',
    output: {
      file:  `./build/generic-legacy/build/pdf.worker.js`,
      banner: getBanner(),
      format: 'umd',    
      strict: true,
      name: toolName,
      indent: false,
      sourcemap: false,
      
    },
    
    plugins: [
      nodeResolve(), 
      json(),
      commonjs(),  
      babel({
        babelHelpers: 'bundled',
        exclude: "node_modules/**",
        extensions: [
          '.mjs'
        ]
      }),  
      terser({
        ie8: true,
        compress: true,
        output: {
          beautify: false
        }
      }),    
    ]
  },
  
  
];