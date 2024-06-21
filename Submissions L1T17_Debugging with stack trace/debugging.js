// 13 February 2023
// Mandisa Macleod

// L1T17 - Hypothesis-driven debugging with the stack trace


// rewrote printValuesOf as a function with two parameters
function printValuesOf(jsObject, keys) {

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    // k used to access an index of jsObject is not defined anywhere, yields Reference Error
    // solve: replace k with key
    console.log(jsObject[key]);
  }

  // Syntax Error: unexpected end of input
  // Google search pointed towards the error stemming from a missing bracket
  // Curly brace was missing to indicate end of forEach loop
}

// object should not be declared with let, but with const // 
const simpsonsCatchphrases = {
  lisa: "BAAAAAART!",
  bart: "Eat My Shorts!",
  marge: "Mmm~mmmmm",
  // syntax error brought about by using an apostrophe as an apostrophe and as single quotation marks
  // solve: use two different kinds of quotation marks to indicate string
  // be consistent across programme and apply to all quotation marks indicating a string
  homer: "d'oh!",
  maggie: "(Pacifier Suck)",
};

// there is a function call of printValuesOf, but it was not defined as a function
// console.log the function call to see the result
// function printValuesOf only has two parameters, 
// so the "key" argument (i.e. lisa, bart, homer) needs to be passed to it as an array of keys.
let result = printValuesOf(simpsonsCatchphrases,["lisa", "bart", "homer"]);
console.log(result);

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined



// REFERENCES

// Hyperiondev.(2021).   WD. L1T17 - Hypothesis-driven debugging with the stack trace.                          Retrieved on 13 February 2023 via Dropbox.
// MDN Docs.(2022).      Object.                                                                                Retrieved on 14 February 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Haddad, Amy.          Freecodecamp.(2020). JavaScript Object Keys Tutorial – How to Use a JS Key-Value Pair. Retrieved on 13 February 2023 at https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/
// StackOverflow.(2011). Should functions always return something (Javascript).                                 Retrieved on 14 February 2023 at https://stackoverflow.com/questions/3415247/should-functions-always-return-something-javascript#:~:text=All%20JavaScript%20functions%20return%20something,nothing%20else%20points%20to%20them.