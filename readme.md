# Beringar Game of life developing plan

I will put here the steps i'm going to develop:

### Prepare a 10x10 grid (to be bigger in the future) where cells will live (or die...), fill it with random values (0 or 1)

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

3. create a function to fill cell with an initial random value

- TEST:if function fillGridCells (createBidimensionalSquareArray(10), 2, getRandomState) --> expect every cell has a value of 1 or 0.
- create function fillGridCells --> params: array, rows,initialState
- execute tests and refactor if necessary
- create PR. Done.

4. create html table for testing cells behavior

(TODO: after all tests of life rules work --> remove table from DOM and render data on a canvas, or try it...)

### Define functions (as modularized as possible) to check/test life rules for a particular cell for each life cycle

1. create a function getNeighbours --> params: cell position and array to search/count one cell's neighbours
   (test for a grid 10x10)

- TEST:if function getNeighbours(3,4) --> expect a number
- TEST:if function getNeighbours(8,2) --> expect an integer
- TEST:if function getNeighbours(0,0) --> expect is >= 0
- TEST:if function getNeighbours(0,0) --> expect is <= 3
- TEST:if function getNeighbours(9,9) --> expect is >= 0
- TEST:if function getNeighbours(9,9) --> expect is <= 3
- TEST:if function getNeighbours(0,1) --> expect is >= 0
- TEST:if function getNeighbours(0,1) --> expect is <= 5
- TEST:if function getNeighbours(5,5) --> expect is >= 0
- TEST:if function getNeighbours(5,5) --> expect is <= 8
- create function getNeighbours --> params: x,y,array(where cell is in, I need this to check corners of grid)
- execute tests and refactor if necessary
- implement in app.js
- create PR. Done.
