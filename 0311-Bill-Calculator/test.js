const {calculateGst, calculateServiceCharge, calculateTotalPrice} = require("./index.js");

test("testing calc total", ()=>{

    let price = 4000;
    let gst = calculateGst(price);
    let serviceCharge = calculateServiceCharge(price);
    let total = calculateTotalPrice(price, gst, serviceCharge);

    expect(total).toBe(4680)


})