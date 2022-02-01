/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let allNumbers = true
  for (let i = 0; i < rolls.length; i++) {
    let roll = rolls[i];
  if (isNaN(roll)) {
   return false;
 }
}
  return allNumbers;
} 

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  if (rolls.includes(value)) {
    return value
  } else {
    return null;
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let total = []
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest) {
    total.push(rolls[i])
    } else if (rolls.length === 0) {
      total = []
    }
  // returns an array using rolls >= the lowest value
  }
  return total
}


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

// [10, 12, 30, 45, 12]
function getRollCounts(rolls) {
  //loop will use rolls 
  let obj = {}
  for (let i = 0; i < rolls.length; i++) {
  if (obj[rolls[i]]) {
    obj[rolls[i]] += 1
  } else {
    obj[rolls[i]] = 1
  }
} 
  return obj
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
