# Beringar Game of life developing plan

I will put here the steps i'm going to develop:

## prepare a grid where cells will live (or die...)

branch-name: JS-grid-prototype

1. JS-grid-prototype 10X10 (to be bigger in the future)
1. make a 10x10 matrix with a bidimensional array
   a. TEST:if function createBidimensionalSquareArray(10) --> expect type is array)
   b. TEST:if function createBidimensionalSquareArray(10) --> expect result.length === 10)
   c. TEST:if function createBidimensionalSquareArray(10) --> expect result[0] is type array)
   d. TEST:if function createBidimensionalSquareArray(10) --> expect result[0].length === 10)
   e. write the function createBidimensionalSquareArray with one param (number of rows) 10 if we want a 10x10 grid.
   f. execute tests and refactor if necessary
   g. create PR. Done.
