const {largestNumber} = require("./index");

test("Testing largest number finder", ()=>{

    let foo = largestNumber(1,2,3);
    expect(foo).toBe(3);

})

test("Testing largest number finder", ()=>{

    let foo = largestNumber(100,0,99);
    expect(foo).toBe(100);

})

test("Testing largest number finder", ()=>{

    let foo = largestNumber(2,7,5);
    expect(foo).toBe(7);

})
