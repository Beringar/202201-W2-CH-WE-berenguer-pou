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

// document.querySelector("#testingtable").append(renderDomTable(10));

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
// NOTE: TESTS createBidimensionalSquareArray
describe("Given a createBidimensionalSquareArray function", () => {
  describe("When it receives 10", () => {
    test("Then it should return an array", () => {
      // Arrange
      const rows = 10;
      const expectedType = Array;

      // Act
      const result = createBidimensionalSquareArray(rows);

      // Assert
      expect(result).toBeInstanceOf(expectedType);
    });
  });
  describe("When it receives 10", () => {
    test("Then it should return an array with length 10", () => {
      // Arrange
      const rows = 10;
      const expectedLength = 10;

      // Act
      const result = createBidimensionalSquareArray(rows);

      // Assert
      expect(result).toHaveLength(expectedLength);
    });
  });
  describe("When it receives 10", () => {
    test("Then the resulting objects in the resulting array have to be also of Array type", () => {
      // Arrange
      const rows = 10;
      const expectedType = Array;

      // Act
      const result = createBidimensionalSquareArray(rows)[0];

      // Assert
      expect(result).toBeInstanceOf(expectedType);
    });
  });
  describe("When it receives 10", () => {
    test("Then the resulting objects in the resulting array have to have a length of 10", () => {
      // Arrange
      const rows = 10;
      const expectedLength = 10;

      // Act
      const result = createBidimensionalSquareArray(rows)[0];

      // Assert
      expect(result).toHaveLength(expectedLength);
    });
  });
  describe("When it receives 10 and getRandomState(2)", () => {
    test("Then all the children array", () => {
      // Arrange
      const rows = 10;
      const expectedLength = 10;

      // Act
      const result = createBidimensionalSquareArray(rows)[0];

      // Assert
      expect(result).toHaveLength(expectedLength);
    });
  });
});

// NOTE: TESTS getRandomState

describe("Given a getRandomState function", () => {
  describe("When it receives 2", () => {
    test("Then it should return a Number", () => {
      // Arrange
      const possibleStates = 2;
      const expectedType = "number";

      // Act
      const result = getRandomState(possibleStates);

      // Assert
      expect(typeof result).toBe(expectedType);
    });
  });
  describe("When it receives 2", () => {
    test("Then it should return an integer", () => {
      // Arrange
      const possibleStates = 2;
      const expectedIsInt = true;

      // Act
      const result = getRandomState(possibleStates);

      // Assert
      expect(Number.isInteger(result)).toBe(expectedIsInt);
    });
  });
  describe("When it receives 10", () => {
    test("Then it should return a value greater than or equal to 0", () => {
      // Arrange
      const possibleStates = 10;
      const minValue = 0;

      // Act
      const result = getRandomState(possibleStates);

      // Assert
      expect(result).toBeGreaterThanOrEqual(minValue);
    });
  });
  describe("When it receives 10", () => {
    test("Then it should return a value less than or equal to 10", () => {
      // Arrange
      const possibleStates = 10;
      const maxValue = 10;

      // Act
      const result = getRandomState(possibleStates);

      // Assert
      expect(result).toBeLessThanOrEqual(maxValue);
    });
  });
});

// NOTE: TESTS fillGridCells

describe("Given a fillGridCells function", () => {
  describe("When it receives (createBidimensionalSquareArray(10), 2, getRandomState)", () => {
    test("Then it should return an array of arrays filled exclusevely with 1 or 0", () => {
      // Arrange
      const gridToBeFilled = createBidimensionalSquareArray(10);
      const possibleStates = 2;
      const callbackFunction = getRandomState;

      // Act
      const everyrCellIs0or1 = fillGridCells(
        gridToBeFilled,
        possibleStates,
        callbackFunction
      )
        .map((row) => row.every((number) => number === 1 || number === 0))
        .every((row) => row);

      // Assert
      expect(everyrCellIs0or1).toBe(true);
    });
  });
});

// NOTE: TESTS getNeighbours

