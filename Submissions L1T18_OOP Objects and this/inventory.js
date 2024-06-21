// 15 February 2023
// Mandisa Macleod

// WD L1T18 - Introduction to OOP I - Objects and _this_



// create object class Shoes with object constructor function
// convention is to capitalize class names
class Shoes {

    // object constructor function within class, taking four parameters
    constructor(name, productCode, quantity, valuePerItem) {

    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
    }

}

// CREATE FIVE INSTANCES OF SHOES //
const shoe1 = new Shoes("Adidas", "#923", 50, 1200);
const shoe2 = new Shoes("Salomons", "#234", 70, 2300);
const shoe3 = new Shoes("Birkenstock", "#445", 67, 2100);
const shoe4 = new Shoes("Aldo", "#654", 54, 2000);
const shoe5 = new Shoes("Veldskoen", "#856", 43, 1850);

// Commented out check if it worked by example of shoe1
// console.log("shoe1: " , JSON.stringify(shoe1, null, 2));



// CREATE NEW ARRAY //
const shoeArray = [];

// Push all instances of Shoes to the array
shoeArray.push(shoe1, shoe2, shoe3, shoe4, shoe5);

// Commented out check if push worked
// console.log("shoeArray after push = " , JSON.stringify(shoeArray, null, 2));

// Commented out check first item is correct
// console.log("Item 1 in shoeArray = ", JSON.stringify(shoeArray[0], null, 2)); 




// FUNCTION TO FIND SHOE BY NAME //

function findShoeByName(list, shoeName) {

    // Reference: MDN Docs on array.find
    // Using .find, evaluate the property "name" of each element of the array (which are all objects)
    // curly braces let you access a property of an element (works for name, productCode, etc)
    // where the element.name is == shoeName, return the whole element (which is an object)
    
    // store result (the element in the array, the property of which satisfies the condition) in variable "result"
    const result = list.find(({name}) => name === shoeName);

    // Another way to write it: 
    // const result = list.find((listItem) => listItem.name == shoeName)
        

    // My brother advised me to always return the same data type (e.g not an object here, and a string there)
    // I have chosen to return a string for each case

    // If shoe is not in inventory
    if (result == undefined) {

        return "This shoe is not present in inventory.";
    }
    // return the object that meets the condition, as string to keep returned data type consistent
    else {
       
        // REF: W3C Schools "JSON.stringify()" (2023)

        return result;
        }
    }



    // FUNCTION TO FIND SHOE WITH LOWEST VALUEPERITEM //

    function findCheapestShoe(list) {

        // REF: StackOverflow "Compare JavaScript Array of Objects to Get Min / Max", (2020)
        // This answer below made the most sense to me
        // use spread operator (...) to pass .map the elements of the array, instead of passing the array itself
        // const result = Math.min(...list.map((item) => item.valuePerItem));
        const lowestValuePerItem = Math.min(...list.map((listItem) => listItem.valuePerItem));
        const result = list.find((listItem) => listItem.valuePerItem === lowestValuePerItem);

        // return a string of the object
        return "The cheapest shoe is: " + JSON.stringify(result.name);
    }

   


    // FUNCTION TO FIND SHOE WITH HIGHEST VALUEPERITEM //

    function findMostExpensiveShoe(list) {

        //const result = list.find((listItem) => listItem.valuePerItem == Math.max(listItem.valuePerItem));
        const highestValuePerItem = Math.max(...list.map((listItem) => listItem.valuePerItem));
        const result = list.find((listItem) => listItem.valuePerItem === highestValuePerItem);

        // return the object as a string
        return "The most expensive shoe is: " + JSON.stringify(result.name);
    }


    // FUNCTION TO ALTER ANY ASPECT OF AN INSTANCE OF THIS CLASS

    function changePropertyOfObject(instanceOfShoeClass, propertyToChange, newValue) {

        // this is accidentally creating a new property with value of newValue
        instanceOfShoeClass[propertyToChange] = newValue;

        return instanceOfShoeClass;

    }


    // FUNCTION TO ORDER ALL OF THE OBJECTS IN ASCENDING ORDER (use productID as property to oder ascendingly)

    function sortInAscendingOrderOfProductCode (list) {

        // use built-in function sort, which turns elements into strings and sorts them in ascending order
        // access productCode of each element 

        // the type of productCode is a STRING!!!
        // REF: MDN DOCS "Array.prototype.sort()"
        list.sort((a, b) => {
        
            if (a.productCode < b.productCode) {
                return -1;
            }
            if (a.productCode > b.productCode) {
                return 1;
            }
            return 0;
            
        });

        return list;

    }

    // extra example
    // the value of valuePerItem is a Number
    function sortInAscendingOrderOfValuePerItem(list) {

        // use built-in function sort, which turns elements into strings and sorts them in ascending order
        // access productCode of each element 

       list.sort((a, b) => a.valuePerItem - b.valuePerItem);

       return list;

    }


// -------- TESTS ---------- //

// TEST IF SHOE EXISTS IN INVENTORY

const shoeExistsInInventory = findShoeByName(shoeArray, "Salomons");
console.table(shoeExistsInInventory);


// OUTPUT THE SHOE WITH THE LOWEST VALUE PER ITEM

const cheapestShoe = findCheapestShoe(shoeArray);
console.log(cheapestShoe)


// OUTPUT THE SHOE WITH THE HIGHEST VALUE PER ITEM

const mostExpensiveShoe = findMostExpensiveShoe(shoeArray);
console.log(mostExpensiveShoe);


// OUTPUT THE CHANGED OBJECT

changePropertyOfObject(shoe3, "valuePerItem", 8000); 
// ORIGINAL SOLUTION, not as easy to read: 
// console.log("shoe3 Changed: ", shoe3); 

// Once I had finished this task, I tinkered with ChatGPT for the first time, and asked it how I might
// present the console.log of shoe3 in a neater way than my solution above.
// I asked follow-up questions regarding the below solution using JSON.stringify (a function I had used already, 
// but turned out I did not fully understand) 
// and specifically asked about the two additional paramenters JSON.stringify can take (which I did not know about).
// I decided to look at the MDN documentation for JSON.stringify to better understand 
// this function I previously thought only took one parameter.
console.log("shoe3 changed: ", JSON.stringify(shoe3, null, 2)); // REF ChatGPT // MDN DOCS "JSON.stringify()"





// OUTPUT THE LIST SORTED IN ASCENDING ORDER OF PRODUCT CODE
const sortedListbyProductCode = sortInAscendingOrderOfProductCode(shoeArray);
console.table(sortedListbyProductCode);


// REFERENCES

// Hyperiondev.(2021).   WD L1T18 - Introduction to OOP I - Objects and _this_.pdf                          Retrieved on 13 February 2023 via Dropbox.
// MDN Docs.(2023). Array.prototype.find(). Retrieved on 21 February 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// StackOverflow.(2010). Sorting object property by values. Retrieved 3 March 2023 at https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// MDN Docs.(2023). Array.prototype.sort(). Retrieved 4 March 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// YouTube:Code Band.(2021) console.table JavaScript. Retrieved 4 March 2023 at https://www.youtube.com/watch?v=H1lAhTEyvFc&ab_channel=CodeBand
// ChatGPT.2023. Retrieved 5 March 2023 at https://chat.openai.com/chat
// MDN Docs.(2023). JSON.stringify(). Retrieved 5 March 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify