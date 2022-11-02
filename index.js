const { TestWatcher } = require("jest");

/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  const result = []
  for (let i = 0; i <= rolls.length - 1; i++) {
    rolls.push(i);
    return false


  } if (rolls.length === 0) { return true } 
  

  return result


}


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  const result = [] 
  // if (rolls.length <= 1 )  { return `No value found` } 
  for (let i = 0; i <= rolls.length - 1; i++) {
    rolls.push(i)

    return value 
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
  const result = []
  for (let i = 0; i <= rolls.length - 1; i++) {
    rolls.push(i)
    return lowest;
  } 
   {
    if (rolls.length >= 1) {return greater}

  }
  return result;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  const rollsObj = {}
  return rollsObj;

  rolls.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });


}
//^-----return Object.keys(rollsObj).length

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
