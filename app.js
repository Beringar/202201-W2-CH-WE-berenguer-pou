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

document.querySelector("#testingtable").append(renderDomTable(10));
