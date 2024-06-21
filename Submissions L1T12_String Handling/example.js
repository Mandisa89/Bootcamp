//************* HELP *****************
// If you are having any difficulties, please feel free to contact our specialist team on Discord for support. 
// The best way to get help is to login to Discord at https://discord.com/invite/hyperdev where our specialist team is ready to support you.
//************************************

// ========= Recap on Strings ===========
// A string is a common data type which is used to represent text.
// It is a sequence of characters, such as letters, numerals, symbols and special characters.
// You have probably already noticed what an important part strings play in programming.
// Many programs you come across will involve the manipulation of strings.
// Therefore, knowing string manipulation techniques or string handling is crucial.
// We have already touched on this subject in the previous strings task, so this will just serve as a brief recap
// and will introduce you to more advanced programs.

// ************ Example 1 ************
// Recap on slicing strings 
console.log("Example 1: ");

string = 'Hello world!';
fizz = string.slice(0, 5)
console.log(fizz)

// Note that slicing a string does not modify the original string.
// You can simply store the substring 'sliced' from the original string in a separate variable.
// By storing the substring in another variable, you keep the original string intact.

// ************ Example 2 ************
console.log("Example 2: ")

fact1 = "The original name of windows was Interface Manager."
fact1 = fact1.toUpperCase()
console.log(fact1)
fact1 = fact1.toLowerCase()
console.log(fact1)

// ************ Example 3 ************
console.log("Example 3: ")

sentence = "ThisHELLOisHELLOrandomHELLOtextHELLOweHELLOareHELLOgoingHELLOtoHELLOsplitHELLOapart"
split_sentence = sentence.split("HELLO")
console.log(split_sentence)

// Notice how a list is printed out?

// ************ Example 4 ************
console.log("Example 4: ")

fact2 = "          The$first$electronic$computer$ENIAC$weighed$more$than$27$tons.          "
fact2 = fact2.replace("$", "WOW!")
console.log(fact2)
fact2 = fact2.trim()
console.log(fact2)
fact2 = fact2.split("WOW!")
console.log(fact2)

// ************ Example 5 ************
console.log("Example 5: ")
string_list = ["I", "like", "to", "join", "lists", "to", "make", "strings"]
list_joined = string_list.join(" ")
console.log(list_joined)

// ========= Escape Character ===========
// Javascript uses the backslash (\) as an escape character.
// The backslash (\) is used as a marker character to tell the compiler/interpreter that the next character has some special meaning.
// The backslash together with certain other characters are know as escape sequences.

// ************ Example 6 ************
console.log("Example 6: ")
people = "Person 1 \nPerson 2"
console.log(people)
// Notice the line break between the two words. The \n character is invisible -- it's a command to insert a new line.

// ************ Example 7 ************
console.log("Example 7: ")
wage = "Person 1: \t R123.22"
console.log(wage) 
// Notice the tab between the two words. The \t character is invisible -- it's a command to insert a new tab space. 

// ************ Example 8 ************
console.log("Example 8: ")
sentence = "\"The escape character (\\) is a character which invokes an alternative interpretation on subsequent characters in a character sequence.\"" 
console.log(sentence)
// Notice that the quotation marks and backslash are printed out as part of the string.

// ****************** END OF EXAMPLE CODE ********************* // 

