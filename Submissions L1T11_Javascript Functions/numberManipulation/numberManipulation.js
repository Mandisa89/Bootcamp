// 25 January 2023
// Mandisa Macleod

// L1T11 - Using Built-In Functions and Defining your own Functions

// Compulsory Task 1

// ● Write a program that starts by asking the user to input 10 numbers (these can be a combination of whole numbers and decimals). Store these numbers in a list.
// ● Find the total of all the numbers and log the result to the console.
// ● Find the index of the maximum and log the result to the console.
// ● Find the index of the minimum and log the result to the console.
// ● Calculate the average of the numbers and round off to 2 decimal places. Log the result to the console.
// ● Find the median number and log the result to the console.


// --- Get user input of 10 numbers --- //

// declare variable to store the amount of input required in
// initialize to 10
let amountOfNumbers = 10;

// declare array to be filled by user
let numberList = [];

// declare numberInput outside of the loop
let numberInput;

// create an exit trigger with which to leave do-while loop
let exit = false;

// use for-loop to fill array with 10 numbers
for (let i = 0; i < amountOfNumbers; i++) {

    // check if input was successfully converted to a number or isNan
    // stay in this do while loop until type of input is valid
    do  {
        
        numberInput = prompt(`Give me a number:`);

        // if the numberInput turns into not-a-number when coverted into a number, execute this if statement
        if (isNaN(Number(numberInput))) {

            alert(`${numberInput} is not a valid input. Please give me a number.`);
            exit = false; // stay in the do-while loop, do not proceed into for-loop
        }
        // otherwise, exit the do-while loop and proceed into the for-loop
        else {
            exit = true;
        }

    } while (exit == false); // while exit == false, stay in do-while loop, do not proceed to for-loop
    
    // officially convert input to number before adding it to array
    numberInput = Number(numberInput);

    // keep track of numbers
    console.log(`number[${i}] is ${numberInput}`);

    // push the number to the array numberList
    numberList.push(numberInput);

}

// check the numberList
console.log(`numberList: ${numberList}`);


// --- Create a function to add up all the numbers contained in the array --- //

// perhaps should have rounded result to two decimal places here too?

function addition(array) {
    let sum = 0;
    for (let i = 0; i < amountOfNumbers; i++) {
        sum = sum + array[i];
    }
    return sum;   
}

// pass argument of numberList into the parameter of the function addition
let totalSum = addition(numberList);

// write descriptor for the sum
let description = "The total sum is: ";

// output the result to user via console
console.log(description + totalSum);


// --- Output the index of the smallest number inside the array --- //

let smallestNumber = Math.min(...numberList); // Reference: (MDN Docs, 2022)

let indexSmallestNum = numberList.indexOf(smallestNumber);

console.log(`Smallest number ${smallestNumber} in your list is positioned at index[${indexSmallestNum}].`);


// --- Output the index of the largest number inside the array --- //

let biggestNumber = Math.max(...numberList);
let indexBiggestNum = numberList.indexOf(biggestNumber);

console.log(`Biggest number ${biggestNumber} in your list is positioned at index[${indexBiggestNum}].`);


// --- Find average of all numbers and round result to two decimal places --- //

function average(numberSum, amount) {

    let result = (numberSum / amount).toFixed(2); // round off to two decimal places with .toFixed(2)
    return result;
}


// pass "totalSum" and "amountOfNumbers" as arguments to the parameters of the function "average"
let numberListAv = average(totalSum, amountOfNumbers);
console.log(`Average of your numbers: ${numberListAv}`);


// --- Output median of the array --- //

// NOTES:
// the median is the middle value of a sorted array
// if the array's length is an odd number, the median is the middle number
// if the array's length is an even number, the median is the average of the two middle numbers

// sorry, this section has a lot of comments because I struggled to wrap my head around a number of things


// Create function to sort numbers properly (don't compare strings of numbers, compare numbers)
// if sort() is used without parameters, the numbers in the array will be strings and sorted by evaluating characters against the UTF-16 chart.
// so 1, 100, 54, 6 instead of 1, 6, 54, 100

