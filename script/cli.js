#!/usr/bin/env node
'use strict'

const rosettaStone = require('../src/index')

// command line arguments 0 and 1 are reserved
// process.argv[0] - path to node
// process.argv[1] - path to the file
if (!process.argv[2]) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: [ 'bca', 'aaa', 'acb']")
  console.log('Output: ', rosettaStone(['bca','aaa','acb']))

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['qer', 'qet', 'we', 'wrr', 'etrr', 'ey']")
  console.log('Output: ', rosettaStone(['qer','qet','we','wrr','etrr', 'ey']))

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['aa', 'bb']")
  console.log('Output: ', rosettaStone(['aa','bb']))

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['aa', 'bb', 'aa']")
  console.log('Output: ',rosettaStone(['aa','bb', 'aa']))

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['bba', 'bbb', 'bbc']")
  console.log('Output: ',rosettaStone(['bba','bbb', 'bbc']))
}else{
  let args = process.argv.slice(2)
  console.log('Input: ', args)
  console.log('Output: ', rosettaStone(args))
}
