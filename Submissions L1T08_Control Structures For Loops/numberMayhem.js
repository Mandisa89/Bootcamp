// 19 January 2023
// Mandisa Macleod

// L1T08 - Beginner Control Structures - For Loops



// Compulsory Task 1

// 1.1
// -------  While loop counting down from 20 to 0  -------- //

console.log(`This is the while loop counting down from 20 to 0`);
let i = 20;

while (i >= 0) {
  console.log(i);
  i--;
}


 
// 1.2 
// -------- Any loop displaying all even numbers between 1 and 20 ------ //


// I tried a while loop but a for loop seemed nicer //

console.log(`
This is the for loop displaying all even numbers between 1 and 20`);

for (let k = 1; k < 20; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
}




// 1.3
// ------- Use any kind of loop to mimick leaning pyramid example ---- //

numberOfRows = 5;
let row = "";

console.log(`
Here's a leaning Christmas tree.`);

for (let l = 0; l < numberOfRows; l++) {
  row = row + "*";
  console.log(`${row}`);
}

// Tried it with an array first, but that produced commas inbetween the stars

// numberOfRows = 5;
// let array = [];

// for (let l = 0; l < numberOfRows; l++) {

//     array.push("*");
//     console.log(`${array}`);
// }





// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T08 - Beginner Control Structures - For Loops . (L1T08 reading material). 
// Retrieved 19 January 2023 via shared Dropbox. 
