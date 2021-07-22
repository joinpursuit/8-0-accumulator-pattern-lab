/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // function hasSix(rolls) {
  //   let accumulator = false;
  
  //   for (let roll of rolls) {
  //     if (roll === 6) {
  //       accumulator = true;
  //     }
  //   }
  
  //   return accumulator;
  // }
  
  // const rolls = [4, 5, 6, 1];
  // console.log(hasSix(rolls)); //> true
  let hasValue = true
  for (let roll of rolls) {// will go through the array
    if( typeof roll === "number" ){// will determine 
      return hasValue
    } else if (typeof roll === []){
      return hasValue
    }
    else { return hasValue = false}
  }
    return hasValue
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // find a value in the array
  // if the value is true return the value
  // else return null
  
  for(let roll of rolls){
    if(roll === value){
      return value
    }  //   if(typeof roll === "number" && rolls.includes("number")){//has value && is in the array
  //     return value //value
  //   } else {return null}
  // }
  }
  return null
}


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArr = [];

  for(let roll of rolls){
    if(roll >= lowest){
      newArr.push(roll)
    }
  }
  return newArr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

//  let accumulator = {};

//   for (let roll of rolls) {
//     accumulator[roll] = true;
//   }

//   return accumulator;
// }

// const rolls = [4, 5, 6, 1, 5, 4, 4, 1];
// console.log(getUniqueRolls(rolls));
function getRollCounts(rolls) {
  let obj = {};
  for (let roll of rolls) {
    if (roll in obj) {
      obj[roll] += 1;
      } else {
      obj[roll] = 1;
  }
}
  console.log(obj)
  return obj;
  
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
