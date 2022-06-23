/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let accumulator = 0
  for (const roll of rolls){
    if (isNaN(roll) ){
      accumulator++
    }
  }

  if (accumulator == 0){
    return true
  }else{ 
    return false
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let accumulator = 0
  // let num = 0
  for (let roll of rolls){
    if(roll == value){
      // accumulator++
      return value
    }
  }
  return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let accumulator = [];

  for (let i = 0; i < rolls.length; i++) {
    const roll = rolls[i];
    if (roll >= lowest) {
      accumulator.push(roll);
    }
  }
  return (accumulator)
}


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let accumulator = {};


  for (let roll of rolls) {
    if( accumulator[roll]){
    accumulator[roll] += 1
    } else{
      accumulator[roll] = 1
    }
  }

 return (accumulator);
}

  const rolls = [2, 2, 3, 4, 3, 2];
  getRollCounts(rolls)
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
