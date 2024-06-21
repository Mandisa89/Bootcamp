// OFFICIAL SUBMISSION (please disregard waterTariffOld.js and waterTariffOriginal.js)


// 13 January 2023
// Mandisa Macleod

// L1T04
// Beginner Control Structures — if, else, and else-if Statements

// Compulsory Task 2


/* Instructions

The table above states that the first 6 000 litres will cost R15.73 per kilolitre. 
Next, water consumption above 6 000 litres but less than or equal to 10 500 litres will be charged at R22.38 per kilolitre. 
Therefore, a household that has used 8000 litres will pay R139.14 (15.73 x 6 + 22.38 x 2). 
The table carries on in this manner.

Task:

Create a calculator to determine your water bill.
The calculator should ask the user to input the number of litres
of water they have used, and it should output the total amount in Rands (R) that they need to pay.

NOTE FROM INSTRUCTOR: consider if household is indigent (Step 1 and Step 2 level usage won't be charged.)

*/


/* I've created Step variables that can be changed for future billing changes.*/


// Create variables for tariffs at different steps. 
// Tariffs might change in future, but not within the flow of this programm, so will use const.

const tariffIndigent = 0; // indigent households tariff for waterStepOne and waterStepTwo
const tariffStepOne = 15.73; // stepOneLowerLimit <= usageKilolitres <= StepOneUpperLimit
const tariffStepTwo = 22.38; // stepOneUpperLimit < usageKilolitres <= stepTwoUpperLimit
const tariffStepThree = 31.77; // stepTwoUpperLimit < usageKilolitres <= stepThreeUpperLimit
const tariffStepFour = 69.76; // usageKilolitres > stepThreeUpperLimit


// Parameters of the four Water Steps

const stepOneLowerLimit = 0; // minimum usage amount from which one gets billed
const stepOneUpperLimit = 6; // usage <= 6 kilolitres billed under Step 1
const stepTwoUpperLimit = 10.5; // usage > 6 kilolitres and <= 10.5 kilolitres billed under Step 2
const stepThreeUpperLimit = 35; // usage > 10.5 kilolitres and <= 35 kilolitres billed under Step 3


// Calculate range of kilolitres within each Water Step

const rangeStepOne = stepOneUpperLimit; // range of 6 kilolitres billed under Step 1
const rangeStepTwo = stepTwoUpperLimit-stepOneUpperLimit; // 10.5 - 6 = range of 4.5 kilolitres billed under Step 2
const rangeStepThree = stepThreeUpperLimit-stepTwoUpperLimit; // 35 - 10.5 = range of 24.5 kilolitres billed under Step 3


// Request input for usage and create variable for usage
// Make it so the input can only be a positive integer! Number.IsInteger()  <--------------


// Check whether household is indigent. 

let indigentHousehold = prompt(`
Are you currently REGISTERED as an indigent household with your local municipality and qualify to receive subsidies for your water and electricity from the government?

\t\t\t Please type  Y  for yes
\t\t\t Please type  N  for no

(To apply, visit your local municipality with the relevant documentation.)`);



 // check input
console.log(`Input was: ${indigentHousehold}.`);


if (indigentHousehold === "N" || indigentHousehold === "n" || indigentHousehold === "No" || indigentHousehold === "no") {  
    indigentHousehold = false;
    console.log("It is NOT an indigent household");
}
else if (indigentHousehold === "Y" || indigentHousehold === "y" || indigentHousehold === "Yes" || indigentHousehold === "yes") { 
    indigentHousehold = true;
    console.log("It IS an indigent household");
}
else {
    prompt("You did not enter a valid answer. Please refresh the page and try again.");
}


 // check value of indigentHousehold (true or false)

console.log(`indigentHousehold is: ${indigentHousehold}.`);



// Ask user for input of litres used

let usageKilolitres = prompt(`
Let's calculate your water bill. 
How many litres of water did you use this month?`);


// User input is always stored as type string.
// Make sure input is a number by seeing if it can be converted to a type number through Number().
// If a number was input, it will yield an integer.
// If a string was input, it will yield NaN.
// (FreeCodeCamp, 2022) was the most helpful source I found explaining how to convert a string containing numbesr into a number.



usageKilolitres = Number(usageKilolitres); 

// If / else statement on its own only prompted user once after incorrect input
// My brother reminded me of a while loop
// I looked up the structure of it on Stackoverflow (2012)

/* Test: while input is not an integer, re-prompt for input 
I remembered the ! to negate from some dabbling in C some years ago, cannot remember where though. */

while (!Number.isInteger(usageKilolitres)) { 

    console.log(`${usageKilolitres} is not a number.`);   // console.log output for checks

    usageKilolitres = prompt(`
    Please enter a number.
    Let's calculate your water bill.
    How many litres of water did you use this month?`); // prompt user for correct input

    usageKilolitres = Number(usageKilolitres); // convert input type to number to run test again
}

// Once user's input is valid, execute rest of programm

// convert litres to kilolitres to work with the pricing table. 
// check the intermittent result

usageKilolitres = usageKilolitres/1000; 
console.log(usageKilolitres); 



// Declare parameters for variables to be used as conditions 

