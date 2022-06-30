/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let value1 = true
  let value2
  for(num of rolls){
      if(typeof num === "string")
        value1 = false
  } 
      if (rolls.length === 0) 
         value2 = true
      if (value1 || value2 === true   ){
         //console.log(true)
         return true
      } else {
         //console.log(false)
         return false
  }
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  for(num of rolls){
    if (num === value)
    return value
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
  let newArray = []
  for(num of rolls){
     if(num >=  lowest) {
       newArray.push(num)
       //console.log("The lowest number = " + lowest)
     }
       //console.log("The next number in the rolls array = " + num)
  }
       //console.log("new array = " + newArray)
       return newArray
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
//The accumulator pattern - steps:
// Determine your output data type and default value.  = object, default = empty
// Define your loop.
// Accumulate!

let accumulator = {}

//guard clause  - throw an error for what can go wrong
// if(typeof roll !== "number "){
//    return "roll must be a number"
// }


// iterate over the array
for(let i = 0; i < rolls.length; i++){

    //create a variable to hold each die value as the loop iterates
      const roll = rolls[i]

      //if the number does not exist in our accumulator, we will add it
      if(!accumulator[roll]){
       
     
        accumulator[roll] = 1
      } else {
        //   //if the number exists, increase accumulator by 1
        accumulator[roll] +=1
      }

}

return accumulator
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
