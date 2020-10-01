// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of values with all of the strings replaced with the word "redacted" (each value is replaced by the word 'redacted').
// Do not redact values that are not strings.
//
// e.g. redacted(["bacon", false, 42]) returns [ 'redacted', false, 42 ]
//

const redacted = (arr) => {
  let newAr = arr.map(element =>{
    if(typeof(element) === "string"){
      return element.replace(element , "redacted");
    } else {
      return element;
    }
  })
  return newAr;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = redacted;
