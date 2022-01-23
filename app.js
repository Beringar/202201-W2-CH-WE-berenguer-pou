/* eslint-disable no-unused-vars */
const createBidimensionalSquareArray = (rows) => {
  const array = [];
  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < rows; j++) {
      array[i][j] = [];
    }
  }
  return array;
};

const getRandomState = (NumberOfPossibleStates) =>
  Math.floor(Math.random() * NumberOfPossibleStates);

const fillGridCells = (grid, numberOfStates, assignStateCallback) => {
  const gridToBeFilled = grid;
  for (let i = 0; i < gridToBeFilled.length; i++) {
    for (let j = 0; j < gridToBeFilled[i].length; j++) {
      gridToBeFilled[i][j] = assignStateCallback(numberOfStates);
    }
  }
  return gridToBeFilled;
};

const grid = fillGridCells(
  createBidimensionalSquareArray(10),
  2,
  getRandomState
);

const renderDomTable = (rows) => {
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < rows; j++) {
      const td = document.createElement("td");
      td.dataset.cellid = `${i}${j}`;
      td.dataset.status = grid[i][j];
      tr.append(td);
    }
    table.append(tr);
  }
  return table;
};

const getNeighbours = (positionRow, positionCol, gridArray) => {
  let aliveNeighbours = 0;
  // top left neighbour
  if (positionRow !== 0) {
    if (positionCol !== 0) {
      aliveNeighbours += gridArray[positionRow - 1][positionCol - 1];
    }
  }
  // top center neighbour
  if (positionRow !== 0) {
    aliveNeighbours += gridArray[positionRow - 1][positionCol];
  }
  // top right neighbour
  if (positionRow !== 0) {
    if (positionCol !== gridArray.length - 1) {
      aliveNeighbours += gridArray[positionRow - 1][positionCol + 1];
    }
  }
  // middle left neighbour
  if (positionCol !== 0) {
    aliveNeighbours += gridArray[positionRow][positionCol - 1];
  }
  // middle right neighbour
  if (positionCol !== gridArray.length - 1) {
    aliveNeighbours += gridArray[positionRow][positionCol + 1];
  }
  // bottom left neighbour
  if (positionRow !== gridArray.length - 1) {
    if (positionCol !== 0) {
      aliveNeighbours += gridArray[positionRow + 1][positionCol - 1];
    }
  }
  // bottom center
  if (positionRow !== gridArray.length - 1) {
    aliveNeighbours += gridArray[positionRow + 1][positionCol];
  }
  // bottom right
  if (positionRow !== gridArray.length - 1) {
    if (positionCol !== gridArray.length - 1)
      aliveNeighbours += gridArray[positionRow + 1][positionCol + 1];
  }
  return aliveNeighbours;
};

document.querySelector("#testingtable").append(renderDomTable(10));
