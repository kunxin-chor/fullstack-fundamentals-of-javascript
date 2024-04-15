const {posOrNeg} = require("./index");

test("testing if int is +ve or -ve or 0", ()=>{
    let foo = posOrNeg(12);
    expect(foo).toBe("+");
})

test("testing if int is +ve or -ve or 0", ()=>{
    let foo = posOrNeg(-12);
    expect(foo).toBe("-");
})

test("testing if int is +ve or -ve or 0", ()=>{
    let foo = posOrNeg(0);
    expect(foo).toBe("0");
})