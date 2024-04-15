const {sumNumbers} = require("./index");

test("sum numbers 1", ()=>{

    let result = sumNumbers(1,2,3);
    expect(result).toBe(6);
})

test("sum numbers 2", ()=>{

    let result = sumNumbers(5,9,0);
    expect(result).toBe(14);
})

test("sum numbers 3", ()=>{

    let result = sumNumbers(100,2,3);
    expect(result).toBe(105);
})