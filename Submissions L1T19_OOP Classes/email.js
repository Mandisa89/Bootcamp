// 5 March 2023
// Mandisa Macleod

// L1T19 - OOP II

// An Email Simulation

class Email {
  // class variables set to false by default

  constructor(emailContents, fromAddress) {
    // instance variables
    this.emailContents = emailContents;
    this.fromAddress = fromAddress;
    this.hasBeenRead = false;
    this.isSpam = false;
  }

  // create method called "markedAsRead" to change hasBeenRead to "true"
  markAsRead() {
    this.hasBeenRead = true;
  }
  // create method called "markAsSpam" to change isSpam to "true"
  markAsSpam() {
    this.isSpam = true;
  }
}

// create EMPTY array called "inbox" in which to store all instances of class Email
let inbox = [];

// function addEmail creates new instance of class Email and pushes it to array "inbox"
function addEmail(subjectLine, senderAdress) {
  // make new Email object with received input
  const aNewEmail = new Email(subjectLine, senderAdress);
  // push new Email to inbox
  inbox.push(aNewEmail);
}

// function to return number of emails in inbox
function getCount(emailsInInbox) {
  return emailsInInbox.length;
}

// function to retrieve an email by number, set hasBeenRead to true
function getEmail(array, emailNumber) {
  // return the content of the email with this number
  // remember that the index starts from 0, so adjust for that (emailNumber - 1 == index)
  const gottenEmail = array[emailNumber - 1];
  const gottenEmailContent = gottenEmail.emailContents;
  gottenEmail.markAsRead();
  return gottenEmailContent;
}

// function getUnread Emails should return a list of emails that haven't been read yet
function getUnreadEmails(array) {
  let allUnreadEmails = "UNREAD EMAILS:\n\n";

  // check the hasBeenRead value for each element of the array
  array.forEach((email, index) => {
    if (email.hasBeenRead == false) {
      allUnreadEmails =
        allUnreadEmails +
        ("Email #" +
          (index + 1) +
          "\nSender: " +
          email.fromAddress +
          "\nContent: " +
          email.emailContents +
          "\n\n");
    } else {
      allUnreadEmails = allUnreadEmails + "None";
    }
  });
  return allUnreadEmails;
}

// function getSpamEmails should return a list of emails that have been marked as spam
function getSpamEmails(array) {
  let allSpamEmails = "SPAM EMAILS:\n\n";

  array.forEach((email, index) => {
    if (email.isSpam == true) {
      allSpamEmails =
        allSpamEmails +
        ("Email #" +
          (index + 1) +
          "\nSender: " +
          email.fromAddress +
          "\nContent: " +
          email.emailContents +
          "\n\n");
    } else {
      allSpamEmails = allSpamEmails + "None";
    }
  });
  return allSpamEmails;
}

// function deleteEmail should allow the user to specify which email to delete from inbox
function deleteEmail(inboxArray, number) {
  // USE SPLICE // REF: MDN DOCS "Array.prototype.splice()"
  // USING DELETE LEAVES UNDEFINED HOLES, keeping the array.length the same

  // remove 1 element at the indicated number
  // remember array indexes start at 0, so adjust the given number by minus 1
  inboxArray.splice(number - 1, 1);

  // return the array
  return inboxArray;
}

// The Actual Programme //

let userChoice = "";

