/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let bool = true;

  for (let roll of rolls) {
    if (typeof(roll) !== "number" ) {
      bool = false;
    } else if (rolls.length === 0 || typeof(roll) !== "number") {
      bool = true;
    }
  }

  return bool;
}

// Test Cases
console.log("Test Case for rolls = [1, 5, 2, 5, 2, 1]")
console.log(isValid([1, 5, 2, 5, 2, 1]));
console.log("Test Case for rolls = [A, 5, 2, 5, 2, 1]")
console.log(isValid(["A", 5, 2, 5, 2, 1]));
console.log("Test Case for rolls = []")
console.log(isValid([]));

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let valueOccurance = null;

  for (let roll of rolls) {
    if (roll === value) {
      valueOccurance = value
    } 
  }

  return valueOccurance;
}

// Test Cases
console.log("Test case for value not included: Rolls = [2, 5, 3, 6] & Value = 7");
console.log(findValue([2, 5, 3, 6], 7));
console.log("Test case for value included: Rolls = [2, 5, 3, 6] & Value = 6");
console.log(findValue([2, 5, 3, 6], 6));
console.log("Test case for empty array: Rolls = [] & Value = 6");
console.log(findValue([], 6));

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let rollsGreaterThanLowest = [];
  
  if (rolls.length === 0) {
    return rollsGreaterThanLowest;
  }

  for (let roll of rolls) {
    if (roll < lowest) {
      continue;
    }
    rollsGreaterThanLowest.push(roll);
  }

  return rollsGreaterThanLowest;
}

// Test Cases
console.log("Test case for when: Rolls = [2, 5, 1, 1, 3, 6] &  Lowest is 3");
console.log(filterOutLowValues([2, 5, 1, 1, 3, 6], 3));
console.log("Test case for when: Rolls = [2, 5, 1, 1, 3, 6] &  Lowest is 6");
console.log(filterOutLowValues([2, 5, 1, 1, 3, 6], 6));
console.log("Test case for when: Rolls = [2, 5, 1, 1, 3, 6] &  Lowest is 1");
console.log(filterOutLowValues([2, 5, 1, 1, 3, 6], 1));
console.log("Test case for empty rolls array:");
console.log(filterOutLowValues([], 2));

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
 
  let rollNumberFrequency = {};

  for (let roll of rolls) {
    if (rollNumberFrequency[roll]) {
      rollNumberFrequency[roll] += 1;
    } else {
      rollNumberFrequency[roll] = 1;
    }
  }

  return rollNumberFrequency;
}

// Test Cases
console.log("Test case for empty rolls array:");
console.log(getRollCounts([]));
console.log("Test case for rolls array: [2, 5, 2, 4, 2, 3, 2, 1, 4, 5, 5, 5]");
console.log(getRollCounts([2, 5, 2, 4, 2, 3, 2, 1, 4, 5, 5, 5]));

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
