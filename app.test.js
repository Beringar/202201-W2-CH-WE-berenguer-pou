/**
 * @jest-environment jsdom
 */
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
