//L1T02

//Compulsory Task 2.2

// Make a shopping list through the following steps:

    // Request user input of 3 items
    // Store each item as a variable (ie. item1, item2, item3)
    // Output as a list


/* I acknowledge how the variables were first declared in the 
example shopping list (e.g let variable1 = "item";)

I also like the example of let heading = "Your shopping list: ";
Makes it nice and succinct later on in the code.

I chose not to do the above in my code since I'm not sure why there was a
.js file with the solution already supplied. Was that meant to be there to help?
I renamed it "given_shopping_example.js"

I will use that approach in future though.

*/

let item1 = prompt("What do you need on your shopping list? \n \nList the first item."); //greet and request user input for item 1
let item2 = prompt("Item 2:"); //request input of item 2
let item3 = prompt("Item 3:"); // request input of item 3
alert("You need to shop for: \n" + item1 + "\n" + item2 + "\n" + item3); //print out shopping list

/* Source material: 
Hyperiondev.(2021). Your First Computer Program (L1T01 reading material). 
Retrieved 12 January 2023 via shared Dropbox. */