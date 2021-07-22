/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
// true if the values in the array are all numbers
// if there's a string or not a number, the result would be false - includes/ use type of
// let rolls = [3, "three"];

function isValid(rolls) {
  let something = true;
  for (const element of rolls) {
    if (typeof element !== 'number') {
      something = false; 
    }
  }
  return something
}

// isValid(rolls);

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
//looking for a specific value in the roll of dice
//if the value is not incuded in the roll, the result will be null

let rolls = [3, "three"];
let value = 6;

function findValue(rolls, value) {
  let goosebumps = null;
  for (const element2 of rolls) {
      if (rolls.includes(value)) {
      return value;
      } 
    }
    return goosebumps;
}

findValue(rolls, value);
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
//declare an empty array
// push values that => lowest 

function filterOutLowValues(rolls, lowest) {
  let arr = [];
  for (const element of rolls) {
    if (element >= lowest){
      arr.push(element)
    }
  }
return arr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

// turns a rolls = keys - number
// turn number amount of time it shows up into = values - count (1)
// result is an object {2: 1}
// add the count of rolls into the object?
function getRollCounts(rolls) {
  let countOfRolls = rolls.reduce(function (allNumbers, roll) {
    if (roll in allNumbers) {
    allNumbers[roll]++
    }     
    else {
    allNumbers[roll] = 1
    }
  return allNumbers;
    }, {})
return countOfRolls;
}

  

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
