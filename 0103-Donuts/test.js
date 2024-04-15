const {cost, numberOfDonuts, total} = require("./index.js");

test("cost, numberOfDonuts, total", ()=>{
    expect(cost).toBe(1.5);
    expect(numberOfDonuts).toBe(20);
    expect(total).toBe(30);
})