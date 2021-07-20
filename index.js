/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

function isValid(rolls) {
  if (rolls.length < 1) {
        return true;}
  for (i=0; i < rolls.length; i++){
      if (typeof rolls[i] == 'number'){
        return true;
  }     else {
        return false;
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
  if (rolls.includes(value)){
    return value;
  } else if (!rolls.includes(value)){
    return null;}
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let numArr = [];
  let result = 0;
  for (i=0; i < rolls.length; i++){
  if (rolls[i] >= lowest){
    result += numArr.push(rolls[i])
  } 
}
return numArr;
}
/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let numObj = {};
  for (const count of rolls){
    numObj[count] = numObj[count] ? numObj[count] + 1 : 1;
  }
  return numObj
}

// if (rolls.length < 1) {
//   return numObj;}
// for (i=0; i < rolls.length; i++){
//   if (!numObj.includes(rolls[i])){
//     result += numObj.push(rolls[i])
//   }
//   else if (rolls[i] == Number)
//   total++; 
// } 
// return numObj;

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
