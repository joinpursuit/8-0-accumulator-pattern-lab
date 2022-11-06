/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
 // create 2 empty arrays for number and non-number values
  let allNums = []
  let containsNonNum = []
 // loop through rolls array
  for(i=0; i < rolls.length; i++){ 
 // checks each index type to match number using typeof   
    if(typeof(rolls[i]) === "number"){
  //adds numbers to new Arr
      allNums.push(rolls[i])
  // checks for non-number types 
    } else if(typeof(rolls[i])!== "number"){
  // move to seperate Arr
      containsNonNum.push(rolls[i])  
    } 
// compares allnums length to roll length 
  } if (allNums.length === rolls.length){
//equal length means all elements pushed were numbers
    return true
  } else 
    return false
  

 }

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
// loop through rolls array
  for(i=0; i < rolls.length; i++){
// compares value at a given index to the value passed  
    if(rolls[i] === value){
// returns that value if condition is true      
      return value
    }  
  } 
// if value not found returns null
  return null
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
//create new empty Arr
  let newArr = []
// loop through rolls array
  for( i=0; i < rolls.length; i++){
//compares value passed to number at given index
    if(lowest <= rolls[i]){
//pushes values that match the condition to new Array
      newArr.push(rolls[i])
      } 
//returns new Array
    } return newArr
  
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  let rollCounter = []
  let newObj = {}
  for(i=0; i<rolls.length; i++){
    if (newObj[rolls[i]]){
      newObj[rolls[i]] += 1
      } else {
      newObj[rolls[i]] = 1
      }
     } 
 

    for(let j in newObj){
    if(newObj[j] >= 2){
      console.log(j + ": " + newObj[j])
    }
  } return (newObj)
  

}


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
