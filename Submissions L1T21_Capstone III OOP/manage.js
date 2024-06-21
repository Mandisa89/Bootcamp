// 18 March 2023
// Mandisa Macleod

// L1T21 - Object Oriented Programming - Capstone Project III

// ---------------------------------- //
//   WELCOME TO THE PERSONELL PORTAL  //
//               &                    //
//        SALARY CALCULATOR           //
// ---------------------------------- //

// ------------------- //
//    FUNCTIONS       //
// ----------------- //

// Function to make output of list of employees easy to read

// Print single employee info
function printOne(employee) {
  // *TODO - Future improvement: convert undefined and 0 values to N/A where appropriate, for readability.
  return (
    "\nName: " +
    employee.name +
    "\nType of employee: " +
    employee.employeeType +
    "\nMonthly Salary: " +
    employee.monthlySalary +
    "ZAR" +
    "\nHourly wage: " +
    employee.hourlyWage +
    "ZAR" +
    "\nHours logged: " +
    employee.hoursLogged +
    "\nUnits Sold: " +
    employee.unitsSold +
    "\nExceeded this month's sales target: " +
    employee.exceededSalesTarget +
    "\n\n"
  );
}

// Print all employees' info
function printList(arrayOfEmployees) {
  let printedAllEmployees = "EMPLOYEE LIST \n\n";

  arrayOfEmployees.forEach((employee, index) => {
    printedAllEmployees =
      printedAllEmployees +
      "Employee #" +
      (index + 1) +
      "\nName: " +
      employee.name +
      "\nType of employee: " +
      employee.employeeType +
      "\nUnits Sold: " +
      employee.unitsSold +
      "\nExceeded this month's sales target: " +
      employee.exceededSalesTarget +
      "\n" +
      employee.earns() +
      "\n\n";
  });
  return printedAllEmployees;
}

// ------------------------------------ //
//  OBJECT CLASSES OF EMPLOYEE TYPES   //
// ---------------------------------- //

// --------------------------------- //
// --- Salaried employee type ----- //
// ------------------------------- //

// All other employee types will be extended from this one
/**
 *? Another way to do it would have been to create a BASE EMPLOYEE and
 *? extend all three other classes from that */

class SalariedEmployee {
  constructor(name, monthlySalary, unitsSold) {
    // instance properties
    this.name = name;
    this.monthlySalary = monthlySalary;
    this.unitsSold = unitsSold;
    this.employeeType = "salaried employee";
    this.exceededSalesTarget = false;
  }

  // method to change name
  changeName(newName) {
    this.name = newName;
  }

  // method to display payment due, with and without bonus
  earns() {
    let payment = this.monthlySalary;
    console.log("Payment: ", payment);

    // if sales target has been exceeded, calculate payment plus bonus
    if (this.exceededSalesTarget == true) {
      // payment = monthly payment + 10%
      payment = payment + payment / 10;
      console.log(payment);

      // return string
      return (
        "Payment formula = Monthly salary + 10% bonus\nPayment calculation = " +
        this.monthlySalary +
        " + (" +
        this.monthlySalary +
        "/ 10)\n\n" +
        "==>> " +
        this.name +
        " earns " +
        payment +
        "ZAR this month."
      );
    }
    // otherwise, just output the base payment
    else {
      console.log("Payment without bonus: ", payment);
      return (
        "Payment formula = Monthly salary + potential bonus\nPayment calculation = " +
        this.monthlySalary +
        " + (No bonus)\n\n" +
        "==>> " +
        this.name +
        " earns " +
        payment +
        "ZAR this month."
      );
    }
  }

  // prints out how many units have been sold
  sold() {
    return `${this.name} has sold a total of ${this.unitsSold} units.`;
  }

  // method to change exceededSalesTarget to true
  getsBonus() {
    this.exceededSalesTarget = true;
    return `${this.name} exceeded the sales target this month and qualifies for a bonus.`;
  }

  // print what type of employee this employee is
  typeOfEmployee() {
    return `${this.name} is a(n) ${this.employeeType}.`;
  }
}

// ----------------------------------- //
// --- Employee paid by the hour ---- //
// --------------------------------- //

