/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  for (const roll of rolls) {
    if (typeof roll === 'number') {
      return typeof roll === 'number'
    } else if (rolls.length === 0) {
      return rolls.length === 0
    } else {
      return false; //will return false if either above are false
    }
  }
  return true; // will return true if empty array is given and there is nothing to execute in for loop
}



/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
 for (const roll of rolls) {
  if (rolls.includes(value) == true) {
    return value;
  } else {
    return null; // if "roll[i]" in rolls array contains value, will return true; if not, returns null.
  }
 }
 return null; //returns null if array is empty and for loop can't be executed
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArr = [];
  for (const roll of rolls) {//roll= roll[i]
    if (roll >= lowest) {
      newArr.push(roll)
    } 
  }
  return newArr; //returns new array with values equal to or greater than lowest, or empty if the for loop couldn't be executed
}




/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled 
 * and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let object = {}; // will return empty if no rolls are given
  for (let i = 0; i < rolls.length; i++) {
    let count = rolls[i]; // count is assigned to the number of times an element appears in array.
    if (!object[count]) { //if number is not found again in rolls
      object[count] = 1; // default count for each element in rolls is 1 b/c it is still in the array once.
    } else { 
      object[count]++; //will add +1 to count for duplicates in rolls
    }
  } return object;
}
//rolls= [1, 2, 3, 4, 5 ,6]
//count = [1: 1, 2: 1, 3: 2...]
//object: {rolls[i]: times rolled (count)}
//console.log shows: { '2': 3, '3': 2, '4': 1 }

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
