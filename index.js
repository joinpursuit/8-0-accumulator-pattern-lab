/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let allValueAreNumber = true;
  for (let i = 0; i < rolls.length; i++) {
    if (typeof rolls[i] !== "number") {
      allValueAreNumber = false; //broken not working
    }
    if (rolls.length === 0) {
      allValueAreNumber = true;
    }
  }
  return allValueAreNumber; //if all are number return true;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let returnVal = null;

  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] === value) {
      returnVal = value;
      break;
    }
  }

  return returnVal;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArr = [];

  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest) {
      newArr.push(rolls[i]);
    }
  }
  return newArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 * rolls = [2, 3, 4]; =>  2: 1, 3: 1, 4: 1 };
 * rolls = [2, 2, 3, 4, 3, 2]; => { 2: 3, 3: 2, 4: 1 };
 * obj["key3"] = "value3";
 */
//  let adb = {key5 : value5, key1 : value1, key3 : value3};
//  console.log(adb);
function getRollCounts(rolls) {
  let newObj = {};
  for (let i = 0; i < rolls.length; i++) {
    //going through the rolls array
    if (newObj[rolls[i]]){
      newObj[rolls[i]]++;
    } else {
      newObj[rolls[i]] = 1;
    }
    
    // newObj[rolls[i]] = 0;//obj - {2:"" }
    // //console.log(newObj[i]);
    // if (rolls[i] === newObj[i]) {//obj[key] === current number being checked
    //   newObj[rolls[i]] = newObj[rolls[i]] + 1;
    // }
    //console.log(newObj[rolls[i]]);
  }
  return newObj;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
