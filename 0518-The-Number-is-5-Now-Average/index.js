const prompt = require("prompt-sync")();

let total = 0;
let n = parseInt(prompt("Guess the number: "));

while (n !== 5) {

    n = parseInt(prompt("Guess again: "));
}


console.log("Yes the number is 5!");
console.log(total);


// To test your code, npm install then
// type node index.js to check output against readme

