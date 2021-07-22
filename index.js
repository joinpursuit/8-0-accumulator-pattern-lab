/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

 
 const rolls = [2, 3, 4, 4, 6];

//  function isValid(rolls) {
//   // let result;
//   for(let roll of rolls) {
//     // console.log(roll);
//     if(rolls === 3, 2, 3, 6) {
//       return true;
//     }; 
//     if (rolls === []) {
//       return true;
//     };
//   } 
// }
// console.log(isValid(rolls));

function isValid(rolls) {

  let numberValid = true;
 
  for(let roll of rolls){
    if(typeof roll !== "number"){
      numberValid = false; 
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
  let newFoundValue = null;

    if(rolls.includes(value)){
      newFoundValue = value;
    }
    return newFoundValue;
}


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let arr = [];

  let minimum = lowest;

  for(let roll of rolls) {
    if(roll >= minimum) {
      arr.push(roll)
    }
  }
  return arr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {};

  for (let roll of rolls) {
    if (roll in obj) {
      obj[roll] += 1;
    } else {
      obj[roll] = 1;
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
