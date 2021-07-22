/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
// isNumber method?
// typeof

function isValid(rolls) {
  // set up the default value: boolean
  let isNumber = true;
  // set up a FOR OF loop
  for (let i = 0; i < rolls.length; i++) {
    const eachNumber = rolls[i];
    // set up an IF statement, use a method determining number
    if (typeof eachNumber === "number") {
    // if true, change default value: true
      isNumber = true;
    } else {
    // else, default value: false
      isNumber = false;
    }
  }  
  // return the changed value from line 7
  return isNumber;
}
/**
 * Finds a value in an array. If that value is in the array, returns it. 
 * Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // set up a default value: NULL
  let isValue = null;
  // set up a FOR I loop
  for (let i = 0; i < rolls.length; i++) {
    const eachNumber = rolls[i];
    // IF eachNumber is equal to VALUE
    if (eachNumber === value) {
      // default value is assigned VALUE
      isValue = value;
    } 
  }
  //return changed default value
  return isValue; 
}
// slice or empty array then use push
/**
 * Returns a new array from the `rolls` array with only values equal 
 * to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value
 *  in the new array.
 * @returns {number[]} An array of all numbers that are equal to or 
 * higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // set up a default value: empty array
  let comparedValue = [];
  // set up a FOR OF loop to go through the array elements
  for (const eachNumber of rolls) {
    // set up an IF statement
    // IF eachNumber >= LOWEST value
    if (eachNumber >= lowest) {
      // push eachNumber to line 61: []
      comparedValue.push(eachNumber)
    }
  }
  // return changed default value
  return comparedValue;
}
// var count = 0;
// for(var i = 0; i < array.length; ++i){
//     if(array[i] == 2)
//         count++;
// }
/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the 
 * values are the number of times that roll appears in the `rolls` array.
 */
  function getRollCounts(rolls) {
  // set up a default value: empty object {}
  let newObject = {};
  // set up a FOR loop to go through the array elements
  for (let i = 0; i < rolls.length; i++) {
    // IF statement eachNumber (truthy)
    if (newObject[rolls[i]]) {
      newObject[rolls[i]] += 1;
    } else {
      newObject[rolls[i]] = 1;
    }
  }
  // return changed object
  return newObject;
}

// getRollCounts([2, 2, 3, 4, 3, 2]);

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
