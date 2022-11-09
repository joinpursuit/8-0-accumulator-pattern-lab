const { removeAllListeners } = require("process");

/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
let accum = false

if (rolls.length === 0) {

  accum = true
}

  for (const roll of rolls) {
  
         
      if (roll !== NaN){
        // return true;
        accum = true
        
      }
       if (typeof roll === "string") {
      
        accum = false
      }
     
        
  }
   return accum 
}

         
  
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let accum = null
  for (const roll of rolls) {
    if (roll === value) {
      accum = roll
    }
  }
   return accum
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  
  let result  = [];
  
  for (const roll of rolls) {
  
    if (roll >= lowest) {

     result.push(roll)
    //  console.log(result)
   
    }
}
// console.log(result)
 return result;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {

  let rollCounter = 0;
  let result = {};
  
  for (const roll of rolls) {
    
     
    if (!result[roll]) {
    result[roll] = 1
  
     
    }else {
      result[roll]++
    }
    for (let roll in result) {
      if (result[roll] > 1) {
        rollCounter++
      }
    }
  
    }
  return result
 
}

// const rolls = [2, 2, 3, 4, 3, 2]
// getRollCounts(rolls)


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
