/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {

  let found = true; // set starting default Variable with its default value

    for( let i = 0; i < rolls.length; i++ ){
      if( typeof rolls[i] !== 'number' ){
        found = false
      }
    }

  return found

    // return rolls.every( element => typeof element === 'number' );

} // ends isValid()

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {

  let find = null;
  
  for( let i = 0; i < rolls.length; i++ ){
    if( rolls[i] === value )
     find = value;
  }

  return find
  // return ( !rolls.length || !rolls.includes(value) ) ? null : value;
} // ends findValue()

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {

  let lowestArrayVal = []
  
  for( let i = 0; i < rolls.length; i++ ){
    if( rolls[i] >= lowest )
      lowestArrayVal.push( rolls[i] )
  }
  return lowestArrayVal

  // return rolls.filter( element => element >= lowest );
} // ends filterOutLowValues() 

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {

  let rollObject = {}

  for ( let element of rolls ){

    rollObject[element] ? rollObject[element] += 1 : rollObject[element] = 1;

  } // ends my forOfLoop

   return rollObject;

  // ! USE THE LOGIC ABOVE AND BELOW TO KEEP TRACK OF DUPLICATEs && || DELETE DUPLICATES. 
  // * Meaning if its not inside and array or inside an object. Throw it in there
  // ! The logic should work when the object or array is empty. And only keep unique values


//   let rollObject001 = {}   // 1 - 6
// // { 2: 2, 

//   for( let i = 0; i < rolls.length; i++ ){  // rolls[2] => element => 5 // [ 2, 3, 5, 5, 2 ]

//     if (  !rollObject001[ rolls[i] ] ){ // if you found it .. inside the empty object
//       rollObject[ rolls[i] ] = 1  // if u have found it/.. increment the value held in there by one.
//     }else{
//       rollObject[ rolls[i] ] += 1  // if u havent found. create the key that has the name of the element `rolls[i]` == 2 / initiliaze the value of that key to 1
//     }

//   }

//   // console.log(rollObject)
//   return rollObject

} // ends getRollCounts()

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
