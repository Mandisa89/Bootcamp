// Mandisa Macleod
// L1T31

// Completing provided code for Compulsory Task 1

// TASK:
// When the start button is clicked, your program should output a number,
// starting from 1, to the console every 1000ms, incrementing the output by 1 every time

// ---------------------------------- //
// SOLUTION:

// setting variables to hold the intervalID
let intervalID;
// and also a counter
let counter = 0;

// function to start outputting the counter to the console.

let startCounter = function () {
  // invervalID is assigned setInterval(), which repeatedly calls an an arrow function after a specified delay
  intervalID = setInterval(() => {
    // log counter to the console
    console.log(counter);
    // counter increases by 1 after every iteration
    counter++;
  }, 1000); // after a delay of 1000ms
};

// function to stop outputting the counter
function stopCounter() {
  // pass intervalID to clearInterval() as an argument
  clearInterval(intervalID);
}

// link these Javascript variables with the corresponding HTML element to be clicked
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// event listener for the startButton with "click" as event, and startCounter as callback function
startButton.addEventListener("click", startCounter);

// event listener for the stopButton with "click" as event, and stopCounter as callback function
stopButton.addEventListener("click", stopCounter);

// REFERENCES //

// Hyperiondev. 2021. L1T31 Callback Functions Course Material. Retrieved on 30 May via shared dropbox
// MDN Docs. 2023. clearInterval() global function. Retrieved on 30 May 2023 at https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
// MDN Docs. 2023. setInterval() global function. Retrieved on 30 May 2023 at https://developer.mozilla.org/en-US/docs/Web/API/setInterval
