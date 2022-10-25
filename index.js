/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  //default result value:
  let result = true;
  for (let num of rolls) {
    //only updates if the data type of "num" is not a number type
    if (typeof num !== "number") {
      result = false;
    }
  }
  return result;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let result = null;
  for (let num of rolls) {
    if (value === num) {
      //result = value;
      result = num;
    } 
  }
  return result;
}
// // without the loop:
// function findValue(rolls, value) {
//   let result = null;
//   if (rolls.includes(value)) {
//     result = value;
//   }
//   return result;
// }
// // shorter version:
// function findValue(rolls, value) {
//   if (rolls.includes(value)) {
//     return value;
//   } else {
//     return null;
// }

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let result = [];
  for (let num of rolls) {
    if (num >= lowest) {
      result.push(num);
    }
  }
  return result;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
// Explanation of the code below the function...
function getRollCounts(rolls) {
  let result = {};
  let count = 0;
  rolls.sort();
    for (let i = 0; i < rolls.length; i = i + count){
    count = 1;
      for (let j = i + 1; j < rolls.length; j++) {
        if (rolls[i] === rolls[j]) {
        count++;
        }
      }
      result[rolls[i]] = count;
    }
  return result;
}
/*
Explanation of the code:
> "rolls.sort();"
- sort the array in the order of numbers.

in the first for loop:
> "count = 1":
- because all numbers starts counting from 1,
- and when it finishes going through the second for loop, it resets to 1.
> Increment Expression as "i += count":
- starts from the index number that didn't pass throught the if statement,
meaning from the number that doesn't repeat.

in the second for loop:
> "j=i+1":
- because it's checking the index ahead of the index "i".
> if statement:
- if current idenx value is equal to the one ahead, add one to the count.
> after if statement:
- set key as "rolls[i]"" and the value as "count".
*/


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
