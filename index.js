/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // Create loop to iterate through rolls
  for (const numb of rolls){
    // If it's not a number, return false
    if (typeof numb !== "number"){
      return false;
    } 
  }
  //after loop, if all numbers were valid, return true
  return true;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  //iterate through an array
  for (const numb of rolls){
  //we want to check if the element matches the value param.
    if (numb === value){
    //if it does, return value
      return value;
    }
  }
  // otherwise, after loop, return null
  return null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // Create empty array for our total
  let newNumbers = [];
  // Iterate through the rolls array
  for (const numb of rolls){
    // Check if numbers are greater than or equal to lowest
    if (numb >= lowest){
      // If it's higher, push it into new array
      newNumbers.push(numb);
    }
  }
  // After looping, return new array
  return newNumbers;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  // Create empty object for result
  const newObject = {};
  // loop through rolls
  for (const numb of rolls){
    // define each number as a key in new object
    // check if it's our first time encounting the number
    if (newObject[numb] === undefined){
      //if it is, we give it a value of 1 (because we found it)
      newObject[numb] = 1;
    // else, if we've seen the number, increment it's value by 1.
    } else {
    newObject[numb] += 1;
    }
  }
  // return our object
  return newObject;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
