/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  if (rolls.length === 0) {
    return true
  }
  for (let i = 0; i < rolls.length; i++) {
    if (typeof (rolls[i]) !== 'number') {
      return false
    }
  }
  return true
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] === value) {
      return value
    }
  }
    return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let lowestArr = []
  for(let i = 0; i < rolls.length; i++){
    if(rolls[i] >= lowest){
      lowestArr.push(rolls[i])
    }
  }
  return lowestArr
 }

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  rollsObj = {
    "1":0,
    "2":0,
    "3":0,
    "4":0,
    "5":0,
    "6":0,
  };
  for(let i = 0; i <rolls.length; i++){
    switch(rolls[i]){
      case 1:rollsObj["1"]++;
      break;
      case 2:rollsObj["2"]++;
      break;
      case 3:rollsObj["3"]++;
      break;
      case 4:rollsObj["4"]++;
      break;
      case 5:rollsObj["5"]++;
      break;
      case 6:rollsObj["6"]++;
      break;
    }
  }
  for(const key in rollsObj){
    if(rollsObj[key]=== 0){
      delete rollsObj[key]
    }
  }
return rollsObj
 }


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
