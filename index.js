/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  return rolls.every(num=>{
    return typeof(num) === 'number'
  })
  // for(let num of rolls){
  //   if(typeof num === 'number'){
  //     continue
  //   } else {
  //     return false
  //   }
  // }
  // return true
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  return rolls.includes(value) ? value : null
  // let answer = null
  // for(let roll of rolls){
  //   if(roll === value){
  //     answer = value
  //   }  
  // }
  // return answer
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  return rolls.filter(num=>{
    return num>= lowest
  })
  // let arr = []
  // for(let roll of rolls){
  //   if(roll>= lowest){
  //     arr.push(roll)
  //   }
  // }
  // return arr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let rollsObj = {}
  rolls.forEach(roll=>{
    rollsObj[roll] = (rollsObj[roll] || 0) + 1
  })
  return rollsObj
  // let rollsObj = {}
  // for(let roll of rolls){
  //   rollsObj[roll] = (rollsObj[roll]||0) +1
  // }
  // return rollsObj
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
