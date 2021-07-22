// Tashawnee & Ki Sub 07/21/2021

/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
 function isValid(rolls) {

  let isNum = []
  isNum = true
  for (const i of rolls) {
    if (typeof i !== "number") {
      isNum = false
    }
    // else if (isNum === rolls)  {
    //   isNum = true
    // }     
  } 
  return isNum


}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
    let isValue = null; // define a default value, returning 'null' unless the value is present in the array
    for (const roll of rolls) { // loop
      if (rolls.includes(value)) { // accumulating to check if value is present in the array 'rolls'
        isValue = value // reassign the var isValue's value to value 
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
 
  let newArr = [] 
  for (const roll of rolls) {
    if (roll >=lowest)  {
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
function getRollCounts(rolls) {

    let newObject = {}; // declare a variable and assign it an empty {}, defining a default value
    for (i=0; i < rolls.length; i++) { // loop - to CHECK what is in the array
      // for (const roll of rolls)
      // if (roll in newObject)
      if (newObject[rolls[i]]) { // if the key is inside of the object,
        newObject[rolls[i]] += 1  // increament the key value by 1
      }  
        else {   // What can we write here? pesudocode-wise
        newObject[rolls[i]] = 1  // if it is not an empty array, its key value must start from 1
        console.log(newObject) 
      }
    }    
    return newObject //
  }
  
// getRollCounts()



// console.log(getRollCounts())
// getRollCounts()
// console.log(getRollCounts(1,2,3))

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};