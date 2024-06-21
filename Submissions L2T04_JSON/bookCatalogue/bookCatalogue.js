// Mandisa Macleod
// 25th July 2023
// L2T04

// ● Create a webpage that can be used to let a user store information about a catalogue of books.
// ● Make use of session storage to store the values.
// o The user should be able to add information (e.g. author, title, genre,
// reviews, etc.) about their favourite books.
// o All the information about all the books added by the user should be
// listed on the webpage.
// o The user should also be able to remove or edit information for a book.

// create array of books
let bookList = [];

// uponLoad()

function uponLoad() {
  // hide list of books if there is no book in the list as of yet
  let htmlSelect = document.getElementById("allBooks");
  htmlSelect.style.visibility = "hidden";

  // check if page has never been loaded before by checking if key "hasPageLoadedBefore" exists
  if (sessionStorage.getItem("hasPageLoadedBefore") === null) {
    // save stringified empty array of books in sessionStorage with key "books"
    sessionStorage.setItem("books", JSON.stringify(bookList));
    // set hasPageLoadedBefore to true now that the page has been loaded once
    sessionStorage.setItem("hasPageLoadedBefore", true);
  }
  //  if sessionStorage exists
  else {
    // get the array of books objects stored in sessionStorage and assign the objects to array bookList
    bookList = JSON.parse(sessionStorage.getItem("books"));

    // Clear the previous contents of #allBooks
    htmlSelect.innerHTML = "";

    // put heading back
    let catalogueHeading = document.createElement("h2");
    catalogueHeading.innerHTML = "--- Your Book Catalogue ---";

    htmlSelect.appendChild(catalogueHeading);

    // loop through each item in array bookList and display it on webpage
    let i = 0;

    bookList.forEach(function (bookItem) {
      let detailsItem = document.createElement("details");

      let summaryItem = document.createElement("summary");

      summaryItem.innerHTML = `${bookItem.title}`;

      summaryItem.value = i;

      // create multiple p inside details
      let bookDetailAuthor = document.createElement("p");
      bookDetailAuthor.innerHTML = `Author: ${bookItem.authorName.firstName} ${bookItem.authorName.lastName}`;

      let bookDetailGenre = document.createElement("p");
      bookDetailGenre.innerHTML = `Genre: ${bookItem.genre}`;

      let bookDetailRating = document.createElement("p");
      bookDetailRating.innerHTML = `Rating: ${bookItem.rating}`;

      let bookDetailReview = document.createElement("p");
      bookDetailReview.innerHTML = `Review: ${bookItem.review}`;

      // create button for update
      let updateBtn = document.createElement("button");
      updateBtn.innerHTML = "update";
      updateBtn.setAttribute("class", "update");
      updateBtn.setAttribute("data-index", i);

      // create button for delete
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "delete";
      deleteBtn.setAttribute("class", "delete");
      deleteBtn.setAttribute("data-index", i); // chatGPT helped me figure out how to access the right book object in the array when my delete function worked incorrectly when deleting anything but the first book object... . By using data-index as a property of the button, it can be updated each time the button's function is carried out.

      // append p to summaryItem
      detailsItem.appendChild(bookDetailAuthor);
      detailsItem.appendChild(bookDetailGenre);
      detailsItem.appendChild(bookDetailRating);
      detailsItem.appendChild(bookDetailReview);

      // append buttons to summaryItem
      summaryItem.appendChild(updateBtn);
      summaryItem.appendChild(deleteBtn);

      // append summaryItem to detailsItem
      detailsItem.appendChild(summaryItem);

      // append detailsItem to div #allBooks
      document.getElementById("allBooks").appendChild(detailsItem);

      i = i + 1;
    });
    if (i > 0) {
      // only makes this list visible once there is at least one book for the user to select
      htmlSelect.style.visibility = "visible";
    }
  }
  // call function detailChange to allow user to update and delete details of a particular book
  detailChange();

  // call function deleteBook to allow user to update and delete details of a particular book
  deleteBook();
}

