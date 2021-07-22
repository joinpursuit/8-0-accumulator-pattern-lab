/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // 1. Default Value and Output 
  let isNumber = false;
  let total = 0;
  // 2. Define the loop
  for (let i = 0; i < rolls.length; i++) {
    // 3. Accumulate
    let number = rolls[i]
    if (rolls.length === 0) {
      isNumber = true
    } else if (typeof number !== 'number') {
      isNumber = false;
    } else if (typeof number === 'number') {
      total += true 
    } 
  } if (total === rolls.length) {
    isNumber = true;
  }

  return isNumber
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // 1. Default Value and Output
  let isValue = null;
  // 2. Define the loop 
  for (let i = 0; i < rolls.length; i++) {
    // 3. Accumulate
    let number = rolls[i]
    if (rolls.length === 0) {
      isValue = null; 
     } else if (number === value) {
       isValue = value
     } 
  }
  return isValue
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // 1. Default Value & Output 
  let newArray = []; 
  // 2. Define the loop 
  for (let i = 0; i < rolls.length; i++) {
    let number = rolls[i];
    // 3. Accumulate
    if (rolls.length === 0) {
      newArray = []
    } else if (number > lowest || number === lowest) {
      newArray.push(number)
    }
  }

  return newArray;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
 // 1. Default Value and Output 
  let numObject = {}
  if (rolls === undefined) {
    numObject
  } else 
  // 2. Define the loop
  for (let i = 0; i < rolls.length; i++) {
    // 3. Accumulate!
    let objKey = rolls[i]
    
    if (numObject[objKey]) {
      numObject[objKey] += 1
    } else { 
      numObject[objKey] = 1
    }
  }

  return numObject
  
}



// let count = {};//new obj
// for(i = 0; i < rolls.length; i++){ //loop de loop//
// let num = rolls[i]; //index var//
// if(count[num] === undefined) { //use [] to make a key in an obj | number already exists in obj
// count[num] = 1; // 1 is the first dice roll, creates key and value at the same time//
// } else {
// count[num] += 1; //incrementing the number of dice rolls by 1//
// }
// }
// return count; //returns object//
// }
  


// Simplest Method - once it encounters another instance of the number, it’ll add it. Otherwise, it has just seen it once.
// let obj = {}
// for(let roll of rolls) {
//   obj[roll] = (obj[roll] + 1) || 1;
// }
// return obj
// }


getRollCounts();

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
