// Mandisa Macleod
// 25th July 2023
// L2T04 Part 2

// ARRAY OF ALL INCOME ENTRIES
let allIncomeEntries = [];
// ARRAY OF ALL EXPENSE ENTRIES
let allExpenseEntries = [];
// INITIALIZE SAVINGS TO 0
let savings = 0;
// INITIALIZE DISPOSABLE INCOME TO 0
let disposableIncome = 0;
// ARRAY OF ALL SAVINGS
let allSavings = [];

// ---------------------------------------------------------------------- //
// -------------- CONSTRUCTOR FUNCTION FOR INCOME OBJECTS --------------- //
// ---------------------------------------------------------------------- //

// function Income(string, number, boolean)
function Income(incomeType, amountNumber, isRecurring) {
  this.incomeType = incomeType;
  this.amountNumber = amountNumber;
  this.isRecurring = isRecurring;
}

// FIVE INCOME OBJECTS

// salary
let salary = new Income("salary", 10000, true);

// rental property
let rentalIncome = new Income("rental income", 5000, true);

// freelance graphic design
let graphicDesign = new Income("graphic design", 500, false);

// gift
let gift = new Income("gift", 250, true);

// house-sitting
let houseSitting = new Income("house sitting", 300, false);

// push income entries to array of income entries
allIncomeEntries.push(salary, rentalIncome, graphicDesign, gift, houseSitting);

// ---------------------------------------------------------------------- //
// -------------- CONSTRUCTOR FUNCTION FOR EXPENSE OBJECTS -------------- //
// ---------------------------------------------------------------------- //

// function Expense(string, number, boolean)
function Expense(expenseType, amountNumber, isRecurring) {
  this.expenseType = expenseType;
  this.amountNumber = amountNumber;
  this.isRecurring = isRecurring;
}

// FIVE EXPENSE OBJECTS

// home loan
let homeLoan = new Expense("home loan", 5000, true);

// medical aid
let medicalAid = new Expense("medical aid", 5000, true);

// school fees
let schoolFees = new Expense("school fees", 4000, true);

// groceries
let groceries = new Expense("groceries", 1200, false);

// fuel
let fuel = new Expense("fuel", 350, false);

// PUSH INCOME TYPES TO ARRAY OF ALL EXPENSE ENTRIES
allExpenseEntries.push(homeLoan, medicalAid, schoolFees, groceries, fuel);

// ---------------------------------------------------------------------- //
// ------------------- EXTRACT INCOME DATA TO DISPLAY ----------- //
// ---------------------------------------------------------------------- //

let incomeCollectionToDisplay = "";

function showIncomeNameAndAmount(incomeArray, stringCollection) {
  incomeArray.forEach(function (item) {
    let itemName = item.incomeType;
    console.log();
    let itemAmount = item.amountNumber;
    console.log();

    let nameAndAmount = `${itemName}: ZAR${itemAmount}\n`;
    stringCollection = stringCollection + nameAndAmount;
  });
  return stringCollection;
}

// ---------------------------------------------------------------------- //
// ----------------------- INCOME ENTRY PROMPT ---------------------------//
// ---------------------------------------------------------------------- //

function addIncomeEntry() {
  // access latest array of income entries
  allIncomeEntries = JSON.parse(sessionStorage.getItem("allIncomeEntries"));

  // DISPLAY INCOME TYPES AND LET USER ADD ANOTHER ENTRY

  let incomeType;
  let amountNumber;
  let isRecurringIncome;

  let currentIncome = showIncomeNameAndAmount(
    allIncomeEntries,
    incomeCollectionToDisplay
  );
  incomeType = prompt(
    "// CURRENT INCOME ENTRIES//\n\n" +
      currentIncome +
      "\nADD NEW INCOME ENTRY //\n\nName the income:"
  );

  // CHECKS
  console.log(`Income Type: ${incomeType}`);

  // request valid input for amount received
  do {
    amountNumber = Number(
      prompt("Input the number of the amount of income received:\n\nZAR")
    );

    if (isNaN(amountNumber)) {
      alert("That is not a number. Please try again.");
    } else {
      break;
    }
  } while (isNaN(amountNumber));

  // CHECKS
  console.log(`Amount of Income: ZAR${amountNumber}`);

  // request valid input for isRecurringIncome

  let validEntry = false;

  do {
    let isRecurringIncomeAnswer = prompt(
      "Is this a recurring means of income?\n\nEnter Y or N"
    );

    isRecurringIncomeAnswer = isRecurringIncomeAnswer.toLowerCase();

    switch (isRecurringIncomeAnswer) {
      case "y":
      case "yes":
        isRecurringIncome = true;
        validEntry = true;
        break;
      case "n":
      case "no":
        isRecurringIncome = false;
        validEntry = true;
        break;
      default:
        alert("Not a valid entry for isRecurring");
        validEntry = false;
        break;
    }
  } while (!validEntry);

  // CHECKS
  console.log(`Recurring income: ${isRecurringIncome}`);

  // use user-input to create new income object entry
  let aNewIncome = new Income(incomeType, amountNumber, isRecurringIncome);

  // push new income entry to array of income entries
  allIncomeEntries.push(aNewIncome);

  // update session storage on allExpenseEntries
  sessionStorage.setItem("allIncomeEntries", JSON.stringify(allIncomeEntries));

  // CHECKS
  console.log(`aNewIncome:`, aNewIncome);
  console.log(`allIncomeEntries:`, allIncomeEntries);

  displayDisposableIncome(savings);
}

