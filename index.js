/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */

const rolls = [1, 2, 3, 4, 5, 6];

function isValid(rolls) {
  let isNumber = true;
    for (let i=0; i< rolls.length;i++){
      let array = rolls[i];
      if (array === NaN){
        isNumber = false;
      } else if (array === []){
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
  let valueNumber = 0
    for (let i = 0; i < rolls.length; i++){
      
      let array = rolls[i];
      if (array === [] || array !== value){
        valueNumber = null;

      } else if (array === value){

        valueNumber = value;
      }

    }

    return valueNumber
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
function getRollCounts(rolls) {

      let newObject = {};
      for (let i = 0 ; i < rolls.length; i++){
        let keys = rolls[i];
        newObject += newObject.key; // trying to add key values = rolls[i] / keys variable into the object 

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
