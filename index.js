/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */


function isValid(rolls) {
  let dice = true;
  for (const element of rolls){
     if (typeof element !== 'number'){
      dice = false
      break;
    } else if (typeof element === 'number'){
      dice = true
    }
  }
    return dice
  } 
    

    

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let result = null
  for (const element of rolls){
    if (rolls.includes(value)){
      return value;
  } 
  }
    return result;

}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArr = [];
  for (const element of rolls){
    if (element >= lowest){
      newArr.push(element);
    }
  }
  return newArr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let newObj = {};
  for (let i = 0; i < rolls.length; i++){
    let ran = Math.floor(Math.random() * rolls[i])
    newObj[rolls[i][ran]] = (newObj[rolls[i][ran]] || 0) + 1;
  }
  return newObj;
console.log(newObj);
}
getRollCounts(rolls);

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
