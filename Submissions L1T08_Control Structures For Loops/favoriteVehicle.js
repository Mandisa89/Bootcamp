// 23 January 2023
// Mandisa Macleod

// L1T08 - Beginner Control Structures - For Loops

// Compulsory Task 2

let carList = ["VW Transporter", "Ford Ka", "Hyundai H1", "VW Polo", "Ford Figo"];
let numberOfListItems = carList.length;
let favouriteVehicle = "Hyundai H1";


// console.log(`There are ${numberOfListItems} cars in the car list.`);

for (let i = 0; i < numberOfListItems; i++) {

    if (favouriteVehicle === carList[i]) {
        console.log(`The ${carList[i]} IS my favourite vehicle.`);
    }
    else {
        console.log(`The ${carList[i]} is not my favourite vehicle.`)
    }

}







// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T08 - Beginner Control Structures - For Loops . (L1T08 reading material). 
// Retrieved 19 January 2023 via shared Dropbox. 


// Additional Material :

// W3C Schools.(2023). JavaScript Array length. Retrieved on 23 January 2023 at https://www.w3schools.com/jsref/jsref_length_array.asp