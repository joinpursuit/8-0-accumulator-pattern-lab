/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
let areValuesNumbers = false

let newArray = []

for (let roll of rolls){
  if (typeof(roll) === "number"){
newArray.push(roll)
  } }

if (newArray.length === rolls.length){
   areValuesNumbers = true
} 

if (rolls.length === 0){
  areValuesNumbers = true
}

  
  return  areValuesNumbers
}




/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {

  let valueInArray = null
  for (let roll of rolls){
    if (roll === value){
      valueInArray = value
    } 
    if (rolls.length === 0){
      valueInArray = null
    }
  }return valueInArray
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
let newArray = []
for (let roll of rolls){
  if (roll>= lowest)
  newArray.push(roll)
}return newArray

}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
let newObject = {}

for (i=0;i<rolls.length;i++){
let amountinArray = rolls.filter(x => x==rolls[i]).length
if(amountinArray>=1)
newObject[rolls[i]] = amountinArray
}
return newObject
}






//  for (i=0;i<rolls.length;i++){     
//   let newarr = []
//   if(rolls.indexOf(rolls[i])>1){

//     newarr.push(roll)
// var amountinArray = newarr.length
//   }
//   for (let roll of rolls){


//     newObject[roll] = Number(newarr.length)
// }

// return newObject

// }}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
