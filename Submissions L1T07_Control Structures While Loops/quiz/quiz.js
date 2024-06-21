// 18 January 2023
// Mandisa Macleod

// L1T07 - Beginner Control Structures - While Loop

// COMPULSORY TASK 3 - QUIZ DO-WHILE LOOP

/* Let me explain so this quiz doesn't come across too strange... 
 The book "Guess How Much I Love You" was front of my brain (I have a small kid), 
 so the quiz is based on the interaction between the little hare and the big hare,
 competing for ways how best to express how much more they love the other one.
 */


// List of possible answers

let a = "As far as my arms can stretch.";
let b = "As high as I can reach.";
let c = "All the way up to my toes.";
let d = "As high as I can hop.";           
let e = "To the moon!";                 /* these variables were not as necessary as I thought, 
                                        but ultimately kept them to practice my use of template literals with*/

let carryOn = false;
let tryAgain = "";


// -------- Evaluate two sequential inputs and proceed accordingly --------- //
// -------- Using nested switch statements! Reference: [GeeksForGeeks, 2022] //

do {

    // Question and list of answers to choose from
    let userAnswer = prompt(`Guess how much I love you.
    
    (a)  As far as my arms can stretch.
    (b)  As high as I can reach.
    (c)  All the way up to my toes.
    (d)  As high as I can hop.
    (e)  To the moon!
    
    Enter a, b, c, d or e: `);

    userAnswer = userAnswer.toLowerCase();  // as suggested by Johann JvV for a previous task's solution
                                            // to reduce the amount of cases (e.g. case "Y" and case "y")
                                            // correct application refererence (MDN Docs, 2022) on advice by Johan JvJ

    console.log(`userAnswer = ${userAnswer}`);
          
                                                

    
// Switch statement for possible answers a, b, c, d, e
    switch (userAnswer) {

        // I initially had different alert(messages), 
        // but decided to make the message the same for all "incorrect" cases (cases a-d)
        // fallthrough to last answer


        // case a //
        case "a":

        // case b //
        case "b":

        // case c //
        case "c": 
        
        // case d //
        case "d": 
        
        tryAgain = prompt(`
        Yes, but more than that still!
        
        Want to try again? 
        
        Yes:    Y
        No:      N`);

        tryAgain = tryAgain.toLowerCase();
        console.log(`${tryAgain}, thank you.`);

        // nested switch statement for yes or no
        switch (tryAgain) {

            case "yes":                 // no break
            case "y":
                carryOn = true;
                break;

            case "no":
            case "n":
                carryOn = false;
                console.log(`No thanks.`);
                break;


            default:
                alert(`That's not a valid input. Please start over, sweet.`);
                carryOn = false;
                break;
        }
        break;

        // correct answer - case e //
        case "e": 
        
            alert(`
            That's right.
            ${e} - and back!`);
            carryOn = false;
            break;



        // default //
        default:
                
            tryAgain = prompt(`
            That's not a valid input.
            
            Want to try again? 
            
            Yes:    Y
            No:      N`);

            tryAgain = tryAgain.toLowerCase();
            console.log(`${tryAgain}, thank you.`);

            // nested switch statement for yes or no
            switch (tryAgain) {

                case "yes":                 // no break
                case "y":
                    carryOn = true;
                    break;

                case "no":
                case "n":
                    carryOn = false;
                    console.log(`No thanks.`);
                    break;

                default:
                    alert(`That's not a valid input. Please start over, sweet.`);
                    carryOn = false;
                    break;
            }
    }

} while (carryOn == true); // spelled it out for my own clarity


// THIS WAS A GREAT EXERCISE!



// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T07 - Beginner Control Structures - While Loop . (L1T07 reading material). 
// Retrieved 17 January 2023 via shared Dropbox. 


// Additional Material :

// McBratney, S. and Jeram, A. (1994) Guess how much I love you. London: Walker Books Ltd. 
// Geeks for Geeks.(2022). Nested switch case. Retrieved 18 January 2023 at https://www.geeksforgeeks.org/nested-switch-case/
// W3C Schools.(2023). JavaScript String length. Retrieved 18 January 2023 at https://www.w3schools.com/jsref/jsref_length_string.asp
// Stackoverflow.(2016). How to save prompt input into array. Retrieved 18 January 2023 at https://stackoverflow.com/questions/28252888/how-to-save-prompt-input-into-array
// MDN Docs.(2022). String.prototype.toLowerCase(). Retrieved 21 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

