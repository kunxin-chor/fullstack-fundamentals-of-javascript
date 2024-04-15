let {countThePositives} = require("./index.js");

test("Testing how many positive", ()=>{

    let foo = countThePositives(123, 4, -2);
    expect(foo).toBe(2);

})

test("Testing how many positive", ()=>{

    let foo = countThePositives(-1, -5, -2);
    expect(foo).toBe(0);

})

test("Testing how many positive", ()=>{

    let foo = countThePositives(5, 7, 6);
    expect(foo).toBe(3);

})