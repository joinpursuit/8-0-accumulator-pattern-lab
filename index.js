/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let count = 0
  
  //if (rolls.length === 0) return true 
  // this is to check if rolls is [] but no need because for loop executes and nothing it will automatically return empty []

  for(let i = 0; i < rolls.length; i++){
    if (typeof rolls[i] === "number"){
      count++
    }
  }
  return (count < rolls.length  ?  false : true)
  }

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // method 1

  return (rolls.includes(value) ? value : null)

  // method 2

  // if (rolls.length === 0) // this is to check if rolls is [] but no need because for loop executes and nothing it will automatically return empty []
  //     return null
  // else if (rolls.includes(value))
  //     return value
  // else
  //     return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newarr = []
  
  if (rolls.length === 0) { return newarr }

  for(let i = 0; i < rolls.length; i++){
    if (rolls[i] >= lowest){
      newarr.push(rolls[i])
    }
  }
  return newarr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) { 

  // method 1
  // *********

  let newobj = {}   // if for loop doesnt execute it will automatically return empty object if rolls = []

  for(let i = 0; i < rolls.length; i++){
    if(newobj[rolls[i]]){       // if there is rolls[i] inside object then add count by 1
       newobj[rolls[i]] += 1
    }
    else                        // else creat a key rolls[i] in the object and initiate value by 1
      newobj[rolls[i]] = 1
  }
  return newobj

  //  method 2
  //  ********

  // let newobj = {}

  // for(let element of rolls){
  //   newobj[element] ? newobj[element] += 1 : newobj[element] = 1
  // }
  // return newobj

  //  method 3
  //  *********

  // let newobj = {}
  // if (rolls.length === 0) { return newobj }

  // for(let i = 0; i < rolls.length; i++){
  //   if(!newobj[rolls[i]]){
  //       count = 0
  //   }
  //  count++
  //   newobj[`${rolls[i]}`] = count
  //   }
  // return newobj
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
