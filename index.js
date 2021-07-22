/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let nums = false;
  //let emptyArr;
  if( rolls.length === 0){
    nums = true;
  }
  for(let i=0;i<rolls.length;i++){
      let rollsArr = rolls[i];
       if(typeof rollsArr === "number"){
        nums = true
      } else if(typeof rollsArr !== "number" ) {
        nums = false;
      }
  }
  return nums
}


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  //step 1
  
  //step 2
//   //for(let i=0; i<rolls.length;i++){
//     let rollsArr = rolls[i]
//     if(rollsArr !== value || rollsArr===0){
//       return null
//     } else  {rollArr === value
//       return value
//     }

//   }
// }

let valueFound = false;
  if (rolls.length === 0){
  return null;
}
 for(let i = 0; i < rolls.length;i++){
      let rollsInArr = rolls[i];
      if(rollsInArr === value){
        return value;
      // }else if ( rollsInArr === 0){
      //   return null;
      }
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // should return an empty array if an empty array is inputted (1 ms)
  //   ✕ should filter for values greater than the lowest value (1 ms)
  //   ✕ should filter for values equal to the lowest value as well
  //   ✕ should include all values if needed
  //   ✕ should exclude all values if needed (1 ms)
  if(rolls.length === 0){
    return []
  }
  for(let i=0;i<rolls.length; i++){
    let rollArr = rolls[i]
    //if(rollArr >=)

  }

  
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  if(rolls.length === 0){
    return {}
    
  }
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
