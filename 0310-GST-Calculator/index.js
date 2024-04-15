

function calculateGst(price){
  //  insert your code here

}

function calculateTotalPrice(price, gst) {
  //  insert your code here
}

let price = parseFloat(prompt("Give me a price: "));
let gst = calculateGst(`???`);
let total = calculateTotalPrice(`???`, `???`);
console.log(total.toFixed(2));


module.exports = {
  calculateGst,
  calculateTotalPrice
}

// To test your code
// in CLI type, npm install
// when that is done, in CLI type, npm run test;
