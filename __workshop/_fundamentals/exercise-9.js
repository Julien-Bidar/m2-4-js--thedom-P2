// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  let arr = paragraph.split("");
  let counter = 0
  for(i=0; i<arr.length; i++){
    if(i !== 0 && i % 40 === 0 && arr[i+counter] !== " "){
      arr.splice(i+counter, 0, "\n");
      counter ++;
    } else if (i !== 0 && i % 40 === 0 && arr[i+counter] === " "){
      arr.splice(i+counter, 1, "\n");
    }
}
let formatedString = arr.join("")
return formatedString;
}


wrapAfter40Chars(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
)
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
