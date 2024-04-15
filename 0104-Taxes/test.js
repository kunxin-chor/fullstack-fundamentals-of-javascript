const {taxRate, income, totalPayment} = require("./index.js");

test("Testing tax payment",()=>{
    expect(taxRate).toBe(0.09);
    expect(income).toBe(450000);
    expect(totalPayment).toBe(40500);

})