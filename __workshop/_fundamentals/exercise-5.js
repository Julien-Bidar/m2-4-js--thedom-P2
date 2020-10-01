// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  let count = 0
  if(nums.length === 0){
    return undefined;
  };
  const newAr = nums.filter((num) => {
    if(typeof(num) === "number"){
      return num;
    }
  });

  const squared = newAr.map((item) => {
    return item * item;
  })
  squared.forEach((squareNum) => {
    count += squareNum;
  });
  return count;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
