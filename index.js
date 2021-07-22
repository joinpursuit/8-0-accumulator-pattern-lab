/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  
  if(rolls.length === 0) { //.length to check to see if array is empty
    return true; //put code outside in case there is an empty array. note to self: js reads from top to bottom//
  } 
  for (let i = 0; i < rolls.length; i++) {
    let roll = rolls[i]; //rolls = number index

    if(isNaN(roll)){ //isNan checks to see if a value is not a number
    return false;
    } if(typeof(roll) === 'number')  { // used typeof to check if roll = number
      return true;
  } 
  //call your function to use debugger!!!!!!!!!!//
  }
  } 


/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {

  //if array includes value//
  if(rolls.includes(value)) {
    return value;
  } else{
    return null;
  }
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let greaterValues = [] //created new array

  //create a loop so that it checks if ALL numbers are >= the lowest value//
for(i = 0; i < rolls.length; i++) {

  let num = rolls.slice[i] //use slice because we are returning an array with particular values//
  if (num >= lowest) {
  greaterValues.push(num) //used push to add the number to the new array
  

}
}
return greaterValues; //==> new array with greater values.//
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let count = {};//new obj

for(i = 0; i < rolls.length; i++){ //loop de loop//
let num = rolls[i]; //index var//

if(count[num] === undefined) { //use [] to make a key in an obj | number already exists in obj
count[num] = 1; // 1 is the first dice roll, creates key and value at the same time//
} else {
count[num] += 1; //incrementing the number of dice rolls by 1//
}
}
return count; //returns object//
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
