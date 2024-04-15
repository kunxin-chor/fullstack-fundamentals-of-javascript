const { calculateGst, calculateTotalPrice } = require("./index");

test("Calculate add on of gst", ()=>{

    let price = 5000;
    let gst = calculateGst(price);
    let total = calculateTotalPrice(price, gst);
    expect(total).toBe(5350)    

})