// ---------------------------------------------------------------------- //
// ---------------------- EXTRACT EXPENSE DATA TO DISPLAY --------------- //
// ---------------------------------------------------------------------- //

let expenseCollectionToDisplay = "";

function showExpenseNameAndAmount(expenseArray, stringCollection) {
  expenseArray.forEach(function (item) {
    let itemName = item.expenseType;
    console.log();
    let itemAmount = item.amountNumber;
    console.log();

    let nameAndAmount = `${itemName}: ZAR${itemAmount}\n`;
    stringCollection = stringCollection + nameAndAmount;
  });
  return stringCollection;
}

// ---------------------------------------------------------------------- //
// ------------------------- EXPENSE ENTRY PROMPT ------------------------//
// ---------------------------------------------------------------------- //

function addExpenseEntry() {
  // update allExpenseEntries by calling sessionStorage
  allExpenseEntries = JSON.parse(sessionStorage.getItem("allExpenseEntries"));

  // DISPLAY INCOME TYPES AND LET USER ADD ANOTHER ENTRY
  let expenseType;
  let expenseAmount;
  let isRecurringExpense;

  let currentExpenses = showExpenseNameAndAmount(
    allExpenseEntries,
    expenseCollectionToDisplay
  );

  expenseType = prompt(
    "// CURRENT EXPENSE ENTRIES\n" +
      currentExpenses +
      "\n// NEW EXPENSE ENTRY //\nName the expense:"
  );

  // CHECKS
  console.log(`Expense Type: ${expenseType}`);

  // request valid input for expenseAmount
  do {
    expenseAmount = Number(
      prompt("Input the number of the amount of expense:\n\nZAR")
    );

    if (isNaN(expenseAmount)) {
      alert("That is not a number. Please try again.");
    } else {
      break;
    }
  } while (isNaN(expenseAmount));

  // CHECKS
  console.log(`Amount of Expense: ZAR${expenseAmount}`);

  // request valid input for isRecurringExpense
  let validRecEntry = false;

  do {
    let isRecurringAnswer = prompt(
      "Is this a recurring means of income?\n\nEnter Y or N"
    );

    // accept both Y and y as input, and convert input to lowercase
    isRecurringAnswer = isRecurringAnswer.toLowerCase();

    switch (isRecurringAnswer) {
      case "y":
      case "yes":
        isRecurringExpense = true;
        validRecEntry = true;
        break;
      case "n":
      case "no":
        isRecurringExpense = false;
        validRecEntry = true;
        break;
      default:
        alert("Not a valid entry for isRecurring");
        validRecEntry = false;
        break;
    }
  } while (!validRecEntry);

  // CHECKS
  console.log(`Recurring expense: ${isRecurringExpense}`);

  // use user-input to create new expense object
  let aNewExpense = new Expense(expenseType, expenseAmount, isRecurringExpense);

  // CHECKS
  console.log(`aNewExpense:`, aNewExpense);

  // push new expense to array of all expense entries
  allExpenseEntries.push(aNewExpense);

  // update session storage on allExpenseEntries
  sessionStorage.setItem(
    "allExpenseEntries",
    JSON.stringify(allExpenseEntries)
  );

  displayDisposableIncome(savings);
}

// ---------------------------------------------------------------------- //
// -----------------------  ONLOAD FUNCTION ----------------------------- //
// ---------------------------------------------------------------------- //

