/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  const result = []
  for (let i = 0; i <= rolls.length - 1; i++) {
    rolls.push(i);
    return true;


  }
  return false;


}
//^---1 out of 3 checks,must return 2 different true statement but only passing false statement 
//BUT when i leave the parameter in, no test pass

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  const result = []
  for (let i = 0; i <= rolls.length - 1; i++) {
    rolls.push(i)

    return value;
  }
  return null;
}
//^---return value.find(rolls => rolls.value === true) || null
//2 ot 3 checks, missing return null if the values is not found in the array
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  const result = []
  for (let i = 0; i <= rolls.length - 1; i++) {
    rolls.push(i)
    return lowest;
  }
  return result;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  const rollsObj = {}
  return rollsObj; {

  }



}
//^-----return Object.keys(rollsObj).length

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