while (userChoice != "7") {
  // prettify how the inbox is displayed to the user
  let printedInbox = "INBOX:\n\n";

  if (inbox.length != 0) {
    inbox.forEach((email, index) => {
      printedInbox =
        printedInbox +
        ("Email #" +
          (index + 1) +
          "\nSender: " +
          email.fromAddress +
          "\nContent: " +
          email.emailContents +
          "\n\n");
    });
  }

  userChoice = prompt(
    "What would you like to do:\n0. View inbox\n 1. Read email\n 2. Mark spam\n 3. Send email\n 4. Delete email\n 5. View spam emails\n 6. View unread emails\n 7. quit?"
  );

  switch (userChoice) {
    //View Inbox
    case "0":
      // as per Johan JvR's feedback, I implemented the printing of the inbox through a loop
      // also as per his feedback, I thought of a better way to make the output more readable:
      // instead of using console.table, I added each relevant object property to a string, which is presented to the user via an alert

      if (inbox.length == 0) {
        alert(printedInbox + "Inbox is empty.");
      } else {
        alert(printedInbox);
      }
      break;

    // Read Email
    case "1":
      if (inbox.length == 0) {
        alert("Inbox is empty");
      } else {
        // print the inbox for reference
        console.log(printedInbox);

        // prompt which email they would like to read, by index
        const readThisNumber = prompt(
          "Please check the console for reference, and enter the number of the email you would like to read\nor enter // to return to main menu."
        );

        while (readThisNumber != "//") {
          if (
            !isNaN(Number(readThisNumber)) &&
            Number(readThisNumber) <= inbox.length
          ) {
            // call getEmail()
            const emailContentToRead = getEmail(inbox, readThisNumber);
            alert("Retrieved Email Content:\n\n" + emailContentToRead);
            break;
          } else {
            alert("This is not valid input.");
            break;
          }
        }
      }
      console.log("Returning to main menu.");
      break;

    // Mark Spam
    case "2":
      if (inbox.length == 0) {
        alert("Inbox is empty");
      } else {
        // print inbox for reference
        console.log(printedInbox);

        // prompt which email they would like to mark as spam, by number
        const thisEmailNumberIsSpam = prompt(
          "Please check the console for reference and enter the number of the email in the inbox that you would like to mark as spam\nor enter // to return to the main menu."
        );

        while (thisEmailNumberIsSpam != "//") {
          if (
            !isNaN(Number(thisEmailNumberIsSpam)) &&
            Number(thisEmailNumberIsSpam) <= inbox.length
          ) {
            // account for the fact that indexes start from 0 by subracting 1 from the user's number
            inbox[thisEmailNumberIsSpam - 1].markAsSpam();
            alert(
              "Email #" + thisEmailNumberIsSpam + " has been marked as spam."
            );
            break;
          } else {
            alert("Sorry, that input is incorrect.");
            break;
          }
        }
      }
      console.log("Returning to main menu.");
      break;

    // Send Email
    case "3":
      // prompt for user input regarding what email they would like to send to their own inbox
      const newEmailContent = prompt(
        "Please enter the message of your email: "
      );
      const fromAdress = prompt("Please enter the sender's email address: ");
      addEmail(newEmailContent, fromAdress);
      alert("Your email has been sent.");
      break;

    // Delete Email
    case "4":
      if (inbox.length == 0) {
        alert("Inbox is empty");
      } else {
        // console log the current inbox for reference
        console.log(printedInbox);

        // delete an email by number provided by user
        const numberOfEmailToDelete = prompt(
          "Please reference the console and enter the number of the email you would like to delete.\nOtherwise, enter // to return to the main menu."
        );

        // if a real number was entered that is also within the range of the amount of emails in inbox
        while (numberOfEmailToDelete != "//") {
          if (
            !isNaN(Number(numberOfEmailToDelete)) &&
            Number(numberOfEmailToDelete) <= inbox.length
          ) {
            // delete the email specified by the user
            deleteEmail(inbox, numberOfEmailToDelete);

            alert("Email #" + numberOfEmailToDelete + " has been deleted.");
            break;
          } else {
            alert("Oops - not a valid input");
            break;
          }
        }
      }
      break;

    // View Spam Mail
    case "5":
      if (inbox.length == 0) {
        alert("Inbox is empty");
      } else {
        // call function getSpamEmails
        let spamEmails = getSpamEmails(inbox);
        alert(spamEmails);
      }
      break;

    // View Unread Emails
    case "6":
      if (inbox.length == 0) {
        alert("Inbox is empty");
      } else {
        // call function getUnreadEmails
        let unreadEmails = getUnreadEmails(inbox);
        alert("\n" + unreadEmails);
      }
      break;

    // Exit Menu
    case "7":
      alert("Goodbye");
      break;

    // Default
    default:
      alert("Oops - incorrect input");
      break;
  }
}

// REFERENCES:

// Hyperiondev.2018. L1T19 - OOP II. Retrieved from Dropbox folder
// Polesny, Ondrej.(FreecodeCamp).2020. "JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods" Retrieved on 7 March at https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
// MDN DOCS.2023. "Console.table". Retrieved on 7 March 2023 at https://developer.mozilla.org/en-US/docs/Web/API/console/table
// MDN DOCS.2023. "Array.prototype.concat()". Retrieved on 12 March 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// MDN DOCS.2023. "Array.prototype.splice()". Retrieved on 12 March 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Amalsi,Ferenc.2020. How To Format JSON in JavaScript. Retrieved on 14 March at https://www.webtips.dev/webtips/javascript/how-to-format-json-in-javascript
// MDN DOCS.2023. JSON.stringify(). Retrieved on 14 March 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// I used ChatGPT to discuss errors I was getting when debugging the function calls in a programm I wrote
// before integrating it into the existing code. I commented out the existing if-else if tree to test my code without prompt throwing errors
// When debugging, the node.js environment for some reason kept calling the function addEmail() all by itself.
// I ended it up inboxes of 16 emails and more, despite just making ONE function call in my programme
// It all works great once used in a web browser though.
