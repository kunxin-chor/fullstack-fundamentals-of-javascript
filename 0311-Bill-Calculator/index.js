const prompt = require("prompt-sync")();

function calculateGst(price){
  //  insert your code here
}

function calculateServiceCharge(price){
  //  insert your code here

}

function calculateTotalPrice(price, serviceCharge, gst) {
  //  insert your code here
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(`???`);
let serviceCharge = calculateServiceCharge(`???`);
let total = calculateTotalPrice(`???`, `???`, `???`);

console.log(total);

module.exports = {
  calculateGst,
  calculateServiceCharge,
  calculateTotalPrice
}

// To test your code
// in CLI type, npm install
// when that is done, in CLI type, npm run test;
