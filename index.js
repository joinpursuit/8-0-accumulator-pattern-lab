/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
 function isValid(rolls) {
    // create an accumulator
  let isANumber = true;

    for (let roll of rolls) {
    if (typeof roll === "number") { // guard clause
      return isANumber; // returns boolean
    } else {
      isANumber = false;
    }
  }
  // outside of for loop
  return isANumber;
 }

 /**
  * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
  * @param {number[]} rolls - An array of numbers representing rolls on a die.
  * @param {number} value - A specific value to find.
  * @returns {*} - The found value or `null`.
  */
 function findValue(rolls, value) {
   let foundValue = null;

   for (let roll of rolls) {
     if (roll === value) {
       foundValue = value
     }
   }
   return foundValue;
 }
 
 /**
  * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
  * @param {number[]} rolls - An array of numbers representing rolls on a die.
  * @param {number} lowest - A number that represents the lowest allowed value in the new array.
  * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
  */
 function filterOutLowValues(rolls, lowest) {
   // make an accumulator
   let newArr = []; 
   for (let roll of rolls) {
      console.log(roll);
     if (roll >= lowest) {
       console.log(roll >= lowest);
       newArr.push(roll);
     }
   }
   return newArr;
 }
 
 /**
  * Returns an object which has rolls as keys and counts as values.
  * @param {number[]} rolls - An array of numbers representing rolls on a die.
  * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
  */
 function getRollCounts(rolls) {
  // create accumulator
  let obj = {};
  // let countHowManyOfEachInArr = [];   // add numbers to empty array as a counter for the returned object's "value"

  // add the value to the object
  // for (let roll of rolls) {
    // obj[roll] = obj[roll];
    for (let roll of rolls) {
      obj[roll] = ((++obj[roll]) || 1);  // maybe expand into an if..else statement
    }
    // if (rolls === []) {
    //   return obj; // if no rolls are given, return empty object
    // }
  // }
  return obj; // returns {numbersRolled: NumOfTimesRollIsInRollsArr}
}

console.log(getRollCounts([2, 2, 3, 4, 3, 2]));
 
 // Do not change the code below here.
 module.exports = {
   isValid,
   findValue,
   filterOutLowValues,
   getRollCounts,
 };