class HourlyPaidEmployee extends SalariedEmployee {
  constructor(name, hourlyWage, hoursLogged, unitsSold) {
    super(name);

    this.unitsSold = unitsSold;
    this.hourlyWage = hourlyWage;
    // replace the employee type accordingly
    this.employeeType = "paid by the hour";
    this.hoursLogged = hoursLogged;
  }

  // method to display hourly pay, overwriting the SalariedEmployee's method earns()
  earns() {
    let payment = this.hourlyWage;

    if (this.exceededSalesTarget == true) {
      // payment is the 150% of the hours logged * hourly wage
      payment = this.hoursLogged * (payment + payment / 2);

      return (
        "Payment formula = Hours logged * (hourly wage + 50% bonus)\nPayment calculation = " +
        this.hoursLogged +
        " * (" +
        this.hourlyWage +
        " + (" +
        this.hourlyWage +
        "ZAR / 2))\n\n" +
        "==>> " +
        this.name +
        " earns " +
        payment +
        "ZAR this month."
      );
    } else {
      // payment is the usual hours * hourly wage
      payment = this.hoursLogged * payment;

      return (
        "Payment formula = Hours logged * hourly wage\nPayment calculation = " +
        this.hoursLogged +
        " * " +
        this.hourlyWage +
        "ZAR + (No bonus)\n\n" +
        "==>> " +
        this.name +
        " earns " +
        payment +
        "ZAR this month."
      );
    }
  }

  // update hours logged
  updateHoursLogged(hours) {
    this.hoursLogged = hours;
  }
}

// ---------------------------------------------------- //
// --- Hybrid employee with salary and overtime pay -- //
// -------------------------------------------------- //

class HybridEmployee extends SalariedEmployee {
  constructor(name, monthlySalary, hourlyWage, hoursLogged, unitsSold) {
    super(name, monthlySalary, unitsSold);

    this.hourlyWage = hourlyWage;
    // replace the employee type accordingly
    this.employeeType = "hybrid employee";
    this.hoursLogged = hoursLogged;
  }

  // method to display hourly pay, overwriting the SalariedEmployee's method
  earns() {
    let payment = this.monthlySalary + this.hourlyWage * this.hoursLogged;

    if (this.exceededSalesTarget == true) {
      payment =
        this.monthlySalary +
        (this.hourlyWage + (this.hourlyWage / 5) * this.hoursLogged);

      return (
        "Payment formula = Monthly Salary + ((hourly wage + 20% bonus) * hours logged)\nPayment calculation = " +
        this.monthlySalary +
        "((" +
        this.hourlyWage +
        " + " +
        this.hourlyWage / 5 +
        ") * " +
        this.hoursLogged +
        ")\n\n" +
        "==>> " +
        this.name +
        " earns " +
        payment +
        "ZAR this month."
      );
    } else {
      // payment is the monthly salary + any overtime
      return (
        "Payment formula = Monthly Salary + (hourly wage * hours logged)\nPayment calculation = " +
        this.monthlySalary +
        " + (" +
        this.hourlyWage +
        " * " +
        this.hoursLogged +
        ")\n(No Bonus)\n\n" +
        "==>> " +
        this.name +
        " earns " +
        payment +
        "ZAR this month."
      );
    }
  }

  updateHoursLogged(hours) {
    this.hoursLogged = hours;
  }
}

// --------------------------- //
// CREATE A LIST OF EMPLOYEES //
// ------------------------- //

// initialize an array of employees
let allEmployees = [];

// two instances of salaried employees
// (name / monthly salary / units sold)
const jennaWayne = new SalariedEmployee("Jenna Wayne", 15000, 5);
const thembaNonyana = new SalariedEmployee("Themba Nonyana", 17000, 6);

// two instances of employees paid by the hour
// (name / hourly wage / hours logged / units sold)
const dianeLecluse = new HourlyPaidEmployee("Diane Lecluse", 300, 99, 7);
const maryMcdonaled = new HourlyPaidEmployee("Mary McDonald", 350, 100, 8);

// two instances of hybrid employees
// (name / monthly salary / hourly rate / hours logged / units sold)
const bobbyMills = new HybridEmployee("Bobby Mills", 1500, 50, 5, 9);
const xoliShabangu = new HybridEmployee("Xoli Shabangu", 2600, 50, 4, 10);

