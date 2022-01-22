# Beringar Game of life developing plan

I will put here the steps i'm going to develop:

## prepare a 10x10 grid (to be bigger in the future) where cells will live (or die...)

branch-name: JS-grid-prototype

1. make a 10x10 matrix with a bidimensional array

- TEST:if function createBidimensionalSquareArray(10) --> expect type is array
- TEST:if function createBidimensionalSquareArray(10) --> expect result.length === 10
- TEST:if function createBidimensionalSquareArray(10) --> expect result[0] is type array
- TEST:if function createBidimensionalSquareArray(10) --> expect result[0].length === 10
- write the function createBidimensionalSquareArray with one param (number of rows) 10 if we want a 10x10 grid.
- execute tests and refactor if necessary
- create PR. Done.

2. create a function to get a random state between 0 and n possible states

- TEST:if function getRandomState(2) --> expect a Number
- TEST:if function getRandomState(2) --> expect an integer number
- TEST:if function getRandomState(10) --> expect is >= 0
- TEST:if function getRandomState(10) --> expect is <= 10
- write the function getRandomState with one param (number of possible states) 2 if we want binary state (0 dead, 1 alive)
- execute tests and refactor if necessary
- create PR. Done.