// --- DETAIL CHANGE --- //
function detailChange() {
  let allUpdateBtns = document.getElementsByClassName("update");

  // loop through every button of class "update" and add the appropriate eventListener
  for (let i = 0; i < allUpdateBtns.length; i++) {
    allUpdateBtns[i].addEventListener("click", function (event) {
      // use detailsItem.key to access appropriate object bookItem in bookList
      let bookIndex = event.target.getAttribute("data-index");

      let updatingThisBook = bookList[bookIndex];
      console.log(`bookIndex: ${bookIndex}`);

      // alert user of their action
      document.getElementById(
        "changesHeading"
      ).innerHTML = `You are updating the book ${event.target.parentNode.firstChild.textContent}.`;

      // hide book list for now
      document.getElementById("allBooks").style.visibility = "hidden";

      // change innerHTML of #mainButton to suit action
      document.getElementById("mainButton").innerHTML = "Confirm changes";

      // change eventListener of mainButton to confirmChanges()
      document.getElementById("mainButton").onclick =
        function confirmChanges() {
          updatingThisBook.title = document.getElementById("bookTitle").value;
          updatingThisBook.authorName.firstName =
            document.getElementById("authorFirstName").value;
          updatingThisBook.authorName.lastName =
            document.getElementById("authorLastName").value;
          updatingThisBook.genre = document.getElementById("genre").value;
          updatingThisBook.rating = document.querySelector(
            'input[name="rating"]:checked'
          ).value;
          updatingThisBook.review = document.getElementById("review").value;

          // update session storage!
          sessionStorage.setItem("books", JSON.stringify(bookList));

          // change innerHTML of #mainButton back to original
          document.getElementById("mainButton").innerHTML =
            "Add new book to list";

          // change onclick event listener back to addBook()
          document.getElementById("mainButton").onclick = "addBook()";

          // un-hide book list
          document.getElementById("allBooks").style.visibility = "visible";
        };
    });
  }
}

// --- DELETE BOOK --- //

function deleteBook() {
  let allDeleteBtns = document.getElementsByClassName("delete");
  // loop through every button of class "delete" and add the appropriate eventListener
  for (let i = 0; i < allDeleteBtns.length; i++) {
    allDeleteBtns[i].addEventListener("click", function (event) {
      let bookIndex = event.target.getAttribute("data-index");

      bookList = JSON.parse(sessionStorage.getItem("books"));
      console.log(`bookList: ${bookList}`);

      // .splice(start, deleteCount)
      bookList.splice(bookIndex, 1);

      // update session storage!
      sessionStorage.setItem("books", JSON.stringify(bookList));

      uponLoad();
    });
  }
}

// --- CONSTRUCTOR FUNCTION FOR BOOK OBJECTS --- //
function Book(title, firstName, lastName, genre, rating, review) {
  this.title = title;
  this.authorName = {
    firstName: firstName,
    lastName: lastName,
  };
  this.genre = genre;
  this.rating = rating;
  this.review = review;
}

/* every time the user clicks on the button "Add new book to list", this addBook() function is executed. The values of all the information input
into the appropriate fields will be passed as arguments to the newBook constructor function and assigned to the respective Book properties.
Because we want the information to be available across page loads, we add the updated array of books to sessionStorage  */

// addBook()
function addBook() {
  bookList = JSON.parse(sessionStorage.getItem("books"));

  // radio buttons are selected by name, not id
  let selectedRating = document.querySelector(
    'input[name="rating"]:checked'
  ).value;

  let newBook = new Book(
    document.getElementById("bookTitle").value,
    document.getElementById("authorFirstName").value,
    document.getElementById("authorLastName").value,
    document.getElementById("genre").value,
    selectedRating,
    document.getElementById("review").value
  );
  // add new book to the array of books
  bookList.push(newBook);
  // store updated array of books in sessionStorage
  sessionStorage.setItem("books", JSON.stringify(bookList));
}

// REFERENCES:

// Hyperiondev. 2021. L2T04 JSON - example of personObject.js. Retrieved on 25 July via dropbox
// Mandisa Macleod. 2023. L2T02 Event Handling. Retrieved on 25 July 2023 via dropbox.
// MDN Docs. 2023. Window: sessionStorage property. Retrieved on 25 July 2023 at https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
