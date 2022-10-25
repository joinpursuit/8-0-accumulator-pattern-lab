/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let result = true;

  for(let roll of rolls) {
    if(typeof roll !== 'number') {
      return false;
    }
  }
  return result;

  // let result = true;

  // for(let i = 0; i < rolls.length; i++) {
  //   if(typeof roll[i] !== 'number') {
  //     return false;
  //   } 
  // }
  // return result;
}

 

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for (let i = 1; i < rolls.length; i++) {
    if(rolls[i] === value) {
      return value;
    }
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
  let allNumInArr = [];

  for (let i = 0; i < rolls.length; i ++) {
    if(rolls[i] >= lowest) {
      allNumInArr.push(rolls[i]) 
    }
  }
  return allNumInArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let getCounts = {}; 

  for(let i = 0; i < rolls.length; i++) {
    let num = rolls[i];
    if(!getCounts[num]) {
      getCounts[num] = 1;
    } else {
      getCounts[num] += 1;
    }
  }
  return getCounts;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
