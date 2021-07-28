/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

 const rolls = [2, 2, 3, 4, 3, 2];;

function isValid(rolls) {
  let isNumber = true;

    for (let i=0; i< rolls.length;i++){
      let roll = rolls[i];

      if (isNaN(roll)){
        isNumber = false;
      } else if (typeof (roll) === "number") {
        isNumber = true;
      }

    }
    return isNumber;
}

isValid(rolls)
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */


function findValue(rolls, value) {
    let answer = null;

    for (let i = 0; i < rolls.length; i++){
       if (rolls.includes(value)){
        answer = value;
      } 

    } 
    return answer;

  }

findValue(rolls,4)

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {

  let newArray = [];
  for (let i = 0; i < rolls.length; i++){
    let roll = rolls[i];

    if (roll === []){

      newArray = [];

    } else if (roll >= lowest) {

        newArray.push(roll);
      }
      
  }

  return newArray;
}
filterOutLowValues(rolls, 2)


/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */

 //const rolls = [2, 2, 3, 4, 3, 2];
function getRollCounts(array) {
      let newObject = {};

      for (let i = 0 ; i < array.length; i++){
        if (!newObject[array[i]]){
          newObject[array[i]] = 1;
        } else {
          newObject[array[i]] += 1;
        }
           
      } 
      return newObject;
}

getRollCounts(rolls)

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
