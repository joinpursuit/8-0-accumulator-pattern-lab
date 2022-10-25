/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  if(rolls.length === 0){
    return true
  }
    for(let i = 0; i < rolls.length; i++){
      if(typeof rolls[i] === 'number'){
        return true
      }
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
  if(rolls.length === 0){
    return null
  }
let result = null
for(let i = 0; i < rolls.length; i++){
  if(rolls[i] === value){
    result = rolls[i]
  }
}
return result
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  if(rolls.length === 0){
    return []
  }
  let arr = []
  for(let i = 0; i < rolls.length; i++){
    if(rolls[i] > lowest || rolls[i] === lowest){
      arr.push(rolls[i])
    }
  }
  return arr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  if(rolls.length === 0){
    return {}
  }
  
  let obj = {}
  for(let i = 0; i < rolls.length; i++){
    //if obj doesn't have element
    if(!obj[rolls[i]]){
      //record element and start count at 1
    obj[rolls[i]] = 1
    } else {
      //if there  add 1 to count
      obj[rolls[i]] += 1
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
