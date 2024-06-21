// 24 January 2023
// Mandisa Macleod

// L1T10 - Beginner Data Structures — Arrays and Maps

// Compulsory Task 1 and 2

// Ask the user to input names of people they would like to invite to a dinner
// party.
// ● Each name should be added to an array.
// ● The user can only invite a maximum of ten people. If they try to add more
// than 10 names, the program should state, “You have already added 10
// people to your guest list.”
// ● The program should then output the list.





// -------- NOTES --------- //

/* For the names, I decided to accept special characters and numbers as inputs, 
since names like chatroom nicknames and foreign names should not be excluded */

/* I decided to not eliminate differences between anna and Anna by using toLowerCase, 
since names are usually spelled with a capital first letter and it looks more normal*/
// problem is that Anna =! anna and using includes() on the array will return false
/* I made the decision to alert the user to the spelling of the name on the existing list
 and to take care to match that */

// Duplicate names. If there are two Amys on the guest List, the first one in the array will be the one to be replaced.
/* I thought about converting the array to a set to eliminate duplicates, 
but thought the user just has to lable them "Amy M" and "Amy C" to differentiate the two,
as one would on a real-life list too*/


// -------- SOLUTION ------- //

// the guest list should be restricted to 10 people - but in order to terminate the list and issue the warning
// the loop needs to loop over 10 times. I used a do while loop

// declare the array of guestList;
let guestList = [];

// store maximum amount of people the user can invite in a variable instead of hardcoding 10 into the programme
// initialize the variable to 10.
let maxAmountOfPeople = 5;

// set the counter for the loop to 0
let i = 0;

do {

    // make the outputted list a prettier string by adding spaces after the commas
    let stringGuestList = guestList.join(", "); // (Sebhastian,2021)

    // prompt user for input
    let guest = prompt(`You can invite ${maxAmountOfPeople} people.\nWho would you like to invite?\nYour list: ${stringGuestList}`);
    guestList.push(guest);
    i++;

    console.log(`Guest[${i-1}] is ${guest}`); // adjusting i with -1 to display the correct index of the list

   
} while (i <= maxAmountOfPeople); // enable user to input more than maxAmountOfPeople by allowing i = maxAmountOfPeople



// check guest list
console.log(guestList);

// store the extra person in its own variable
let replacementGuest = guestList[maxAmountOfPeople];
console.log(`replacementGuest = ${replacementGuest}`);

// delete the extra person from end of the array
guestList.pop();


// make list a prettier string by adding spaces after the commas
let stringGuestList = guestList.join(", "); 

// check if prettifying worked
console.log(stringGuestList);


// warn the user that they have added one too many people to the list
// prompt if they would like to replace anyone from the list with that last person Y or N
let doReplace = prompt(`You've already added ${maxAmountOfPeople} people to your list.\nThis is your current list: ${stringGuestList}.\nWould you like to replace someone on the list with ${replacementGuest}?\n\nY\nN`);

// whether they input their answer lowercase or uppercase, make it uppercase to evaluate between fewer cases
doReplace = doReplace.toLowerCase();


// declare replaceThisGuest outside of the loop, otherwise it will create Reference Error when trying to access it later
let replaceThisGuest = "";

// create exit trigger
let exit = false;



// does user want to replace someone? check for Yes or No
switch (doReplace) {


    // case yes //
    case "y": 
    
        // check input of guest to be replaced by use of a while loop 
        // loop through until input matches an existing name on the guest list
        // while exit from loop is not desired //
        while (exit == false) {

            // ask user whom to replace
            replaceThisGuest = prompt(`Who would you like to replace?\nThis is your current list:\n${stringGuestList}.`);
            
            // check input of name to replace
            console.log(`replace ${replaceThisGuest}`);
            
            // check if that name input matches a name in the array with includes() // yields true or false
            switch (guestList.includes(replaceThisGuest)) {

                // name matches //
                case true: 
                
                        // log that the name matches an existing one on the list
                        console.log(`guestList includes name ${replaceThisGuest}`);
                        exit = true; // to exit loop
                        break;
                        
                // name does not match any on the list //
                case false:

                        // alert that name does not exist on list
                        replaceThisGuest = alert(`${replaceThisGuest} is not on the exisiting guest list.\nYou may have misspelled the name.\nPay attention to lowercase and uppercase.`);
                        exit = false; // stay in loop
                        break;


                default:
                    alert(`Something has gone wrong. Please start over.`);
                    exit = true;
                    break;
            }

        }


        // store the position of the person to be replaced in the index of guest list
        let replaceOnIndex = guestList.indexOf(replaceThisGuest);

        console.log(`replaceThisGuest is at index[${guestList.indexOf(replaceThisGuest)}]`);
        console.log(`replaceOnIndex = index[${replaceOnIndex}]`);

        // assign the position of that array the new value of replacementGuest
        guestList[replaceOnIndex] = replacementGuest;

        // update stringGuestList
        stringGuestList = guestList.join(", ");

        // check new list
        alert(`Alright, this is now your guest list:\n${stringGuestList}.`);

        break;

        
    // no changes, same guest list //
    case "n": 
            alert(`Alright, this is your guest list:\n${stringGuestList}.`);
            break;

    // any input other than y or n
    default:
        alert(`That is not a valid input. Please start over.`);
        break;

}  




// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T10 - Beginner Data Structures — Arrays and Maps. (L1T10 reading material). 
// Retrieved 24 January 2023 via shared Dropbox. 


// Additional Material:

// Pandey, Deeksha .(2022). Array to String in JavaScript. Retrieved on 24 January 2023 at https://www.scaler.com/topics/convert-array-to-string-javascript/
// Sebhastian, Nathan.(2021). JavaScript array to string (with and without commas). Retrieved on 24 January 2023 at https://sebhastian.com/javascript-array-string/

