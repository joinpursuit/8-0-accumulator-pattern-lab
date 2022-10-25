/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let valid = true
  
  for (let i = 0; i < rolls.length; i++){
    if (!rolls.every(Number)) {
    
     return false;
    }
    

  }
return valid;
 
}

  

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let val = null;
  for (let i = 0; i < rolls.length; i++) {
    if (rolls.includes(value))
    return value;
  }
  return val
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = []
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest) {
      newArray.push(rolls[i])
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
let count = 0;
const timesRolled = {};
for (let i = 0; i < rolls.length; i++) {
  let roll = rolls[i]
  if (rolls.includes(roll)) {
     timesRolled[`${roll}`] = count;
     console.log(timesRolled)
     count++;
    //
    console.log(roll)
    console.log(count)
  }
  // count++
  console.log(roll)
  console.log(count)
}
return timesRolled;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
}
