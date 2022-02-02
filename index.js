/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let areNumbers = false;
  if (rolls.length === 0) {
    areNumbers = true;
  } else {
  for (let roll of rolls) {
    if (typeof roll === 'number') {
      areNumbers = true;
    } else {
      return areNumbers;
    }
  }
}
  return areNumbers;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let checkValue = null;
  for (let roll of rolls) {
    if (roll === value) {
      checkValue = roll;
    } 
  }
  return checkValue;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let equalOrGreater = [];
  for (let roll of rolls) {
    if (roll >= lowest) {
      equalOrGreater.push(roll);
    }
  }
  return equalOrGreater;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let count = 0;
  rolls.sort();
  let firstElement = rolls[0];
  let objWithKeysAndCounts = {};
  for (let i = 0; i <= rolls.length-1; i++) {
    if (firstElement === rolls[i]) {
      count++;
    } else {
     count = 1;
     firstElement = rolls[i];
    }
    objWithKeysAndCounts[rolls[i]] = count;  
  }
  return objWithKeysAndCounts;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