const waterStepOne = stepOneLowerLimit <= usageKilolitres && usageKilolitres <= stepOneUpperLimit;
const waterStepTwo = stepOneUpperLimit < usageKilolitres && usageKilolitres <= stepThreeUpperLimit;
const waterStepThree = stepTwoUpperLimit < usageKilolitres && usageKilolitres <= stepThreeUpperLimit;
const waterStepFour = usageKilolitres > 35;

// declare variables to be used

let stepOneAmount;
let stepTwoAmount;
let stepThreeAmount;
let stepFourAmount;

let stepOneAmountValue;
let stepTwoAmountValue;
let stepThreeAmountValue;
let stepFourAmountValue;

let billAmount;


// Waterbill calculator


if (waterStepOne) {

    if (indigentHousehold) {

        stepOneAmount = usageKilolitres;
        stepOneAmountValue = stepOneAmount*tariffIndigent;
        billAmount = stepOneAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.`); 
    }
    else {
        let stepOneAmount = usageKilolitres;
        let stepOneAmountValue = stepOneAmount*tariffStepOne;
        let billAmount = stepOneAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.\nLook at you! Good job, ya conservationist!`); 
        }
} else if (waterStepTwo) {

    if (indigentHousehold) {
        stepOneAmountValue = rangeStepOne*tariffIndigent;
        stepTwoAmount = usageKilolitres-rangeStepOne;
        stepTwoAmountValue = stepOneAmountValue+(stepTwoAmount*tariffIndigent);
        billAmount = stepTwoAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.`); 
    }
    else {
        stepOneAmountValue = rangeStepOne*tariffStepOne; // 6 * 15.73 = R94.38, for the first 6 kilolitres are billed by tariffStepOne
        stepTwoAmount = usageKilolitres-rangeStepOne; // under this condition, it will leave only the amount of litres billable under Step 2
        stepTwoAmountValue = stepTwoAmount*tariffStepTwo; //  multiply amount by tariffStepTwo
        billAmount = stepOneAmountValue+stepTwoAmountValue; // add amounts of Step One and Step Two together for the billAmount
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.\nThat's alright.`) // output billAmount
    }
    
} else if (waterStepThree) {

    if (indigentHousehold) {
        stepOneAmountValue = rangeStepOne*tariffIndigent;
        stepTwoAmount = rangeStepTwo*tariffIndigent;
        stepThreeAmount = usageKilolitres-rangeStepOne-rangeStepTwo;
        stepThreeAmountValue = stepOneAmountValue+stepTwoAmountValue+(stepThreeAmount*tariffStepThree);
        billAmount = stepThreeAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.`); 
    }
    else {

        stepOneAmountValue = rangeStepOne*tariffStepOne;
        stepTwoAmountValue = rangeStepTwo*tariffStepTwo; 
        stepThreeAmountValue = stepThreeAmount*tariffStepTwo;
        billAmount = stepOneAmountValue+stepTwoAmountValue+stepThreeAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.\nMight want to look into ways of reducing that.`);

    }
    
} else if (waterStepFour) {

    if (indigentHousehold) {

        stepOneAmountValue = rangeStepOne*tariffIndigent;
        stepTwoAmountValue = rangeStepTwo*tariffIndigent;
        stepThreeAmountValue = rangeStepThree*tariffStepThree;
        stepFourAmount = usageKilolitres-rangeStepOne-rangeStepTwo-rangeStepThree;
        stepFourAmountValue = stepOneAmountValue+stepTwoAmountValue+stepThreeAmountValue+(stepFourAmount*tariffStepFour);
        billAmount = stepFourAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.`);

    }
    else {
     
        stepOneAmountValue = rangeStepOne*tariffStepOne; // R94.38
        stepTwoAmountValue = rangeStepTwo*tariffStepTwo; // 4.5 is the max amount of kilolitres billed within Step 2 (range of 6 < usageKilolitres <= 10.5) 
        stepThreeAmountValue = rangeStepThree*tariffStepThree;
        stepFourAmount = usageKilolitres-rangeStepOne-rangeStepTwo-rangeStepThree; 
        stepFourAmountValue = stepOneAmountValue+stepTwoAmountValue+stepThreeAmountValue+(stepFourAmount*tariffStepFour);
        billAmount = stepFourAmountValue;
        alert(`Your bill amounts to R${billAmount.toFixed(2)}.\nTime to evaluate your needs and reduce your water usage!`);
    }
    
}


/* I'm sure I could have reduced the amount of code inside each condition, 
but I don't quite see how to get rid of the repetition */


/* 
Base Source Material: 
Hyperiondev.(2021). Beginner Control Structures — if, else, and else-if Statements. (L1T04 reading material). 
Retrieved 13 January 2023 via shared Dropbox. 

Additional Sources:

MDN Developer Docs.(2022). Number.isInteger(). Retrieved 13 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
FreeCodeCamp.(2022). How to Convert a String to a Number in JavaScript. Retrieved 14 January 2023 at https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=(quantity))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,will%20go%20before%20the%20operand.&text=We%20can%20also%20use%20the,into%20a%20floating%20point%20number.
Borislav Hadziev.(Date Unknown). Round a Number to 2 Decimal Places in JavaScript. Retrieved 14 January 2023 at 
Stackoverflow.(2012). Nested if/else in while loop. Retrieved 14 January 2023 at https://stackoverflow.com/questions/13381154/nested-if-else-in-while-loop
Stats SA.(2018). Four facts about indigent households. Retrieved 16 January 2023 at https://www.statssa.gov.za/?p=11722
*/ 
