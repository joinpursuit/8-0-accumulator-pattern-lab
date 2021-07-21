/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let isNum = [];
  for(roll of rolls) {
    if(typeof roll === "number") {
      isNum.push(true);
    } else{
      isNum.push(false);
    }
  }
  if(isNum.includes(false)) {
    return false;
  } else if (isNum.length === 0) {
    return true;
  } else {
    return true;
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let val = null;
  if(rolls.includes(value)) {
    val = value;
  }
  return val;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let numArr = [];
  for (let roll of rolls) {
    if(roll >= lowest) {
      numArr.push(roll);
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

  // This is my version 2 of solution
  let obj = {};
  for(roll of rolls) {
    if(obj[roll]) obj[roll] += 1;
    else obj[roll] = 1;
  }
  return obj;
  
  /*
  // This is my version 1 solution
  let obj = {};
  for(let roll of rolls) {
    let curKey = obj[roll];
    let rollVal = curKey ? curKey : 0;
    obj[roll] = rollVal + 1;
  }
  return obj;
  */
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
