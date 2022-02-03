/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let notNum = false;
  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] !== "number") {
      return notNum;
    }
  }
  return true;
}
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let foundVal = null;
  for (let i = 0; i < rolls.length; i++) {
    if (rolls.includes(value)) {
      foundVal = value;
      return foundVal;
    }
  }
  return foundVal;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let greaterArr = [];
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest) {
      greaterArr.push(rolls[i]);
    }
  }
  return greaterArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 *
 */
function getRollCounts(rolls) {
  let object = {};
  for (let i = 0; i < rolls.length; i++) {
    let count = rolls[i];
    if (object[count]) {
      object[count]++;
    } else {
      object[count] = 1;
    }
  }
  return object;
}

// function getRollCounts(rolls) {
//   let rollObj = {};
//   for(let i = 0; i < rolls.length; i++){
//     let key = rolls[i];
//     if(rollObj[key]){
//       rollObj[key]++
//     } else{
//       rollObj[key] = 1;

//     }
//   }
//   return rollObj;
// }

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
