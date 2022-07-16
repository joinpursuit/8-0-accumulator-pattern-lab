/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
 function isValid(rolls) {

  let numbers = true;git
  
    for(let roll of rolls){
  
    typeof roll !== 'number' ? numbers = false : numbers
    break;
    }
  
  return numbers
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let newValue = null;

  for(let roll of rolls){

    roll === value ? newValue = value : newValue;
  }

  return newValue
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {

  let largeValues = []

  for(let roll of rolls){

    roll >= lowest ? largeValues.push(roll) : largeValues;
  }
    return largeValues
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {

  let accumulator = {}

  if (rolls.length === 0) {
    return accumulator;
  }
  // logic goes here
  for (let i = 0; i < rolls.length; i++) {
    const numbers = rolls[i]
    if(!accumulator[numbers]){
      accumulator[numbers] = 1
    }else{
      accumulator[numbers] += 1
     }

 }
  return accumulator
}
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
