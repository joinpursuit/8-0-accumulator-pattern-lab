/**
 * 
 * Each time `rolls` is mentioned, it refers to an array of numbers
```js const rolls = [2, 4, 5, 2];
```
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if ojojo all ojojoj values in the array are numbers. Otherwise, return `false`.
 */
// function isValid(rolls) {
//   let acumulator = Boolean;
//   for (let roll of rolls) {
//     if ( (Number (roll)) || (rolls.length===0)) { 
//       return true;
//     } else {
//       return false;
//     }
//   }  
// }


// function isValid(rolls) {
//   let acumulator = false;

//   for (let roll of rolls) {
//     if ( (Number (roll)) ) { 
//       acumulator = true;
//   }  
// }
// return acumulator;
// }


function isValid(rolls) {

  let accumulator = 0;

  for (let roll of rolls) {
    accumulator += roll;
  }
  if (Number (accumulator)||(rolls.length===0)) {
    return true;
  }
  return false;
}
/**
 * !(rolls.length)
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let accumulator = null;

  for (let roll of rolls) {
    if (roll === value) {
      accumulator = value;
    }
  }
  return accumulator;
}

/**
 * 
 * function hasSix(rolls) {
  
}
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
accumulator = [];
for (let roll of rolls) {
  if (roll >= lowest) {
    accumulator.push(roll)
  }
}
return accumulator;
}



/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */


 function getRollCounts(rolls) {
let acumulator = {}
   for (let i = 0; i < rolls.length; i++) {
      let roll = rolls[i];
           if (!acumulator[roll]) { //:::if when the "for cycle" starts that "roll" had no value, then assign it one.
            acumulator[roll] = 1;
         } else { // when the "for cycle" and if it already had a value, then add one more.
            acumulator[roll] += 1
         }
       }
return acumulator
 }


 // function getRollCounts(rolls) {
//   let myNew = [];
//   for (let roll of rolls) {
//       myNew.push(roll)
//   }

//   for (let i = 0; i < rolls.length; i++) {
//     const roll = rolls[i];
//     let fArray = [];
//     for (let n = 0; n < myNew.length; i++) {
//       const myNew1 = myNew[n];
//       if (roll === myNew1 ) {
//         fArray.push(myNew1);
//       }
//     }
//     myCounter = fArray.length;
//   }

//   let accumulator = {};

//   for (let roll of rolls) {
//     accumulator[roll] = myCounter;
//   }

//   return accumulator;
// }



  
  
  // let accumulator = {};

  // for (let roll of rolls) {
  //   accumulator[roll] = times;
  // }





  // return accumulator;


// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
