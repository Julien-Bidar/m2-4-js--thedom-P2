// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: "45" },
      ],
      "amount"
    )
  ).toBe(100);
  expect(
    count(
      [
        { name: "Bob" },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(45);
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 100 },
      ],
      "amount"
    )
  ).toBe(200);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
