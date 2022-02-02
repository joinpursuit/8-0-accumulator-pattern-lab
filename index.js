/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {



   for(let roll of rolls){
   if( typeof roll === 'number' ){
    return true
    }else{
    return false
    } 
  }

  let placeHold = []
 if(placeHold.length === 0){
  return true
  }

}
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {

 
 for(let idx= 0; idx <rolls.length; idx++){
    if(rolls.includes(value)){
      return value
    }else if(rolls.includes(value) === false){
      return null
    }
  }
 
  if(rolls.length === 0){
    return null
  }
  
  
}



/**rolls.include(value)
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {

  let higher = []
  
  for(let roll of rolls){
    if(roll >= lowest){
       higher.push(roll)
    }
  }
  return higher 
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  
  let outPut = {}

  for(let roll of rolls){
    outPut[roll] = 0;
  } 
  for (let roll of rolls){
    outPut[roll] += 1;
  }
  return outPut
}
//INPUT will be an empty object 
//OUTPUT will be an object with values representing counts,keys represnting the numbers on each die
//key terms array,rolls,keys,object

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
