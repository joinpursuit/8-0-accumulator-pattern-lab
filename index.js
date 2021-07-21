/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  let validRoll = true

  for (let roll of rolls){

    if (typeof roll !== 'number') {
    validRoll = false}

    } return validRoll
  };
 // I got the idea for here from when colin kept saying its our format and we had to figure out the number. I remember us using not equal in another lab so tested it here. 
  
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
let validRoll = null
for (let roll of rolls){
   if (roll === value){
     validRoll = value 
   } else {
     
   }
}
 return validRoll
}
// I basically followed the same formula from our first attempt and this one and mixed it. I left the else blank because I wasn't sure what it wanted and figured that was why I was missing a check. 
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
let validRoll = [];
for (roll of rolls){
  if (roll >= lowest) {
  validRoll.push(roll)
  }
  }
  return validRoll
};
//This one is basically the same as one of the questions we had in previous labs so I just followed that formula
/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
 
function getRollCounts(rolls) {
/**let validRolls = {};
  rolls.forEach(keys=>{
  validRolls[keys] = ++validRolls[keys] || 1;
});
  return validRolls;
 };

 Memo: Colin said remove if I can't explain to partner why this works. His explaination for why it worked in slack goes as follows:
 It's similar to the default value you set at the start of the accumulator. The starting point for any count for a specific roll should be 1 (once it's encountered).


This comes from the fact that (as many of you are discovering), an object's keys are undefined until you give them a value, so adding 1 to that will give you NaN.


But solving that problem using if conditionals is MUCH preferable to using shortcut evaluation at this point.


(The || 1.)
*/
// I used ++ cause it wanted an incriment. It works in repl without it but not for test. I pretty much used the thisArg example of for each on MDN for this one. I can't seem to explain why it doesn't work without the pipes was there another way to do this?
let newObject = {};
  for (let roll of rolls) {
    if (roll in newObject) {
      newObject[roll] += 1;
    }
    else {
      newObject[roll] = 1;
    }
  }
  return newObject;
};
 
// Do not change the code below here.

module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};