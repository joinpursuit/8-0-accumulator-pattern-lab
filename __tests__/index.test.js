const {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
} = require("../");

describe("isValid()", () => {
  test("should return true if an empty array is given", () => {
    const rolls = [];
    const actual = isValid(rolls);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return true if all values in the array are numbers", () => {
    const rolls = [3, 2, 3, 6];
    const actual = isValid(rolls);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  test("should return false if any number in the array is not a number", () => {
    const rolls = ["three", 2, 3, "six"];
    const actual = isValid(rolls);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("findValue()", () => {
  test("should return `null` if the array is empty", () => {
    const rolls = [];
    const value = 4;
    const actual = findValue(rolls, value);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("should return the value if it is found in the array", () => {
    const rolls = [2, 3, 4, 4, 6];
    const value = 4;
    const actual = findValue(rolls, value);
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test("should return `null` if the value is not found in the array", () => {
    const rolls = [2, 3, 4, 4, 6];
    const value = 1;
    const actual = findValue(rolls, value);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("filterOutLowValues()", () => {
  test("should return an empty array if an empty array is inputted", () => {
    const rolls = [];
    const lowest = 1;
    const actual = filterOutLowValues(rolls, lowest);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test("should filter for values greater than the lowest value", () => {
    const rolls = [2, 4, 2, 5, 6];
    const lowest = 3;
    const actual = filterOutLowValues(rolls, lowest);
    const expected = [4, 5, 6];
    expect(actual).toEqual(expected);
  });

  test("should filter for values equal to the lowest value as well", () => {
    const rolls = [3, 2, 4, 2, 5, 6, 3];
    const lowest = 3;
    const actual = filterOutLowValues(rolls, lowest);
    const expected = [3, 4, 5, 6, 3];
    expect(actual).toEqual(expected);
  });

  test("should include all values if needed", () => {
    const rolls = [3, 2, 4, 2, 5, 6, 3];
    const lowest = 2;
    const actual = filterOutLowValues(rolls, lowest);
    const expected = [3, 2, 4, 2, 5, 6, 3];
    expect(actual).toEqual(expected);
  });

  test("should exclude all values if needed", () => {
    const rolls = [3, 2, 4, 2, 5, 6, 3];
    const lowest = 7;
    const actual = filterOutLowValues(rolls, lowest);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getRollCounts()", () => {
  test("should return an empty object if no rolls are given", () => {
    const rolls = [];
    const actual = getRollCounts(rolls);
    const expected = {};
    expect(actual).toEqual(expected);
  });

  test("should return an object that provides a count for the number of times a value appears in the array", () => {
    const rolls = [2, 3, 4];
    const actual = getRollCounts(rolls);
    const expected = { 2: 1, 3: 1, 4: 1 };
    expect(actual).toEqual(expected);
  });
  test("should increment the count for duplicates", () => {
    const rolls = [2, 2, 3, 4, 3, 2];
    const actual = getRollCounts(rolls);
    const expected = { 2: 3, 3: 2, 4: 1 };
    expect(actual).toEqual(expected);
  });
});
