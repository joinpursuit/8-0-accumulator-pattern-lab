/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let allRoll = []
  let roll = true
  for (let i = 0; i < rolls.length; i++){
    
    if (rolls[i] === Number){
      allRoll[rolls[i]]= true
      console.log(allRoll);
    } if (isNaN(rolls[i])){
      roll =  false
      console.log(rolls[i])
      
    } 
    }

return roll  
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let foundValue = null
  for (let i = 0; i < rolls.length; i++){
    if (rolls[i] === value){
      return value
    }
  }return foundValue
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let filteredLow = []
  for (let i = 0; i < rolls.length; i++){
    const rollOfEye = rolls[i]
    if (rolls[i] >= lowest){
      filteredLow.push(rollOfEye)
    }

  } return filteredLow
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
let count = {};
for (let i = 0; i<rolls.length;i++){
  let num = rolls[i];
  count[num] = count[num] ? count[num] + 1 : 1;
}return count
}  
  

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
