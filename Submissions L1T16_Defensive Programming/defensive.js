// 13 February 2023
// Mandisa Macleod

// L1T16 - Towards Defensive Programming II
// Try Catch Blocks Exercise

// In this file, you are going to write a program that will be used to calculate
// distance, time, or speed.

// declare empty variables to be assigned values through the user's input 
let calculateThis;
let inputDistance;
let inputTime;
let inputSpeed;


while (true) {

    try {
        calculateThis = prompt(`What would you like to calculate?
        \nType:
        
        D       for Distance
        T       for Time
        S       for Speed.`);
        
        

        // if user gave no input
        if (calculateThis == "") {

            throw "You have not entered anything.";  
        }

        // if user input a number
        if (Number.isInteger(calculateThis)) {

            throw calculateThis + " is a number and not one of the three options.";         
        }

        // if input has been determined to be a string
        // convert string input to uppercase to allow for uppercase inputs 
        calculateThis = calculateThis.toUpperCase();
        
        // check if calculateThis is one of the valid options
        if (calculateThis != "D" && calculateThis != "T" && calculateThis != "S") {
    
            throw calculateThis + " is not one of the three options.";
        }

        // output the user's input for checks
        console.log("calculateThis = " + calculateThis);
        break;
    }
    // if an error occurred, log it and continue running programme
    catch (err) {
    
        // log the relevant error message to the console
        console.log(err);
        // do not break, let loop run again in hope of receiving valid input this time
    }
}


// Evaluate result for each case of calculateThis
switch (calculateThis) {

    // Calculate Distance
    case "D":

        // prompt user for inputSpeed
        while (true) {
            try {
                inputSpeed = prompt("What is the speed:");

                inputSpeed = Number(inputSpeed);

                // if the user's input string does not convert to a number
                if (isNaN(inputSpeed)) {

                    throw inputSpeed + " is not a number. Please input a number.";
                }

                // if input is a valid number when converted from string to number
                console.log("inputSpeed = " + inputSpeed);
                break;
            }
           catch (err) {

                console.log(err);
                alert(err);
                // do not break loop until valid input received
           }
        }

        // prompt user for inputTime
        while (true) {
            try {
                inputTime = prompt("What is the time:");

                inputTime = Number(inputTime);

                // if inputTime is not a valid number when converted from string to number
                if (isNaN(inputTime)) {

                    throw inputTime + " is not a number. Please input a number.";
                }

                console.log("inputTime = " + inputTime);
                break;
            }
            catch (err) {

                console.log(err);
                alert(err);
           }
        }
        // output the result
        console.log("The distance is " + inputSpeed * inputTime);
        alert("The distance is " + inputSpeed * inputTime);
        break;


    // Calculate Time
    case "T":

        while (true) {
            try {
                inputDistance = prompt("What is the distance:");

                inputDistance = Number(inputDistance);

                // if inputDistance is not a valid number when converted from string to number
                if (isNaN(inputDistance)) {

                    throw inputDistance + " is not a number. Please input a number.";
                }

                console.log("inputTime = " + inputDistance);
                break;
            }
            catch (err) {

                console.log(err);
                alert(err);
            }
        }

        // prompt user for inputSpeed
        while (true) {
            try {
                inputSpeed = prompt("What is the speed:");

                inputSpeed = Number(inputSpeed);

                // if the user's input string does not convert to a number
                if (isNaN(inputSpeed)) {

                    throw inputSpeed + " is not a number. Please input a number.";
                }

                // if input is a valid number when converted from string to number
                console.log("inputSpeed = " + inputSpeed);
                break;
            }
            catch (err) {

                    console.log(err);
                    alert(err);
                    // do not break loop until valid input received
            }
        }
        // output the result
        console.log("The time is " + inputDistance / inputSpeed);
        alert("The time is " + inputDistance / inputSpeed);
        break;


    // Calculate Speed
    case "S":

        while (true) {
            try {
                // prompt user for inputDistance
                inputDistance = prompt("What is the distance:");

                inputDistance = Number(inputDistance);

                // if inputDistance is not a valid number when converted from string to number
                if (isNaN(inputDistance)) {

                    throw inputDistance + " is not a number. Please input a number.";
                }

                console.log("inputTime = " + inputDistance);
                break;
            }
            catch (err) {

                console.log(err);
                alert(err);
            }
        }

         // prompt user for inputTime
         while (true) {
            try {
                inputTime = prompt("What is the time:");

                inputTime = Number(inputTime);

                // if inputTime is not a valid number when converted from string to number
                if (isNaN(inputTime)) {

                    throw inputTime + " is not a number. Please input a number.";
                }

                console.log("inputTime = " + inputTime);
                break;
            }
            catch (err) {

                console.log(err);
                alert(err);
           }
        }
        // output the result
        console.log("The speed is " +inputTime / inputDistance);
        alert("The speed is " +inputTime / inputDistance);
        break;

    default:
        alert("Something has gone very wrong.")
        console.log("Something has gone very wrong.")
        break;
}

// REFERENCES

// Hyperiondev.(2018). WD L1T16 - Defensive Programming II. Retrieved on 13 February 2023 via shared Dropbox Folder

