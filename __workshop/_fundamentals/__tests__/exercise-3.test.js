// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  expect(
    insert([{ price: 5 }, { price: 5.8 }], { isAvailable: true })
  ).toStrictEqual([
    { price: 5, isAvailable: true },
    { price: 5.8, isAvailable: true },
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
