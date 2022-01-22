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
