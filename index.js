/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let accumulator = true;

  for(roll of rolls) {
    if (typeof roll !== "number") {
     accumulator = false
    }
  } return accumulator
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let accumulator = null

  for(roll of rolls) {
    if(roll === value) {
      accumulator = roll
      return value
    } 
  } return accumulator
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let accumulator = []

  for(roll of rolls) {
    if(roll >= lowest) {
    accumulator.push(roll)
    }
  } 
  return accumulator
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let accumulator = {}
  let key = roll
  let count = 0

  for(let roll of rolls) {
    // for(i = 0; i < rolls.length; i++) { 
      let i = 0
      if(rolls[i] == roll) {
        ++i
        count = i
        
      } accumulator[roll] = count
    
    } return accumulator
  } 


 

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
