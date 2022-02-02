const { TestWatcher } = require("jest");

/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  result = false;
  for (let i = 0; i <= rolls.length; i++) {
    if(!rolls.length) {
      result = true;
    }
    if (typeof rolls[i] === 'number') {
      result = true;
    }
  
  else {
  return result;
}
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
 let result = null;
 for(let aRoll of rolls) {
   if (aRoll === value) {
     result = aRoll;
   }
 }
 return result;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let dummy = [];
  for(let aRoll of rolls) {
    if(lowest <= aRoll) {
      dummy.push(aRoll)
    }
   } 
   return dummy;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {};
  //let count = 0;
  
  for(let aRoll of rolls) {
  if(obj[aRoll] === undefined) {
      obj[aRoll] = 1;
     //return obj;
    }
  else if (obj[aRoll] >= 1){
        obj[aRoll] += 1;
  
  }
}return obj;
    }
  

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