// push all existing employees to the array
allEmployees.push(
  jennaWayne,
  thembaNonyana,
  dianeLecluse,
  maryMcdonaled,
  bobbyMills,
  xoliShabangu
);

// define a sales target
// if  sales target is exceeded, employee qualifies for a bonus
const salesTarget = 10;

// ------------------------------------- //
// GET USER INPUT AND RUN THE PROGRAMME //
// ----------------------------------- //

// use alerts to communicate with the user
let userInput = "";

while (userInput != "4") {
  userInput = prompt(
    "WELCOME TO THE PERSONNEL PORTAL!\n\nWhat would you like to do?\n\n  1. View list of employees\n  2. Update an emloyee's information\n  3. Calculate an employee's pay for the current month\n  4. Quit\n\n"
  );

  switch (userInput) {
    // (1) VIEW LIST OF EMPLOYEES AND THEIR INFORMATION
    case "1":
      // print list of all employees to console

      alert(printList(allEmployees));
      break;

    // (2) UPDATE EMPLOYEE INFORMATION
    case "2":
      // print list of employees to console as reference
      console.log(printList(allEmployees));

      let updateThisEmployeeNumber = "";
      // which employee's details would you like to update?
      updateThisEmployeeNumber = prompt(
        "UPDATE EMPLOYEE INFORMATION\n\nPlease refer to the console and input the employee's Employee Code\nOR\nEnter // to return to the main menu."
      );

      while (updateThisEmployeeNumber != "//") {
        // yields boolean value of true or false
        let updateThisEmployeeNumberIsAValidNumber =
          !isNaN(Number(updateThisEmployeeNumber)) &&
          Number(updateThisEmployeeNumber) <= allEmployees.length;
        console.log(
          "updateThisEmployeeNumberIsAValidNumber = ",
          updateThisEmployeeNumberIsAValidNumber
        );

        if (updateThisEmployeeNumberIsAValidNumber) {
          // turn the string user input into a real number
          Number(updateThisEmployeeNumber);
          console.log(
            "Number(updateThisEmployeeNumber)",
            updateThisEmployeeNumber
          );

          // access the employee of that number in the list of all employees
          // adjust number given by -1 to access the correct index
          let updateThisEmployee = allEmployees[updateThisEmployeeNumber - 1];

          // next prompt: what particulars to update
          let infoToUpdate = prompt(
            "You have selected " +
              updateThisEmployee.name +
              ".\nWhat information would you like to update?\n\n  1. Employee's Name\n  2. Employee's wage/rate\n  3. Employee's hours logged\n  4. Units sold\n  5. Return to main menu"
          );

          while (infoToUpdate != "5") {
            //switch statement of particulars to update
            switch (infoToUpdate) {
              // name
              case "1":
                let newName = prompt(
                  "CHANGE NAME\n\nPlease fill in the new name:"
                );
                updateThisEmployee.changeName(newName);
                alert(
                  "UPDATED DETAILS:\n" +
                    printOne(updateThisEmployee) +
                    "Returning to main menu."
                );
                break;

              // wage / rate
              case "2":
                // if employee is salaried
                if (updateThisEmployee.employeeType === "salaried employee") {
                  let newSalary = Number;
                  // defensive programming: while loop while Number(newSalary) isNaN?
                  while (isNaN(Number(newSalary))) {
                    newSalary = prompt(
                      "UPDATE MONTHLY SALARY\n\n" +
                        updateThisEmployee.name +
                        "'s Current Salary: " +
                        updateThisEmployee.monthlySalary +
                        "ZAR\n" +
                        updateThisEmployee.name +
                        "'s New Salary: "
                    );
                  }
                  updateThisEmployee.monthlySalary = Number(newSalary);
                  alert(
                    "UPDATED DETAILS:\n" +
                      printOne(updateThisEmployee) +
                      "Returning to main menu."
                  );
                } else if (
                  updateThisEmployee.employeeType === "paid by the hour"
                ) {
                  let newRate = Number;

                  while (isNaN(Number(newRate))) {
                    newRate = prompt(
                      "UPDATE HOURLY RATE\n\n" +
                        updateThisEmployee.name +
                        "'s Current Hourly Rate: " +
                        updateThisEmployee.hourlyWage +
                        "ZAR\n" +
                        updateThisEmployee.name +
                        "'s New Hourly Rate: "
                    );
                  }
                  updateThisEmployee.hourlyWage = Number(newRate);
                  alert(
                    "UPDATED DETAILS:\n" +
                      printOne(updateThisEmployee) +
                      "Returning to main menu."
                  );
                } else if (
                  updateThisEmployee.employeeType === "hybrid employee"
                ) {
                  let newSalary = Number;

                  while (isNaN(Number(newSalary))) {
                    newSalary = prompt(
                      "UPDATE MONTHLY SALARY\n\n" +
                        updateThisEmployee.name +
                        "'s Current Salary: " +
                        updateThisEmployee.monthlySalary +
                        "ZAR\n" +
                        updateThisEmployee.name +
                        "'s New Salary: "
                    );
                  }

                  let newRate = Number;

                  while (isNaN(Number(newRate))) {
                    newRate = prompt(
                      "UPDATE HOURLY RATE\n\n" +
                        updateThisEmployee.name +
                        "'s Current Hourly Rate: " +
                        updateThisEmployee.hourlyWage +
                        "ZAR\n" +
                        updateThisEmployee.name +
                        "'s New Hourly Rate: "
                    );
                  }
                  updateThisEmployee.monthlySalary = Number(newSalary);
                  updateThisEmployee.hourlyWage = Number(newRate);
                  alert(
                    "UPDATED DETAILS:\n" +
                      printOne(updateThisEmployee) +
                      "Returning to main menu."
                  );
                } else {
                  alert("Something has gone wrong.");
                }
                break;

              // hours logged
              case "3":
                // if the chosen employee is a salaried employee, exit this branch
                if (updateThisEmployee.employeeType == "salaried employee") {
                  alert(
                    updateThisEmployee.name +
                      " is a salaried employee and is not compensated for overtime."
                  );
                  break;
                }

                let addTheseHours = Number;

                while (isNaN(Number(addTheseHours))) {
                  addTheseHours = prompt("Please add new hours logged:");
                }

                // update all the hours logged
                updateThisEmployee.hoursLogged =
                  updateThisEmployee.hoursLogged + addTheseHours;

                alert(
                  "UPDATED DETAILS:\n" +
                    printOne(updateThisEmployee) +
                    "Returning to main menu."
                );
                break;

              // update units sold
              case "4":
                let moreUnits = prompt("Please add additonal units sold:");

                // convert moreUnits into type Number
                moreUnits = Number(moreUnits);

                // update the number of units sold
                updateThisEmployee.unitsSold =
                  updateThisEmployee.unitsSold + moreUnits;

                if (updateThisEmployee.unitsSold >= salesTarget) {
                  alert(
                    updateThisEmployee.sold() +
                      "\n" +
                      updateThisEmployee.getsBonus()
                  );
                }

                alert(updateThisEmployee.sold());
                break;

              // return to main menu
              case "5":
                console.log("Returning to main menu");
                break;

              // display error message
              default:
                "Sorry, something has gone wrong";
                break;
            }
            break;
          }
          break;
        }
      }
      break;

    // CALCULATE EMPLOYEE'S PAY
    case "3":
      // print list of employees for reference
      console.log(printList(allEmployees));

      let payThisEmployeeCode = Number;

      while (isNaN(Number(payThisEmployeeCode))) {
        // who do you want to pay?
        payThisEmployeeCode = prompt(
          "Who would you like to pay?\n\nPlease refer to the console and input the Emloyee Code of the person you would like to pay:"
        );
      }

      let payThisPerson = allEmployees[payThisEmployeeCode - 1];

      // check it's accessing the correct employee
      console.log("payThisPerson = " + printOne(payThisPerson));

      alert(payThisPerson.earns());

      break;

    // EXIT PROGRAMME
    case "4":
      console.log("Goodbye");
      break;

    // DEFAULT
    default:
      "Sorry, something has gone wrong.";
      break;
  }
}

// REFERENCES:

// Hyperiondev.2021. L1T21 - CAPSTONE PROJECT III. Retrieved from Dropbox folder
// Indeed.2023. Sales Targets: What they are and how to use them. Retrieved on 27 March 2023 at https://www.indeed.com/career-advice/career-development/sale-targets
