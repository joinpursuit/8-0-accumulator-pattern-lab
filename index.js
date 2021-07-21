/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
 let isNum = true;
  for (let roll of rolls) {
    if (typeof roll === 'number') {
      isNum = true
    } else {
      isNum = false 
    }
  } return isNum
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let isFound = null;
  for (let roll of rolls) {
    if (roll === value) {
      isFound = value
     } else {
    }
  } return isFound
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
    newArr.push(roll)
  } 
 } return newArr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
 let newObj = {};
 for (let roll of rolls) {
  newObj[roll] = (++newObj[roll]) || 1;
}
 return newObj
}
getRollCounts([2, 2, 3, 4, 3, 2])

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
