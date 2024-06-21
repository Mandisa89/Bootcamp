// 18 January 2023
// Mandisa Macleod

// L1T07 - Beginner Control Structures - While Loop

// COMPULSORY TASK 2 - CALCULATE THE AVERAGE OF ENTERED NUMBERS


// Initialize variables
// Create array to store all entered numbers in
let sum = 0;
let allNums = []; 

// Create a while loop to prompt user for input until trigger ("-1") exits loop
while (true) {

    let trigger = false; // once trigger is true, while loop will end
    
    let userNum = prompt(`Enter a number: `);
    
    
    

    switch (userNum) {

        case "-1":
            console.log(`trigger exit`);
            trigger = true; // trigger has now been set to true
            break;

        default:
            
            console.log(`${userNum}`);
            sum = sum + Number(userNum);  // convert userNum to a number to be able to execute addition.
                                          // update "sum" through each loop.
            allNums.push(userNum);        // add entered numbers to the array allNums
                                          // Reference for .push() [Stackoverflow, 2016]

            console.log(`intermediate sum = ${sum}`); // intermediate check
            
    }

    if (trigger) {
        break; // this triggers end of loop
    }
}

let amountOfNums = allNums.length;
let averageOfNums = sum / amountOfNums; // reference: [Microsoft, 2019]

console.log(`This is the array ${allNums}`);
console.log(`This array is ${amountOfNums} numbers long`);


alert(`The average of all entered numbers is ${averageOfNums}.`);






// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T07 - Beginner Control Structures - While Loop . (L1T07 reading material). 
// Retrieved 17 January 2023 via shared Dropbox. 


// Additional Material :

// W3C Schools.(2023). JavaScript String toLowerCase(). Retrieved 18 January 2023 at https://www.w3schools.com/jsref/jsref_tolowercase.asp
// W3C Schools.(2023). JavaScript String length. Retrieved 18 January 2023 at https://www.w3schools.com/jsref/jsref_length_string.asp
// Stackoverflow.(2016). How to save prompt input into array. Retrieved 18 January 2023 at https://stackoverflow.com/questions/28252888/how-to-save-prompt-input-into-array
// Microsoft.(2019). Calculate the average of a group of numbers. Retrieved 18 January 2023 at https://support.microsoft.com/en-us/office/calculate-the-average-of-a-group-of-numbers-e158ef61-421c-4839-8290-34d7b1e68283#:~:text=Average%20This%20is%20the%20arithmetic,by%206%2C%20which%20is%205.




