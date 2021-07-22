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
  return nums;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let finale = null;
  // if(rolls.length === 0){
  //   return null
  // }
  for(let i = 0; i < rolls.length;i++){
      let rollsInArr = rolls[i];
      if ( rollsInArr === value ){
        finale = value;
      }//else {
      // //   finale = null;
      // // }
 }
  return finale;
}


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
let newArr =[];

  for(let i =0 ; i < rolls.length;i++){
      let newRoll = rolls[i];
      if(newRoll >= lowest){
        newArr.push(newRoll)
      }
      
  }
  return newArr;
}
// console.log(newArr)
// returns newArr;
/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

// let dice = [1,2,3,3];
function getRollCounts(rolls) {
  let obj = {};

  for(let i =0; i < rolls.length;i++){
    let el = rolls[i];
  if(!obj[el]){
    obj[el] = 1;
  }else {
    obj[el] += 1;
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
