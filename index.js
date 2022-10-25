/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  for (i = 0; i < rolls.length; i++){
    if(typeof rolls[i] !== "number"){ //used typeof it checks what data it is
      return false          //always remember typeof will give an output that quotation marks around it
      
    }
    
  } return true
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  if(rolls.includes(value)){
    return value
  
  } else
   return null //when using else, no brackets are needed 
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let array = [] //created an empty array 
  for(let i = 0; i < rolls.length; i++){ //for loop 
    if(rolls[i] >= lowest){ //if statememt of rolls[i](number greater or equal to the value of lowest)
    array.push(rolls[i]) // pushing the value into the new array
    }
  } 
  return array //returning values from greater than/equal to lowest 
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
   let counts = {} // creating an empty object
  for (let i = 0; i < rolls.length; i++){
    if (counts[rolls[i]] === undefined) {
      counts[rolls[i]] = 1 //create the key but also gave it a value
    } else {
      counts[rolls[i]] += 1 //if seen we added to/made equal 1 
    }
  }
  return counts
}

let example = [2, 4, 3, 2, 3, 1]
getRollCounts(example)
// let examp = {
//   1: 1,
//   2: 2,
//   3: 2,
//   4: 1
// }
// examp[2] //=> 2 
// examp[3] //=> 2 

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
