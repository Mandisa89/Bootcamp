// 23 January 2023
// Mandisa Macleod

// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion" // ReferenceError: Lion is not defined. I added quotation marks to make it a string
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = Number("4"); // RuntimeError: string 4, converted to number. Perhaps should have just made it a 4

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth.`; 
// ReferenceError: declared variable "full_spec" by adding let before the variable name
// RuntimeError: also made the spelling of fullSpec uniform, instead of declaring fullSpec and trying to console.log "full_spec"
// replaced the quotation mark with back ticks to be able to use template literals
// RuntimeError: added $ in front of curly braces to successfully call the variable
// ReferenceError: spelled numberOfTeeth and number_of_teeth uniformly. Used camelcase since that is the norm for Javascript
// ReferenceError: spelled animalType and animal_type uniformly. Used camelcase since that is the norm for Javascript
// LogicalError: swapped around where ${animalType} and ${numberOfTeeth} are called in order for the sentence to make sense


if (numberOfLegs === 4) { // LogicalError: Only one =, which assigns instead of comparing two values. 
                        /* I made a decision to convert numberOfLegs to a Number earlier, and now compare the value AND type of the variable to 4 (===), 
                        instead of keeping the variable a string and comparing only its value to 4 (==), which would have worked out fine, 
                        but could have led to problems somewhere down the road.*/
                        // LogicalError: I changed the value from 3 to 4, since that is more likely when talking about the numberOfLegs of a lion
                        // now this fullSpec message is only printed IF the animal has 4 legs. If it doesn't, the else statement will run
                        
        console.log(fullSpec); // SyntaxError: missing brackets around string
                        // ReferenceError: full_spec not defined because it was previously declared as fullSpec. I adjusted spelling.
} 
else {

        console.log(`Not sure what animal that is.`); // LogicalEorr: added an else statement {} to the if statement, since an if alone does not make sense.
                                                        // also added a console.log to keep track of which statement was executed
}
