isPalindrome = (myString) => {

    // create new string to put chars into
    let backwardsMyString = "";

    // declare boolean to return
    let isPalindrome;
    
    // iterate through the string and check if myString == backwardsMyString
    for (let i = 0; i < myString.length; i++) {

        // backwardsMyString = existing backwardsMyString + myString[index[i-from-the-last]]
        backwardsMyString = backwardsMyString + myString[myString.length - 1 - i];
    }

    // elminate uppercase discrepencies by converting both strings to lowercase, then compare
    if (myString.toLowerCase() == backwardsMyString.toLowerCase()) {

       isPalindrome = true;
    }
    else {
        isPalindrome = false;
    }

    return isPalindrome;
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "The Quick Brown Fox Jumps Over The Lazy Dog",
    "helloworld",
    "tacocat",
    "anna",
    "racecar",
    "dad",
    "level",
    "noon",
    "rotator",
    "tenet",
    "saippuakivikauppias",
    "hyperiondev",
    "rhythms"
]


let correctStrings = [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = isPalindrome(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}