/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // defaut value and output data type
  let bool = true;
  // define the loop
  for (let elem of rolls) {
  // accumulate
      if (typeof elem !== "number") {
        bool = false;
      }
  }
  return bool;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let found = null;
  for (let roll of rolls) {
    if (roll === value) {
      found = value;
    }
  }
  return found;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArr = [];
  for (let roll of rolls) {
    if (roll >= lowest) {
      newArr.push(roll);
    }
  }
  return newArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {};
  for (let roll of rolls) {
    if (roll in obj) {
      obj[roll] += 1;
    }
    else {
      obj[roll] = 1;
    }
  }
  return obj;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
