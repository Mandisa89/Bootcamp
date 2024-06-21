// Mandisa Macleod
// 30 May 2023

// L1T31 Promises - Compulsory Task 1

// fetch("https://www.affirmations.dev/").then()

// Make it so your console outputs a random line for words of affirmation.

// create empty array in which to store the data fetched by the API call
let affirmationsArr = "";

// Fetch the API from the following website (https://www.affirmations.dev/)
fetch("https://www.affirmations.dev/")
  // text can be sent over the web, not objects [Hyperiondev, 2021]
  // convert the fetched text to an object by using .json [Hyperiondev, 2021]
  .then((receivedText) => receivedText.json())
  // the next .then method takes the resultant object
  .then((textObject) => {
    // the chained .then assigns it to the previously empty globally declared array affirmationsArr
    affirmationsArr = textObject.affirmation;
    console.log(affirmationsArr);
  }),
  // error-handling
  (error) => {
    //console.log the error message received during the API call
    console.log(error);
  };

// REFERENCES //

// "Reference Error: Fetch is not defined in node.js"  ---> I had node.js v16
// Needed to update to version 18,"which provides a fetch() compatible API in the Node.js runtime.", USING VOLTA (also already installed)
// Hadzhiev, Borislav. Date Unknown. ReferenceError: fetch is not defined in NodeJs. Retrieved on 30 May 2023 at https://bobbyhadz.com/blog/javascript-referenceerror-fetch-is-not-defined
// Niedringhaus, Paige. 2021. Introducing Volta - it manages your Node.js versions so you don't have to. Retrieved on 30 May 2023 at https://www.newline.co/@paigen11/introducing-volta-it-manages-your-nodejs-versions-so-you-dont-have-to--eef49522

// Hyperiondev. 2021. L1T31 Course Material. Retrieved on 30 May 2023 via shared Dropbox
// MDN Docs. 2023. Fetch API. Retrieved on 30 May 2023 at https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// Color Code [YOUTUBE]. 2022. Javascript Promises - Tutorial for Beginners. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=TnhCX0KkPqs&ab_channel=ColorCode
// Color Code [YOUTUBE]. 2022. Async JavaScript & Callback Functions -- Tutorial for Beginners. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=QSqc6MMS6Fk&t=12s&ab_channel=ColorCode
