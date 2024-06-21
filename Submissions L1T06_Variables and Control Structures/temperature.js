// 15 January 2023
// Mandisa Macleod

// Capstone Project 1 - Variables and Control Structures

// Compulsory Task 1 - Build a temperature metric converter


// Declare variables for the three temp metrics

const celsius = "°C";
const fahrenheit = "°F";
const kelvin = "°K";

let metricToConvertFrom;
let metricToConvertTo;
let tempValue;
let convertedTempValue;


// ----------- USER INPUT: metricToConvertFrom --------------------- //

// Ask user about the metric they want to convert from
// I reworded the prompt to make the wanted format of input clearer


metricToConvertFrom = prompt(`What are you converting from?

If Celsius, type              C
If Fahrenheit, type         F
If Kelvin, type                K`);


// check if input is valid:
// accept both lowercase, uppercase and the whole word.
// Depending on the input, set metricToConvertFrom to celsius, fahrenheit or kelvin


switch (metricToConvertFrom) {

    // input is celsius
    // fallthrough all input possibilities for Celsius

    case "C":     
    case "c":      
    case "Celsius":
    case "celsius":
        console.log(`"metricToConvertFrom" input is ${metricToConvertFrom}.`);
        metricToConvertFrom = celsius;
        console.log(`Convert from ${metricToConvertFrom}...`);
        break;


    // input is fahrenheit
    // fallthrough all input possibilities for F

    case "F":
    case "f":
    case "Fahrenheit":
    case "fahrenheit":
        console.log(`"metricToConvertFrom" input is ${metricToConvertFrom}.`);
        metricToConvertFrom = fahrenheit;
        console.log(`Convert from ${metricToConvertFrom}...`);
        break;


    // input is kelvin
    // fallthrough all input possibilities for Kelvin

    case "K":
    case "k":
    case "Kelvin":
    case "kelvin":
        console.log(`"metricToConvertFrom" input is ${metricToConvertFrom}.`);
        metricToConvertFrom = kelvin;
        console.log(`Convert from ${metricToConvertFrom}`);
        break;


    // invalid input

    default:
        console.log(`"metricToConvertFrom" input is ${metricToConvertFrom}.`);
        alert(`This is not a valid "metric-to-convert-from" input. Please refresh the page and try again.`);
        break; 
        /* don't forget to "break" the default, 
        otherwise code further down will still run despite error being caught here */
}



// ----------- USER INPUT: tempValue ---------------------------- //

// ask user to input temperature (number) they wish to convert
// check for valid input with Number().

tempValue = Number(prompt(`Please type in the number you would like to convert:`));

if (!Number(tempValue)) {

    console.log(`The tempValue input is ${tempValue}.`);
    alert(`That is not a valid temperature value input. Please refresh page and try again.`);
}
else {

    console.log(`The tempValue input is ${tempValue}.`);
}




// ------------ USER INPUT: metricToConvertTo --------------------- //

// Ask user which metric they want to convert to

metricToConvertTo = prompt(`What are you converting to?

If Celsius, type              C
If Fahrenheit, type         F
If Kelvin, type                K`);


switch (metricToConvertTo) {

    // input is celsius
    // fallthrough all input possibilities for Celsius

    case "C": 
    case "c":
    case "Celsius":
    case "celsius":
        console.log(`"metricToConvertTo" input is ${metricToConvertTo}.`);
        metricToConvertTo = celsius;
        console.log(`Convert to ${metricToConvertTo}`);
        break;


    // input is fahrenheit
    // fallthrough all input possibilities for F

    case "F":
    case "f": 
    case "Fahrenheit":   
    case "fahrenheit":
        console.log(`"metricToConvertTo" input is ${metricToConvertTo}.`);
        metricToConvertTo = fahrenheit;
        console.log(`Convert to ${metricToConvertTo}`);
        break;


    // input is kelvin
    // fallthrough all input possibilities for Kelvin

    case "K":
    case "k":
    case "Kelvin":
    case "kelvin":
        console.log(`"metricToConvertTo" input is ${metricToConvertTo}.`);
        metricToConvertTo = kelvin;
        console.log(`Convert to ${metricToConvertTo}`);
        break;


        // invalid input

    default:
        console.log(`"metricToConvertTo" input is ${metricToConvertTo}.`);
        alert(`This is not a valid "metric-to-convert-to" input. Please refresh the page and try again.`);
        break;
        /* don't forget to "break" the default, 
        otherwise code further down will still run despite error being caught here */
}



// -----------   RESULT --------------------------------------------- //

// FROM CELCIUS

