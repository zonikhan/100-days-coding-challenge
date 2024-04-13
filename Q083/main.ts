// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertCase(str: string){
    let upperCaseStr = str.toUpperCase();
    let lowerCaseStr = str.toLowerCase();

// Example: Changing the case of "Ismail Ahmed Shah"

    console.log(`Original String: ${str}`);
    console.log(`Uppercase String: ${upperCaseStr}`);
    console.log(`Lowercase String: ${lowerCaseStr}`);
// Outputs: "Uppercase: RABIA ARIF Lowercase: rabia arif"
// We're showing the same text in all uppercase and then all lowercase.
}
let myString = "Rabia Arif!";
convertCase(myString);