// most helpful reference: sort Array Method | Javascript Tutorial (Pop, 2021)
function compareFunction(a, b) {

    return a - b;
    // if the difference of value "a" minus value "b" is greater than 0, a is larger than b and a will be sorted behind b
    // if the difference of a minus b is less than 0, a is smaller than b and a will be sorted in front of b
    // if the difference of a minus be is == 0, then the two are the same and order will not be changed
}

// sort the array with sorting parameters of compareFunction
// note that sort() alters the original array. It does not make a copy
// I made a copy of the original array using Array.from() method, which I stumbled upon on StackOverflow and looked up on MDN Docs
let sortedNumberList = Array.from(numberList).sort(compareFunction);
console.log(`unsorted array: ${numberList}`); // check
console.log(`sorted array: ${sortedNumberList}`); // check


// create function to calculate the median

function median (array) {


    // check if array even has any elements
    if (array.length === 0) {

        // throw error if empty
        console.log(`The array ${array} is empty.`);

    }

    // sort the array without changing the original
    let sortedArray = Array.from(array).sort((a, b) => a - b); // another way of giving parameters as to how to sort
                                                            // it was mentioned that global functions take up a lot of computing power/space,
                                                            // so I looked at how else to write the compareFunction I constructed earlier for local use inside a function
                                                            // reference: (Mastering JS, 2022)

    // calculate length of the given array
    let sortedArrayLength = sortedArray.length;

    // check check
    console.log(`arrayLength = ${sortedArrayLength}`);

   

    /*  The length of an array cannot be anything but a whole number, 
        but when dividing an odd length of array by 2 to find the middle, (e.g. 9 / 2 = 4.5)
        Math.floor() is used to round the result down to the nearest integer (Math.floor(4.5) =  4; */

    /*  Next, it is important to note that we index an array of length 9 from [0] - [8].
        So when dividing the length by 2, when we round the result down to the next integer,
        we account for the fact that the position of the index is always -1 of the length */

    /*  So when we need to calculate the median of an array of even length, e.g. 10, we need to add  */

    // if the length of the array is even, Math.floor() will have nothing to do (e.g. 10 / 2 = 5)
    // divide the length of the array by 2 to find the middle

     // declare mid variable to store the result in
    let mid = Math.floor(sortedArrayLength / 2);


        // if arrayLength is even, e.g. 10
        if (sortedArrayLength % 2 == 0) {

            // array[mid] is the higher index of the two middle positions in the array
            //
            //                                                                    (mid - 1)  (mid)
            //                                                                         /       \
            // e.g. arrayLength of 10 ==> index[0], index[1], index[2], index[3], index[4], index[5], index[6], index[7], index[8], index[9];
            //                                                                          \     /
            //                                                                           \   /
            //                                                               position of the two middle numbers

            // return e.g. (value held at index[5] + value held at index[4]) divided by two to get the average of the two values
            return (sortedArray[mid] + sortedArray[mid - 1]) / 2;
        }

        // if arrayLength is odd, e.g. 9
        else {

            // return the number stored at that position of the array
            return sortedArray[mid]; 
        }
}

// call the original array to see if the sort() method worked inside function median()
console.log(`Median: ${median(numberList)}`);









// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T11 - Beginner Data Structures — Arrays and Maps. (L1T11 reading material). 
// Retrieved 25 January 2023 via shared Dropbox. 

// Additional Material:
// MDN Docs.(2022). Math.min(). Retrieved on 25 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// MDN Docs.(2022). Math.round(). Retrieved on 25 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// W3C Schools.(2022). JavaScript: Get the median of an array of numbers. Retrieved on 25 January 2023 at https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
// MDN Docs.(2022). Array.prototype.sort(). Retrieved on 25 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#try_it
// Pop, Florin.(2021). sort Array Method | Javascript Tutorial. Retrieved on 26 January 2023 at https://www.youtube.com/watch?v=RsFBsBep-hA
// StackOverflow.(2018). Calculating Median - Javascript. Retrieved on 26 January 2023 at https://stackoverflow.com/questions/45309447/calculating-median-javascript
// MDN Docs.(2022). Array.from(). Retrieved on 26 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Mastering JS.(2022). Calculate the Median of an Array in JavaScript. Retrieved on 26 January 2023 at https://masteringjs.io/tutorials/fundamentals/median

// Used Calculator.net to check the results of my programme against. Retrieved 26 January 2023 at https://www.calculator.net/