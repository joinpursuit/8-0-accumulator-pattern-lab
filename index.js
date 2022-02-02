/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let allNumbers = true;

  for (let i = 0; i < rolls.length; i++) {
    let roll = rolls[i];

    if(isNaN(roll)) {
      return false;
    }
  }
  return allNumbers;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
    if (rolls.includes(value)) {
      return value;
    } else {
      return null;
    }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // Create an array that's empty and set it as a variable
  let newArr = [];
  // Create a loop 
  for (let i = 0; i < rolls.length; i++) {
  let num = rolls[i];
    // Inside of the loop check every array for numbers greater than or equal the 'lowest' value
  if (num >= lowest) {
    // If greater than the 'lowest', store in a array
    newArr.push(num);
  }
}
// return the array
return newArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  // returning object that has rolls as 'keys:' and counts as ': value'
    // Create an empty Object
    const newObj = {};
    // Create a for loop
    for (let i = 0; i < rolls.length; i++) {
      let num = rolls[i];
      // Add the keys and numbers to new Object
      // if number isn't in object
      if (newObj[num] === undefined) {
      // create it with a value of 1 ( its current count)
      newObj[num] = 1;
      // else, add 1 to it's current count
      } else {
      newObj[num] += 1
      } 
    }
    // when done counting, return Object
  return newObj;    
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
