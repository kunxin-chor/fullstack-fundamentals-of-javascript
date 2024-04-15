const {x} = require("./index");

test("test 1", ()=>{
    let result = x(3);
    expect(result).toBe(4);
})

test("test 2", ()=>{
    let result = x(10);
    expect(result).toBe(11);
})

test("test 3", ()=>{
    let result = x(-1);
    expect(result).toBe(0);
})