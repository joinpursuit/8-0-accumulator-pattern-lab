/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) { 
  if (rolls.length === 0){ //
  return true // returns true if an empty array is given -- better yet if array index = 0/nothing
  } 
  //let example = [1, 3, 2, 4, 2, 3, 2, 3, 2, 4]
  for (let i = 0; i < rolls.length; i++){ // Create your loop
    if (typeof rolls[i] != "number"){ //The typeof operator returns a string indicating the type of the operand's value.
      return false // checks if any [i]/value in the array is not a number.
    }
  }
  return true // return true if all values are numbers
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let found = null // in this case this is the first value declaration --> 29
  for (let i = 0; i < rolls.length; i++){ // checking if value given is equal to the found value 
    if (rolls[i] === value){ //if found then we must change it from original initialization to what value is given as a parameter
      found = value //accumulator/pattern is HERE (when declaring something to have a default return value)
    }
  }return found // if array is empty since we already initialized found variable to null -- the for loop wont run and will come here. which will meet criteria.
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = []
  for (let i = 0; i < rolls.length; i++){
    if (rolls[i] >= lowest){
      newArray.push(rolls[i])
    }
} return newArray // !YOU BETTER RETURN WHAT YOU WANT OUTSIDE THAT FOR LOOP CEPHUS!
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) { // 
  let craps = {} // is my default -- if no rolls give me back an empty object
  for (let i = 0; i < rolls.length; i++){ //Spread method could be used -- but remember the logic from findDuplicates*
    if (!craps[rolls[i]]){ //create a key with your object!! if you dont find the key after iteration starts ---> enter your if statement now
    craps[rolls[i]] = 1 //create a key = to element at i -- and now initialize value to 1 -- this is now an element inside an array
    } else { //if found ---
      craps[rolls[i]] += 1 //!ACCUMULATE!
    } 
} return craps
}
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
