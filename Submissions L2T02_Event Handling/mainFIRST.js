// Mandisa Macleod
// 26 June 2023

// L2T2 - Event Handling

const shoppingList = ["Bananas", "Eggs", "Bread", "Cheese", "Yoghurt"];

// console.log(`htmlShoppingList: `, htmlShoppingList);
console.log(`shoppingList: `, shoppingList);

// ------ FUNCTION TO DISPLAY SHOPPING LIST ----- //

function displayShoppingList() {
  // reset listItem contents to nothing
  itemList.innerHTML = "";

  // loop through array shoppingList
  shoppingList.forEach((item) => {
    // create new span element
    let spanItem = document.createElement("span");

    // assign spanItem value of ‘\u00D7’
    spanItem.textContent = "\u00D7"; // .innerHTML and .innerText also work

    // assign spanItem class of close
    spanItem.setAttribute("class", "close");

    // create new list item element and assign it to a variable
    const listItem = document.createElement("li");

    // assign each item in the shoppingList array to innerHTML of a listItem
    listItem.innerHTML = item;

    // CHECKS: did assignment of shoppingList items work
    // console.count(`Item# `);
    // console.log(`listItem(): `, listItem);

    // CHECKS: did assignment of spanItem work?

    // add spanItem to listItem
    listItem.appendChild(spanItem);

    // add listItem to <ul> #itemList
    itemList.appendChild(listItem);
  });

  deleteItemFromList();
}

// ------ FUNCTION TO DELETE ITEM FROM LIST ----- //

// function to delete item from shoppingList array
function deleteItemFromList() {
  // add click-event listener to each <span> element of class "close"
  const closeSpans = document.getElementsByClassName("close");

  // loop through the collection of closeSpans
  for (let i = 0; i < closeSpans.length; i++) {
    // add eventListener to each span element in this collection
    // pass the event as an argument to the anonymous function executed when element is clicked
    closeSpans[i].addEventListener("click", (event) => {
      // CHECKS: has EventListener been added
      // click displays parentNode in console

      const itemToDelete = event.target.parentNode.firstChild.textContent; // (chatGPT advised how to access the correct text)

      // CHECKS: accessing the li text without the x of the span?
      console.log(`event.target.parentElement.textContent = `, itemToDelete);

      // find shoppingList index number of clicked item
      const itemIndex = shoppingList.indexOf(itemToDelete);
      console.log(`Index: `, itemIndex);

      // when element is clicked, delete item from the array
      // if it exists
      if (itemIndex != -1) {
        //shoppingList.splice(start, deleteCount) (MDN, 2023)
        shoppingList.splice(itemIndex, 1);
      } else {
        console.error("Something has gone wrong deleting the item.");
      }

      // when element is clicked, set display style to "none" for the specific parent list item element
      event.target.parentElement.style.display = "none"; // [W3C Schools, 2023]
    });

    // add click-event listener to the html element of ID "itemList"
    document.getElementById("itemList").addEventListener("click", (event) => {
      // if the event's tag name is a list tag, toggle a "checked" class on the event element
      // HTML tagName is returned in capitals (MDN, 2023)
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
      }
    });
  }
}

// ------ FUNCTION TO ADD USER-INPUT TO SHOPPING LIST ----- //
function updateList() {
  // assign the value of the input to a variable
  let newItem = document.getElementById("input");

  // if input text field is NOT empty
  if (newItem.value != "") {
    // CHECKS
    console.log(newItem.value);

    // add the input text to the array shoppingList
    shoppingList.push(newItem.value);

    // call function displayShoppingList()
    displayShoppingList();

    // and enable deletion of items
    // deleteItemFromList();

    // once either has happened, reset input value to an empty string
    newItem.value = "";
  } else {
    alert("Add an item to the list.");
    console.count(`else runs times:`);
  }
}

// add key up eventListener to #input
document.getElementById("input").addEventListener("keyup", (event) => {
  // Note: .keyCode is deprecated, but the task is to check for keyCode 13, so we'll use it for this task
  // if the event key code is equal to "13", trigger a click() function on the element with an addButton ID
  if (event.keyCode === 13) {
    updateList();
  }
});

displayShoppingList();
// deleteItemFromList();

// REFERENCES

//
// W3C Schools.2023. HTML DOM Element addEventListener(). Retrieved on 30 June 2023 at https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// W3C Schools.2023. HTML DOM parentElement Property. Retrieved on 30 June 2023 at https://www.w3schools.com/jsref/prop_node_parentelement.asp
// MDN.2023. Array.prototype.indexOf(). Retrieved on 19 July 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// MDN.2023. Array.prototype.splice(). Retrieved on 19 July 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// chatGPT. I struggled to find a way to access the textContent of the listItem without the x of the span child element. I had not realized that the text of li was also a child of it, just like <span>. chatGPT showed me how to access only what I wanted by using event.target.parentNode.FIRSTCHILD.textContent instead of just event.target.parentNode.textContent
// MDN.2023. Element: tagName property. Retrieved on 20 July 2023 at https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName
// MDN.2023. DOMTokenList: toggle() method. Retrieved on 20 July 2023 at https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
// HuXnWebDev [YouTube].2021. How to Add, Remove & Toggle Classes By Using DOM (classlist) property. Retrieved on 20 July 2023 at https://www.youtube.com/watch?v=vnNQaKXXJiU&ab_channel=HuXnWebDev
