/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

function isValid(rolls) {
  // use for of loop to seperate elements of rolls array
  for (let roll of rolls) {
    // use typeof to determine if each roll element is a number
    // if all roll elements are numbers, return true
    if (typeof roll === 'number') {
      return true;
    }
    // otherwise, return false
    else {
      return false;
    }
  }
  return true;
}


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // use for of loop to seperate elements of rolls array
  for (let roll of rolls) {
    // use includes method to determine if value is in the array
    // if array includes value, return true
    if (rolls.includes(value)) {
      return value;
    }
    // otherwise, return false
    else {
      return null;
    }
  }
  return null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // create new empty array
  let newArray = [];
  // use for of loop to seperate elements of rolls array
  for (let roll of rolls) {
    // compare elements of rolls array to lowest for duration of loop
    if (roll >= lowest) {
      // push only elements that are greater than or equal to lowest to new array
      newArray.push(roll);
    }
  }
  return newArray;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  // create new empty object
  let newObject = {};
  // use for of loop to seperate elements of rolls array
  for (let roll of rolls) {
    // if value appears in array, increment its value by 1
    if (newObject[roll]) {
      newObject[roll] += 1;
    }
    // otherwise, assign it a value of 1
    else {
      newObject[roll] = 1;
    }
  }
  return newObject;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