function onload() {
  // check if page has never been loaded before by checking if key "hasPageLoadedBefore" exists
  if (sessionStorage.getItem("hasPageLoadedBefore") === null) {
    // save stringified empty array of books in sessionStorage with key "books"
    sessionStorage.setItem(
      "allIncomeEntries",
      JSON.stringify(allIncomeEntries)
    );
    sessionStorage.setItem(
      "allExpenseEntries",
      JSON.stringify(allExpenseEntries)
    );
    sessionStorage.setItem(
      "disposableIncome",
      JSON.stringify(disposableIncome)
    );
    sessionStorage.setItem("allSavings", JSON.stringify(allSavings));

    // set hasPageLoadedBefore to true now that the page has been loaded once
    sessionStorage.setItem("hasPageLoadedBefore", true);
  } else {
    allIncomeEntries = JSON.parse(sessionStorage.getItem("allIncomeEntries"));
    allExpenseEntries = JSON.parse(sessionStorage.getItem("allExpenseEntries"));
    disposableIncome = JSON.parse(sessionStorage.getItem("disposableIncome"));
    allSavings = JSON.parse(sessionStorage.getItem("allSavings"));
  }
}

// ---------------------------------------------------------------------- //
// ---------- FUNCTION TO CALCULATE SUM OF ALL CERTAIN ENTRIES ---------- //
// ---------------------------------------------------------------------- //

function calculateSumAmount(array) {
  let sum = 0;
  array.forEach(function (entry) {
    sum = sum + entry.amountNumber;
    console.log(`sum: ${sum}`);
  });
  return sum;
}

// ---------------------------------------------------------------------- //
// -------------------- PROMPT FOR SAVINGS CONTRIBUTION ----------------- //
// ---------------------------------------------------------------------- //

function addToSavings() {
  disposableIncome = JSON.parse(sessionStorage.getItem("disposableIncome"));
  do {
    savings = Number(prompt("Contribution towards your savings:"));
    if (isNaN(savings)) {
      alert("That is not a valid number. Please try again.");
    } else {
      break;
    }
  } while (isNaN(savings));

  // CHECKS
  console.log(`Savings: ZAR${savings}`);

  // add new savings entry to allSavings array
  allSavings.push(savings);

  disposableIncome = disposableIncome - savings;
  sessionStorage.setItem("allSavings", JSON.stringify(allSavings));
  sessionStorage.setItem("disposableIncome", JSON.stringify(disposableIncome));
}

// ---------------------------------------------------------------------- //
// --------------- FUNCTION TO CALCULATE DISPOSABLE INCOME -------------- //
// ---------------------------------------------------------------------- //

function displayDisposableIncome(savings) {
  disposableIncome = JSON.parse(sessionStorage.getItem("disposableIncome"));

  let sumOfIncomes = calculateSumAmount(allIncomeEntries);
  let sumOfExpenses = calculateSumAmount(allExpenseEntries);

  disposableIncome = sumOfIncomes - sumOfExpenses - savings;
  console.log(
    `disposableIncome: ZAR${sumOfIncomes} - ZAR${sumOfExpenses} - ZAR${savings} = ZAR${disposableIncome}`
  );

  sessionStorage.setItem("disposableIncome", JSON.stringify(disposableIncome));

  // display disposable income
  alert(`Disposable Income: ZAR${disposableIncome}`);

  // call addToSavings() whenever dispensable Income is displayed to entice user to save as a reflex
  addToSavings();

  // display disposable income
  alert(`Disposable Income: ZAR${disposableIncome}`);
  console.log(`sumSavings:`, addAllSavings(allSavings));
  return disposableIncome;
}

// ---------------------------------------------------------------------- //
// -------------------- EXTRA FEATURE: SAVINGS BALANCE ----------------- //
// ---------------------------------------------------------------------- //

function addAllSavings(array) {
  // INITIALIZE SAVINGS TO 0
  let sumSavings = 0;
  array.forEach(function (savedAmount) {
    sumSavings = sumSavings + Number(savedAmount);
  });
  return sumSavings;
}

// ---------------------------------------------------------------------- //
// -------------------- LINK BUTTON TO SAVINGS BALANCE ------------------ //
// ---------------------------------------------------------------------- //
function showSavingsBalance() {
  alert(`Savings Balance: ZAR${addAllSavings(allSavings)}`);
}

// REFERENCES

// Macleod, Mandisa. 2023. Hyperiondev Task L1T29 - Closures and Arrow Functions. Retrieved on 11 August 2023 via Dropbox
// Macleod, Mandisa. 2023. Hyperiondev Task L2T04 - JSON (Task 1). Retrieved on 11 August 2023 via Dropbox
// W3C Schools. 2023. Javascript String toLowerCase(). Retrieved on 11 August 2023 at https://www.w3schools.com/jsref/jsref_tolowercase.asp
// WebDevSimplified [YOUTUBE]. 2019. JavaScript Cookies vs Local Storage vs Session Storage. Retrieved on 10 August 2023 at https://www.youtube.com/watch?v=GihQAC1I39Q&t=1s&ab_channel=WebDevSimplified
