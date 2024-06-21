//L1T02

//Compulsory Task 2.1


// Request user's name
// Print out name
// Request user's age
// Print out age
// New line, print out "It's nice to meet you!"


/* I will be logging to the console to print out the name and age,
 but will print the greeting to the screen where the user will more readily
 see it, using alert().

 I initially used alert() for all outputs, but having to click "Okay"
 after the user's name and age is printed out slows down the user's progress */


let userName = prompt("What is your name?"); //request input of name
console.log(userName); //print out name in console
let userAge = prompt("How old are you?"); //request input of age
console.log(userAge); //print out age in console
alert("\nIt's nice to meet you!"); //print greeting to screen in new line

/* It seemed to me that the order of events was important, 
so I did not group all the outputs together in one alert() 
[eg. alert(userName + ", aged " + userAge + "," + "\n" + "It's nice to meet you!");] 

I also refrained from adding more strings to sound more conversational
while interacting with the user,
as the instructions of this task seemed intentionally without frills.*/


/* To find out how to insert a line break, I consulted:
Freecodecamp.org.(2016). How To Add a New Line In A String. 
Retrieved 12 January 2023 from https://forum.freecodecamp.org/t/how-to-add-new-line-in-string/17763 */

/*   */