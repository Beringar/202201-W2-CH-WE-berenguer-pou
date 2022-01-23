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

1. create a function getNeighbours --> params: cell position and array to search/count one cell's neighbours --> returns a number between 0 and 8

- TEST:if function getNeighbours(3,4,grid) --> expect a number
- TEST:if function getNeighbours(8,2,grid) --> expect an integer
- TEST:if function getNeighbours(0,0,grid) --> expect is >= 0
- TEST:if function getNeighbours(0,0,grid) --> expect is <= 3
- TEST:if function getNeighbours(9,9,grid) --> expect is >= 0
- TEST:if function getNeighbours(9,9,grid) --> expect is <= 3
- TEST:if function getNeighbours(0,1,grid) --> expect is >= 0
- TEST:if function getNeighbours(0,1,grid) --> expect is <= 5
- TEST:if function getNeighbours(5,5,grid) --> expect is >= 0
- TEST:if function getNeighbours(5,5,grid) --> expect is <= 8
- create function getNeighbours --> params: x,y,array(where cell is in, I need this to check corners of grid)
- execute tests and refactor if necessary
- implement in app.js
- create PR. Done.

2. create a function getCellNewStatus --> params: lifeStatus, totalNeighbours --> returns 0 or 1 (dead, alive)

- TEST:if function getCellNewStatus(0,0) --> expect 0 // remains dead
- TEST:if function getCellNewStatus(0,3) --> expect 1 // the revenant
- TEST:if function getCellNewStatus(0,8) --> expect 0 // remains dead
- TEST:if function getCellNewStatus(1,0) --> expect 0 // dies of loneliness
- TEST:if function getCellNewStatus(1,1) --> expect 0 // dies of loneliness
- TEST:if function getCellNewStatus(1,2) --> expect 1 // remains alive
- TEST:if function getCellNewStatus(1,3) --> expect 1 // remains alive
- TEST:if function getCellNewStatus(1,4) --> expect 0 // dies of overcrowding
- TEST:if function getCellNewStatus(1,8) --> expect 0 // dies of overcrowding

- execute tests and refactor if necessary
- implement in app.js
- create PR. Done.

3. created a life cycle test loop to check if functions are working as expected. (next steps --> make gridArray bigger and try to render via canva). Loop cycle test is OK.

### implement HTML5 canvas / test if it's worth to implement instead of a table...

1. create a function drawLifeCycleCanva --> params: the gridArray, recalculated at every life cycle cycle

- try to put on a 600px canvas every element/cell in the data array as a pixel in the canvas 2d context.
- move the html table structure and js script up to this point to a subpage /table.html and /app-table.js

### features: every new cell rendered in a random color

1. create a function getRandomColor --> no params. Returns a color in hex format as a string.

- call getRandomColor at "drawing" time in drawLifeCycle function.
- tests: pending
- TODO: improvement: add new color only to reborn cells :)

2. create a color picker (or something like) to pick a color for the new born cells, those mantaining life state take default color (by now: #000000)

### features: add a cycle speed input range / listener

1. create input range element to change cycle speed (range from 50ms to 2000ms --> default value at 500ms). OK
