// 15 January 2023
// Mandisa Macleod

// L1T05: Logical Programming - Operators and Switch Statements

// Compulsory Task 2

/* I had worked out a solution with lots of if, else if, else statements and really wanted to see if
I could get a switch statement right. I think I have!

THIS IS THE SWITCH SOLUTION, MY OFFICIAL SUBMISSION FOR TASK L1T05 */

/* TASK

There are multiple quadrilaterals, all with their own properties. 
Create a program that receives the length of each side and the angles of each corner 
(these can be hard-coded) and determines whether the shape is a
square, a rectangle, a rhombus or a parallelogram.

The properties of each are as follows:

○ Square: All sides equal, all corners 90 degrees.
○ Rhombus: All sides equal, opposite angles equal. Two opposite
corners are less than 90 degrees, the other two corners are more
than 90 degrees.
○ Rectangle: Opposite sides equal, all corners 90 degrees.
○ Parallelogram: Opposite sides equal, opposite angles equal. Two
opposite corners are less than 90 degrees, the other two corners are
more than 90 degrees.
*/

// Hardcoding was allowed as per task, so I used no prompts.

// length of each side
const sideOne = 6;
const sideTwo = 4;
const sideThree = 6;
const sideFour = 4 ;

//angle of each corner
const cornerOne = 90;
const cornerTwo = 90;
const cornerThree = 90;
const cornerFour = 90;

// to check if they add up to 360 degrees, add up all corners
const sumOfCorners = cornerOne+cornerTwo+cornerThree+cornerFour;


// Forming variables of type bool for all scenarios.
// My brother advised me to name them like questions if they are of type bool, 
// like "areAllSidesEqual" rather than "allSidesEqual". Made it much more readable.


const areAllSidesEqual = sideOne === sideTwo && sideTwo === sideThree && sideThree === sideFour;

// if all corners are equal, they must all be equal to 90 degrees to account for the full 360.
const areAllCornersEqual = 90 === cornerOne && cornerOne === cornerTwo && cornerTwo === cornerThree && cornerThree === cornerFour;

// are both pairs of opposite sides equal
const areOppSidesEqual = sideOne === sideThree && sideTwo === sideFour;

// are both pairs of opposite corners equal
const areOppCornersEqual = cornerOne === cornerThree && cornerTwo === cornerFour;

// for rhombus and parallelogram
// is one pair of opposite angles < 90 degrees while the other pair is > 90?
const oppCornerPairAngle = cornerOne & cornerThree < 90 && cornerTwo & cornerFour > 90 || cornerOne & cornerThree > 90 && cornerTwo & cornerFour < 90;

// Create variable quadrilateral to pass to switch expression
// Create other variables to serve as cases
// i.e. if quadrilateral = thatCase, then run that code

// Set all values to false to start
let quadrilateral = false;
let errorSumOfCorners = false;

// Create variables to run as "cases"

let square = false;
let rhombus = false;
let rectangle = false;
let parallelogram = false;

// See which variable's value is changed to "true."

if (sumOfCorners != 360) {

    errorSumOfCorners = true;
    quadrilateral = errorSumOfCorners;
}
else if (areAllSidesEqual && areAllCornersEqual) {

    square = true;
    quadrilateral = square;
}
else if (areAllSidesEqual && areOppCornersEqual && oppCornerPairAngle) {

    rhombus = true;
    quadrilateral = rhombus;
}
else if (areOppSidesEqual && areAllCornersEqual) {

    rectangle = true;
    quadrilateral = rectangle;
}
else if (areOppSidesEqual && areOppCornersEqual && oppCornerPairAngle) {

    parallelogram = true;
    quadrilateral = parallelogram;
}

// Use switch statement to console.log which value was true for quadrilateral.

switch (quadrilateral) {

    case errorSumOfCorners:

        console.log(`
        The sum of your angles is not 360 degrees.
        It is ${sumOfCorners} degrees. 
        Check your corner values and try again.`); // Error message, do not proceed.
        break;

    case square:

        console.log(`
        This is a square. 
        All its sides are the same length,
        and all its corners are the same angle equal to 90 degrees.`);
        break;

    case rhombus:

        console.log(`
        This is a Rhombus. 
        All its sides are the same length, but only the pair of opposing corners are the same size angle, 
        ie. pair cornerOne and cornerThree, as well as pair cornerTwo and cornerFour.`);
        break;
        
    
    case rectangle:

        console.log(`
        This is a Rectangle. 
        Its pairs of opposite sides are the same length, 
        and all corners are the same angle, i.e 90 degrees.`);
        break;

    case parallelogram:

        console.log(`
        This is a Parallelogram. 
        Its pairs of opposite sides are the same length, 
        and its pairs of opposite corners are the same size angle.
        One pair of opposite corners is less than 90 degrees,
        the other pair of opposite cornes is greater than 90 degrees.`);
        break;

        default :
    console.log("Sorry. It's not a square, rectangle, rhombus or parallelogram."); // Error message

}





/* 
Base Source Material: 
Hyperiondev.(2021). L1T05: Logical Programming - Operators and Switch Statements. (L1T05 reading material). 
Retrieved 15 January 2023 via shared Dropbox. 

Additional:

MDN Web Docs.(2022). Switch. Retrieved 15 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

To check what other quadrilaterals exist and which parameters are important:
Third Space Learning .(date unknown). Types Of Quadrilaterals. Retrieved 15 January 2023 at https://thirdspacelearning.com/gcse-maths/geometry-and-measure/types-of-quadrilaterals/

