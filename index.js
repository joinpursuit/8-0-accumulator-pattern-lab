/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  //declare a flag var assign it true
  let allNumber = true
  // make a for loopie
  for (roll of rolls)
  //if current val are #'s then return true and if !# reassign false  
  if ( typeof roll !== 'number' ){
    return false 
  }
  //post iteration return the var
  return allNumber
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  //declare a flag var assign it null
  let foundValue = null
  //declare our loopie
  for ( roll of rolls )
    // if the value is found ...
    if ( roll === value ){
      // return the value
      return value
    }
  //outside our loop return the var from line 26
  return foundValue
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  //decalre out var it'll  be assigned a empty array
  let newRolls = [];
  //loopie thru our rolls array
  for ( roll of rolls ){
    //if the values are equal to or greater than the lowest
    if( roll >= lowest ){ 
      //then push these values into our empty array
      newRolls.push(roll);
    }
  }
  //outside the loop return our var 
  return newRolls;      
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  //default: decalre a var assign it an empty {}
  let objRolls = {};
  //loopie thruie our arry of rolls
  for ( roll of rolls ){
    //if key is inside of the object
    if (objRolls[roll]){
      //then increment the keys value by 1
      objRolls[roll]++;
    } 
    //else  
    else {
      // create a key in our object and assign it 1 (represents the first occurence)
      objRolls[roll] = 1;
    }
  }  
  //outside of the loop return the var   
  return objRolls; 
}
//[2, 2, 3, 4, 3, 2]
/*
object[roll]
{
  2:it would be 3 2's that we've encountered so far,
  3: 2,
  4: 1
}






*/
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
