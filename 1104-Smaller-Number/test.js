const {x} = require("./index");

test("test 1", ()=>{

    let result = x(1,3);
    expect(result).toBe(1);

})

test("test 2", ()=>{

    let result = x(-99,99);
    expect(result).toBe(-99);

})

test("test 1", ()=>{

    let result = x(0,11);
    expect(result).toBe(0);

})