describe("Given a getNeighbours function", () => {
  describe("When it receives 3,4,grid", () => {
    test("Then it should return a Number", () => {
      // Arrange
      const positionRow = 3;
      const positionCol = 4;
      const arrayWhereCellLives = grid;
      const expectedType = "number";

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(typeof result).toBe(expectedType);
    });
  });
  describe("When it receives 8,2,grid", () => {
    test("Then it should return an integer", () => {
      // Arrange
      const positionRow = 8;
      const positionCol = 2;
      const arrayWhereCellLives = grid;
      const expectedIsInt = true;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(Number.isInteger(result)).toBe(expectedIsInt);
    });
  });
  describe("When it receives 0,0,grid", () => {
    test("Then it should return a value greater than or equal to 0", () => {
      // Arrange
      const positionRow = 0;
      const positionCol = 0;
      const arrayWhereCellLives = grid;
      const minValue = 0;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeGreaterThanOrEqual(minValue);
    });
  });
  describe("When it receives 0,0,grid", () => {
    test("Then it should return a value less than or equal to 3", () => {
      // Arrange
      const positionRow = 0;
      const positionCol = 0;
      const arrayWhereCellLives = grid;
      let maxValue = 8;
      if (positionRow === grid.length - 1 || positionRow === 0) maxValue -= 3;
      if (positionCol === grid.length - 1 || positionCol === 0) maxValue -= 2;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeLessThanOrEqual(maxValue);
    });
  });
  describe("When it receives 9,9,grid", () => {
    test("Then it should return a value greater than or equal to 0", () => {
      // Arrange
      const positionRow = 9;
      const positionCol = 9;
      const arrayWhereCellLives = grid;
      const minValue = 0;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeGreaterThanOrEqual(minValue);
    });
  });
  describe("When it receives 9,9,grid", () => {
    test("Then it should return a value less than or equal to 3", () => {
      // Arrange
      const positionRow = 9;
      const positionCol = 9;
      const arrayWhereCellLives = grid;
      let maxValue = 8;
      if (positionRow === grid.length - 1 || positionRow === 0) maxValue -= 3;
      if (positionCol === grid.length - 1 || positionCol === 0) maxValue -= 2;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeLessThanOrEqual(maxValue);
    });
  });
  describe("When it receives 0,1,grid", () => {
    test("Then it should return a value greater than or equal to 0", () => {
      // Arrange
      const positionRow = 0;
      const positionCol = 1;
      const arrayWhereCellLives = grid;
      const minValue = 0;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeGreaterThanOrEqual(minValue);
    });
  });
  describe("When it receives 0,1,grid", () => {
    test("Then it should return a value less than or equal to 5", () => {
      // Arrange
      const positionRow = 0;
      const positionCol = 1;
      const arrayWhereCellLives = grid;
      let maxValue = 8;
      if (positionRow === grid.length - 1 || positionRow === 0) maxValue -= 3;
      if (positionCol === grid.length - 1 || positionCol === 0) maxValue -= 2;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeLessThanOrEqual(maxValue);
    });
  });
  describe("When it receives 5,5,grid", () => {
    test("Then it should return a value greater than or equal to 0", () => {
      // Arrange
      const positionRow = 5;
      const positionCol = 5;
      const arrayWhereCellLives = grid;
      const minValue = 0;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeGreaterThanOrEqual(minValue);
    });
  });
  describe("When it receives 5,5,grid", () => {
    test("Then it should return a value less than or equal to 8", () => {
      // Arrange
      const positionRow = 5;
      const positionCol = 5;
      const arrayWhereCellLives = grid;
      let maxValue = 8;
      if (positionRow === grid.length - 1 || positionRow === 0) maxValue -= 3;
      if (positionCol === grid.length - 1 || positionCol === 0) maxValue -= 2;

      // Act
      const result = getNeighbours(
        positionRow,
        positionCol,
        arrayWhereCellLives
      );

      // Assert
      expect(result).toBeLessThanOrEqual(maxValue);
    });
  });
});