if (metricToConvertFrom === celsius) {

    console.log(`You want to convert ${tempValue} from ${metricToConvertFrom}...`);


    // to Fahrenheit

    if (metricToConvertTo === fahrenheit) {

        console.log(`... to ${metricToConvertTo}.`);
        convertedTempValue = ((tempValue * (9/5)) + 32).toFixed(2); // F = C x 9/5 + 32
        alert(`${tempValue} ${metricToConvertFrom}  =  ${convertedTempValue} ${metricToConvertTo}.`);
    }


    // to Kelvin

    else if (metricToConvertTo === kelvin) {
   
        console.log(`... to ${metricToConvertTo}.`);
        convertedTempValue = ((tempValue + 273.15)).toFixed(2); // K = C + 273.15
        alert(`${tempValue} ${metricToConvertFrom}  =  ${convertedTempValue} ${metricToConvertTo}.`);
    }


    // default
    else {

        console.log(`... to ${metricToConvertTo}. Process not valid.`);
        alert(`You want to convert ${tempValue} from ${metricToConvertFrom} to ${metricToConvertTo}.
        Process not valid.`);
    }
}

// FROM FAHRENHEIT

else if (metricToConvertFrom === fahrenheit) {

    console.log(`You want to convert ${tempValue} from ${metricToConvertFrom}...`);

    // to Celsius

    if (metricToConvertTo === celsius) {

        console.log(`... to ${metricToConvertTo}.`);
        convertedTempValue = ((tempValue - 32) * (5/9)).toFixed(2); // C = (F - 32) x 5/9
        alert(`${tempValue} ${metricToConvertFrom} =  ${convertedTempValue} ${metricToConvertTo}.`);
    }


    // to Kelvin

    else if (metricToConvertTo === kelvin) {

        console.log(`... to ${metricToConvertTo}.`);
        convertedTempValue = ((tempValue + 459.67) * (5/9)).toFixed(2); // K = (F + 459.67) x (5/9)
        alert(`${tempValue} ${metricToConvertFrom}  =  ${convertedTempValue} ${metricToConvertTo}.`);
    }


    // invalid input

    else {

        console.log(`... to ${metricToConvertTo}. Process not valid.`);
        alert(`You want to convert ${tempValue} from ${metricToConvertFrom} to ${metricToConvertTo}.
        Process not valid.`);
    }
}

// FROM KELVIN

else if (metricToConvertFrom === kelvin) {

    console.log(`You want to convert ${tempValue} from ${metricToConvertFrom}...`);

    // to Celsius

    if (metricToConvertTo === celsius) {

        console.log(`... to ${metricToConvertTo}.`);
        convertedTempValue = (tempValue - 273.15).toFixed(2); // C = K - 273.15
        alert(`${tempValue} ${metricToConvertFrom}  =  ${convertedTempValue} ${metricToConvertTo}.`);
    }


    // to Fahrenheit

    else if (metricToConvertTo === fahrenheit) {

        console.log(`... to ${metricToConvertTo}.`);
        convertedTempValue = ((tempValue * (9/5)) - 459.67).toFixed(2);  // F = K x 9/5 - 459.67
        alert(`${tempValue} ${metricToConvertFrom}  =  ${convertedTempValue} ${metricToConvertTo}.`);
    }


    // invalid input

    else {

        console.log(`... to ${metricToConvertTo}. Process not valid.`);
        alert(`You want to convert ${tempValue} from ${metricToConvertFrom} to ${metricToConvertTo}.
        Process not valid.`);
    }
}


/* Note: Will have to look into how best to exit the program entirely after incorrect input,
 instead of moving on to the next bit of code... .*/



// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T06: Capstone Project I — Variables and Control Structures. (L1T06 reading material). 
// Retrieved 17 January 2023 via shared Dropbox. 

// Hyperiondev.(2021). L1T05: Logical Programming - Operators and Switch Statements. (L1T05 reading material). 
// Retrieved 17 January 2023 via shared Dropbox. 

// Additional Sources:

// MDN Web Docs.(2022). Switch. Retrieved 17 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Stackoverflow.(2009). When to use If-else if-else over switch statements and vice versa [duplicate]. Retrieved 17 January 2023 at https://stackoverflow.com/questions/427760/when-to-use-if-else-if-else-over-switch-statements-and-vice-versa
// Temp Converter on Google to check if conversions are correct. Retrieved 17 January 2023 at https://www.google.com/search?q=celsius+to+fahrenheit&oq=celsius+to+fahrenheit&aqs=chrome..69i57j6j0i10i131i433i512j0i10i512l7.8091j0j7&sourceid=chrome&ie=UTF-8

/* My brother had previously shown me how to find and replace words. 
I had spelt celsius "celcius" throughout the whole programme, so that tip came in very handy 
in fixing the spelling consistently across all of the code.
*/