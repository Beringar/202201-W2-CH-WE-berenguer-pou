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
});

// NOTE: TESTS getRandomState

describe("Given a getRandomState function", () => {
  describe("When it receives 2", () => {
    test("Then it should return a Number", () => {
      // Arrange
      const possibleStates = 2;
      const expectedType = Number;

      // Act
      const result = getRandomState(possibleStates);

      // Assert
      expect(result).toBeInstanceOf(expectedType);
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
      expect(Number.isInteger(result).toBe(expectedIsInt));
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
