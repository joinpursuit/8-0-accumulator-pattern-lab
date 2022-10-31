/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

function isValid(rolls) {
  if (rolls.length === 0) {
    return true;
  }
  let result = false;
  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] === typeof i) {
      return true;
    }
    return result;
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  if (rolls.length === 0) {
    return null;
  }
  let output = 0;
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] === value) {
      output = rolls[i];
      return output;
    } else if (!rolls.includes(value)) {
      output = null;
      return output;
    }
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = [];
  rolls.forEach((el) => {
    if (el >= lowest) {
      newArray.push(el);
    }
  });
  return newArray;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let newObject = {};
  let counter = 1;
  let value;

  rolls.forEach((el,i) => {
    
    if(el === el || i !== 0 ) {
      value = el
      newObject['value'] = counter 
    } else {
      if (el === el) {
        value = el 
        counter++
        newObject['value'] = i
      }
    }
  })
// console.log(newObject)
  return newObject
}


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
