
/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

//  isValid()
//  ✕ should return true if an empty array is given (4 ms)
//  ✕ should return true if all values in the array are numbers (1 ms)
//  ✕ should return false if any number in the array is not a number


function isValid(rolls) {
  let isNumber = true;
for (let i = 0; i < rolls.length; i++) {
  const eachNumber = rolls[i];
if (typeof eachNumber === "number") {
  isNumber = true;
} else {
  isNumber = false;
  }
}
return isNumber;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */

// findValue()
//  ✕ should return `null` if the array is empty
//  ✕ should return the value if it is found in the array (1 ms)
//  ✕ should return `null` if the value is not found in the array (1 ms)




function findValue(rolls, value) {
  let isValue = null;
for (let i = 0; i < rolls.length; i++) {
  const eachNumber = rolls[i];
  if (eachNumber === value) {
isValue = value;
  }
}
return isValue;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */

// filterOutLowValues()
//  ✕ should return an empty array if an empty array is inputted (1 ms)
//  ✕ should filter for values greater than the lowest value
//  ✕ should filter for values equal to the lowest value as well
//  ✕ should include all values if needed
//  ✕ should exclude all values if needed


function filterOutLowValues(rolls, lowest) {

  let comparedValue = [];
for (const eachNumber of rolls) {
     if (eachNumber >= lowest) {
    comparedValue.push(eachNumber)
    }
  }
return comparedValue;
}


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */


// getRollCounts()
//  ✕ should return an empty object if no rolls are given
//  ✕ should return an object that provides a count for the number of times a value appears in the array
//  ✕ should increment the count for duplicates


function getRollCounts(rolls) {
  // set up a default value: empty object {}
  let newObject = {};
  // set up a FOR OF loop to go through the array elements

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
    getRollCounts([2, 2, 3, 4, 3, 2]);

// Do not change the code below here.

module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
