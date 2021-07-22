/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // Step 1 create your inputs and outputs
  let numberValid = true;
  // Step 2 create your for loop
  for(let roll of rolls){
  // Step 3 Accumulate!
  if(typeof roll !== "number"){
    return false; 
    } 
  }
  return numberValid;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // Step 1 create your inputs and outputs
  // why no inputs needed?
  // Step 2 create your for loop
  for(let roll of rolls){
  // Step 3 Accumulate!
  if(roll === value){
    return value;  
    }
  }
  return null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // Step 1 create your inputs and outputs
    let arr = [];
  // Step 2 create your for loop
  for(let roll of rolls){
  // Step 3 Accumulate!
    if(roll >= lowest){
      arr.push(roll);  
      } 
    }
    return arr;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  // Step 1 create your inputs and outputs
  let obj = {};
    // Step 2 create your for loop
    for(let roll of rolls){
    // Step 3 Accumulate!
    let keyContainer = obj[roll]
    if(!keyContainer){
      obj[roll] = 1
    } else {
      obj[roll] += 1
    }
  }
  return obj;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
