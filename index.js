/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
 function isValid(rolls) {
  
    //   let result,
    //       rollsLength = rolls.length;
    //   for(let i=0; i < rollsLength; i++){
    //     if(typeof rolls[i] === 'number'){
    //       result = true;
    //     }
    //     else {result = false;}
    //   }
    //   return (rolls.length === 0) ? true : result;
    // }
    let result
    if (rolls.length === 0 ) {
      result = true;
    }
    for (const roll of rolls) {
      
     
     if (typeof roll === 'number') {
        result = true;
    }
      else {
        result = false;  
      }
    }
    return result
    
    }
    const rolls = [2,4,5,2];
    console.log(isValid(rolls));
    
    /**
     * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
     * @param {number[]} rolls - An array of numbers representing rolls on a die.
     * @param {number} value - A specific value to find.
     * @returns {*} - The found value or `null`.
     */
    // function findValue(rolls, value) {
      //   return (rolls.includes(value)) ? value : null;
      // }
    // let value
    
    function findValue(rolls, value) {
      let result
      if (rolls.length === 0) {
        result = null
      }
      for (i = 0; i < rolls.length; i++) {  
        if (value === rolls[i]) {
          result = value
          break
       }
        else {
        result = null
       }
     }
     return result
    }
    
    // console.log(findValue(rolls, value))
      // if (rolls.includes(value)) {
      //     return value
      // }
      //   else {
      //     return null
      // }
     
    // }
    // onsole.log(findValue(rolls, value))
    /**
     * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
     * @param {number[]} rolls - An array of numbers representing rolls on a die.
     * @param {number} lowest - A number that represents the lowest allowed value in the new array.
     * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
     */
    
 
    function filterOutLowValues(rolls, lowest) {
     let newArr = []
    for (let i = 0; i <= rolls.length; i++) {
      if (rolls[i] >= lowest) {
        newArr.push(rolls[i]) 
      }
      if (newArr === 0) {
            newArr.push(rolls[i])      
      }
     }  
      return newArr
    } 
    // return newarr
    
    // console.log(filterOutLowValues(rolls, lowest))
    /**
     * Returns an object which has rolls as keys and counts as values.
     * @param {number[]} rolls - An array of numbers representing rolls on a die.
     * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
     */
    function getRollCounts(rolls) {
       let die = {}
      for (let roll of rolls) {
          if (die[roll]) {
                die[roll] += 1
          }
          else {
          die[roll] = 1
          }
        }
        return die
    }
                






// (i = 0; i <= rolls.length; i++) {
//         if ( die.rolls[i] === 0) {
//               return die
            
//             }
//         }
        
// }


    
    // console.log(getRollCounts(rolls))
    
    // Do not change the code below here.
    module.exports = {
      isValid,
      findValue,
      filterOutLowValues,
      getRollCounts,
    };
    