/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
// function isValid(rolls) {
//   let result = false
//   if (rolls.length === 0 ){
//     result = true;
//   } 
//   for (const roll of rolls){
//     console.log(roll.length);
//      if (typeof roll !== 'number'){
//     result =false;
//     }
//    else {
// result = true;  
//   }
// return result;
// }
// }


// function isValid(rolls) {
//   let result = false;
//   if(rolls.length === 0){
//     result = true;
//   }
//   rolls.forEach(function(element){
//     if(typeof element === 'number'){
//       result = true;
//     }
//     else {result = false;}
//   })
//   return result;
// }

function isValid(rolls) {
  let result,
  rollsLength = rolls.length;
for(let i=0; i < rollsLength; i++){
if(typeof rolls[i] === 'number'){
  result = true;
}
else {result = false;}
}
return (rolls.length === 0) ? true : result;
}
   
  
const rolls = [2,4,5,2];
console.log(isValid(rolls));
//roll is the element//
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  return (rolls.includes(value)) ? value : null;
}
//no need for a for a loopy here!//
/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest){
 arrRolls = []
 for (let i = 0;i < rolls.length;i++){
  if(rolls[i] >= lowest) {
 arrRolls.push(rolls[i])
   }
 }
 return arrRolls;
 }
 //
//empty array is availble in order to push new and/or any values//
//inital/conditon/increase or decrease .. for the loop to continue or not//
//
/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls){
    let rollsObj = {
    }
    for(let roll of rolls) {
      rollsObj[roll] = rolls.filter(x => x == roll).length;
    }
    return rollsObj;
  }
// .filter() makes a new array with all elements that pass the test implemented by the provided function
// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
