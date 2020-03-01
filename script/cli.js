#!/usr/bin/env node
'use strict'

const rosettaStone = require('../src/index')

if (!process.argv[2]) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: [ 'bca', 'aaa', 'acb']")
  rosettaStone(['bca','aaa','acb'])

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['qer', 'qet', 'we', 'wrr', 'etrr', 'ey']")
  rosettaStone(['qer','qet','we','wrr','etrr', 'ey'])

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['aa', 'bb']")
  rosettaStone(['aa','bb'])

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("Input: ['aa', 'bb', 'aa']")
  rosettaStone(['aa','bb', 'aa'])
}else{
  let args = process.argv.slice(2)
  console.log("Input: ", args)
  rosettaStone(args)
}
