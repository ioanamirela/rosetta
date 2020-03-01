# Rosetta Stone Project

## Overview

You are given a list of words sorted in alphabetical order. The only issue is that this alphabet isn’t English. Can you determine the ordering of the alphabet?

Note that you can assume the list of words will have enough information to derive the complete order of the alphabet.

Input: ['bca', 'aaa', 'acb']

Output: [‘b’, ‘a’, ‘c’]  

## Assumptions

1. All letters are in lowercase and ASCII characters.
2. Input is always valid.
3. Multiple orderings are not possible.

## Analysis

![Analysis](docs/graph.png)

## Running the project

1. Clone the project and run ```npm install```
2. Run tests: ```npm test```

![Tests](docs/test.png)

3. Run script: 
         
   * first time only: ```npm link```
   
   * with no arguments: ```rosetta```
   
   ![rosetta with no arguments](docs/cli.png)
   
   * with arguments (separated by space): ```rosetta a b a```
   
   ![rosetta with args](docs/cli-args.png)
   
Note: Running the script without arguments will output same cases as the tests. 