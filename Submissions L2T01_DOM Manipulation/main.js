// Mandisa Macleod
// 26 June 2023

// L2T1 - DOM Manipulation

// -- TASK -- //

/*  ○ Create an array and initialise it with at least four grocery items
    ○ Create a function which will display each item in the array as list
    elements in the <ul> tag. You will need to use the <ul> tag’s ID.
    ○ Using JavaScript, change the CSS styling of two of the list items to
    indicate that they have been bought. 
*/

// -- SOLUTION -- //

// declare initial shopping list
let shoppingList = ["Bananas", "Eggs", "Bread", "Cheese", "Yoghurt"];

// FUNCTION //
function displayShoppingList() {
  let htmlShoppingList = document.getElementById("itemList");

  // console.log(`htmlShoppingList: `, htmlShoppingList);
  console.log(`shoppingList: `, shoppingList);

  // append each listItem to the <ul> "htmlShoppingList"
  // loop through array shoppingList
  Array.from(shoppingList).forEach((item) => {
    // create new list item element and assign it to a variable
    let listItem = document.createElement("li");

    // assign each item in the shoppingList array to innerHTML of a listItem
    listItem.innerHTML = item;

    // CHECKS: did assignment of shoppingList items work
    console.count(`Item# `);
    console.log(`listItem(): `, listItem);

    // add listItem to <ul>
    htmlShoppingList.appendChild(listItem);
  });
}
changeList();

// change styling of two elements to indicate they have been bought
// using textDecoration: line-through
// and using their place inside the parent element <ul>

let boughtItemOne = document.querySelector("ul > li:nth-child(4)");
boughtItemOne.style.textDecoration = "line-through";

let boughtItemTwo = document.querySelector("ul > li:nth-child(1)");
boughtItemTwo.style.textDecoration = "line-through";
