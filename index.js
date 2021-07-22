/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  // input: rolls is an array of numbers 
  // output: return true if all the elements in rolls array are numbers or it 
  //         return false if you have one data type that is not a number in the array of numbers

  // delete 1. variables: rollsIsAnArrOfNum = true
  // delete let rollsIsAnArrOfNum = true

  // problem: How can you check datatype?
  // solution: 1. loop 2. typeof, play with the code in mdn and see if your idea works and build it through a fake arr of numbers,
  // loop through rolls array
  for (let i = 0; i < rolls.length; i++) {
    const roll = rolls[i]
    
    // if the type of element in an array is not strictly equal to number
    if (typeof roll !== 'number')  { // condition is equivalent to isNaN(roll) -> returns a boolean if true, execute code
      //return false if all elements in the rolls array are not numbers
      return false
    }
  }


  // 2. otherwise return true if all the elements in rolls array are numbers
  return true
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  // input: rolls is an array of numbers and value is a number representing the number you roll on a dice
  // output: return the value if the number in the array is equal to the value 
  //         return null if the number in the rolls array does not equal value

  
  // problem: How can you check if the elemnt in the array is strictly equal to the value
  // solution: 1. loop 2. === strictly equal to  

  // delete x variables: declare a variable, does the number in the rolls array equal value, assign it the default value is null
  // delete x let doesNumInArrEqualValue = null;

  // loop through the rolls array
  for (let i = 0; i < rolls.length; i++) {
    const roll = rolls[i];
    
    // if the number in the rolls array is strictly equal to the value
    if (roll === value)  {
        // return value
        return value;
      } 
    }

  // otherwise return null if the number in the rolls array is not strictly equal to value 
  return null;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  // input: rolls is an array of numbers and 
  //        lowest is a number that represents the lowest allowed value in the new array
  // output: returns a new array with values equal to or greater than the 'lowest' number from the rolls array 

  
  // problem: how can you check if the element is greater than or equal to the 'lowest' number
  // solution: 1. loop 2. >= arthimetic operator 3. push it into the empty array

  // variables: an empty array that you can push numbers that are greater than or equal to the lowest number
  let cacheArr = []
  
  // loop through rolls array
  for (let i = 0; i < rolls.length; i++) {
    const roll = rolls[i]
    
    // if the number in the rolls array  is greater than or equal to the 'lowest' number
    if (roll >= lowest)  {
      //push the number in the rolls array into the cache array
      cacheArr.push(roll)
    }
  }

  // return cache array with elements that are greater than or equal to 'lowest' number
  return cacheArr
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {
  // input: rolls is an array of numbers representing rolls on a dice -> [6, 5, 2, 2]
  //        counts are the number of times that the number on the dice appeared - in the 'rolls' array 
  //                                                                         key :  value
  // output: returns an object which has rolls as key and counts as values: {rolls: counts} -> {'6': 1, '5': 1, '2': 2} 

  // problem: how do i keep track of the count of numbers?
  // solution: loop, 
  // variables: declare a variable cache object {} 
  let cacheObj = {};
  // delete x declare a variable named counts to keep track of the count
  // delete x let counts;

  // loop through rolls array
  for (let i = 0; i < rolls.length; i++) {

    // if the number does not appear in the cache object
    if (!cacheObj[rolls[i]]) {
      // create a key value pair in the cache object where the value is assigned 1 and the key is the current element in the rolls array
      cacheObj[rolls[i]] = 1;
        // create a key value pair -> object name, dot notation, key is assigned the value counts
   
      // otherwise 
    } else {
      // make the value of the key go up by one 
      cacheObj[rolls[i]]++;
    }
  }

  // return the cache object
  return cacheObj;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
