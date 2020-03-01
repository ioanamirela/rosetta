# Rosetta Stone Project

## Overview

You are given a list of words sorted in alphabetical order. The only issue is that this alphabet isn’t English. Can you determine the ordering of the alphabet?

Note that you can assume the list of words will have enough information to derive the complete order of the alphabet.

Input: ['bca', 'aaa', 'acb']

Output: [‘b’, ‘a’, ‘c’]  

## Assumptions

1. All letters are in lowercase and ASCII characters.
2. Multiple orderings should not be possible, since the problem states the list of words will have enough information to derive the complete order of the alphabet, 
but just in case, the algorithm should account for such a scenario and will output a solution if multiple available or there isn't enough info to derive a single solution.
3. In case no solution is found, an empty array should be returned.

## Analysis

![Analysis](docs/graph.png)

We compare the first different character of each word and start from there to derive the order.

Algorithm:  build a graph to represent the relationship between characters, and then traverse it to find the ordering by performing a topological sort.

A topological sort is only possible if the graph has no directed cycles. If a cycle is identified, it is not possible to derive the order of the alphabet - the algorithm returns an empty array.

## Deliverable
1. Algorithm consisting of
    * Graph class 
    * Topological sort
2. Unit tests covering 3 happy paths and 3 edge case scenarios.
3. Script that accepts command line arguments to run the algorithm for any input, and in the absence of args runs same scenarios as test cases.
4. Documentation (Readme file)

## Running the tests and project (instructions for macOS or Linux)

1. Clone the repo and run ```npm install```
2. Run tests: ```npm test```

![Tests](docs/test.png)

3. How to run (see troubleshooting section below in case of issues): 
         
   * first time only: ```npm link``` 
   * with no command line arguments: ```rosetta```
   
   ![rosetta with no arguments](docs/cli.png)
   
   * with command line arguments (separated by space): ```rosetta bca aaa acb```
   
   ![rosetta with args](docs/cli-args.png)
   
Note: Running the script without arguments will output same cases as the tests. 

## Troubleshooting

1. Permission denied when running ```npm link```

   Problem: Most likely, the node installation was ran with root permissions so the global package installation is asking you to be root.
   
   Solution: 
      * quick & dirty: ```sudo npm link```
      * not so quick: re-install npm modules globally without sudo.