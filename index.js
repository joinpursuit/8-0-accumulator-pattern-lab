/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let result;
  if(rolls.length === 0){
    result = true
  }for(const roll of rolls){
    if(typeof roll === 'number'){
      result = true;
    }else {result = false}
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
    if (rolls.includes(value) === true) {
      return value
    }else{return null}
  }


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let highest = []
  if(rolls.length === 0){
    return rolls 
  }for(const roll of rolls){
    if(roll >= lowest){
      highest.push(roll)
    }
  }
  return highest
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let object = {};
  if(rolls.length === 0){
    return object
  }let map = rolls.reduce(function(obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});
  
  return map;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
