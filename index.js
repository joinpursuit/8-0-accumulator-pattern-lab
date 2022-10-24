/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
    
  let accumulator = true;

  for (let roll of rolls) {
    if (isNaN(roll)) {
     accumulator = false;
    
    } 
  }
  return accumulator;
    
}

// Another method for array every()
  //return rolls.every(num=> typeof num === "number");

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  
  for (let roll of rolls){
    if (value === roll)
      return roll; 
  }
      return null;
}
 // another Method sum()
  // return (rolls.some(roll => roll === value)) === true ? value : null;
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let arr = [];

  for (let roll of rolls) {
    if (roll >= lowest) {
      arr.push(roll);
    }
  }


  return arr;
}
//Another method using filter
  //return rolls.filter(roll => roll >= lowest);


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {};

    for(let roll of rolls){
      obj[roll] ? obj[roll]++ : obj[roll] = 1;
      // if (obj[roll]) {
      //   obj[roll]++ 
      // } else {
      //   obj[roll] = 1;
      // }
    }

    return obj;
}

getRollCounts([2, 2, 3, 4, 3, 2])


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
