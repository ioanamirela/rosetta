# Rosetta Stone Project

## Overview

You are given a list of words sorted in alphabetical order. The only issue is that this alphabet isn’t English. Can you determine the ordering of the alphabet?

Note that you can assume the list of words will have enough information to derive the complete order of the alphabet.

Input: ['bca', 'aaa', 'acb']

Output: [‘b’, ‘a’, ‘c’]  

## Assumptions

1. All letters are in lowercase and ASCII characters.
2. Multiple orderings are not possible.
3. The list of words has enough information to derive the order of the alphabet.

## Analysis

![Analysis](docs/graph.png)

We compare the first different character of each word ans start from there to derive the order.

Algorithm:  build a graph to represent the relationship between characters, and then traverse it to find the ordering by performing a topological sort.

A topological sort is only possible if the graph has no directed cycles. If a cycle is identified, it is not possible to derive the order of the alphabet - the algorithm returns an empty array.

## Running the project

1. Clone the repo and run ```npm install```
2. Run tests: ```npm test```

![Tests](docs/test.png)

3. How to run: 
         
   * first time only: ```npm link```
   
   * with no command line arguments: ```rosetta```
   
   ![rosetta with no arguments](docs/cli.png)
   
   * with command line arguments (separated by space): ```rosetta bca aaa acb```
   
   ![rosetta with args](docs/cli-args.png)
   
Note: Running the script without arguments will output same cases as the tests. 