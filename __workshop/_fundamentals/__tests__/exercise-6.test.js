// We import (require) the function that we want to test.
const isPalindrome = require("../exercise-6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(isPalindrome("radar")).toBe(true);
  expect(isPalindrome("rodeo")).toBe(false);
  expect(isPalindrome(6)).toBe(undefined);
  expect(isPalindrome()).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
