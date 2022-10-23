/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

let flag = true
if(rolls.length ===0) {
  return true
}
  for (let i = 0; i < rolls.length; i++) {
    if(typeof rolls[i] === 'number') {
      return flag
    } 
    flag = false
    return flag
  }
  
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  
 if(rolls.length ===0) {
  return null
 } if(rolls.includes(value)) {
  return value
}   else {
  return null
}
    }
    


/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let greater = []
  if(rolls.length === 0) {
    return []
  }
  for (let i = 0; i <rolls.length; i++) {
    if(rolls[i] >= lowest) {
    greater.push(rolls[i])
    console.log(greater)
    
    }
    
  }
  return greater
}

//const result = words.filter(word => word.length > 6);

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let obj = {}, count = 0
  if(rolls.length === 0) {
    return obj
  }
  return rolls.reduce((a,b) => (a[b] = ++a[b] || 1, a), {})
  

}
  



// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
