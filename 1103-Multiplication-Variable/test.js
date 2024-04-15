const {m} = require("./index");

test("test 1", ()=>{
    let result = m(3,4);
    expect(result).toBe(12);
})


test("test 2", ()=>{
    let result = m(99,100);
    expect(result).toBe(9900);
})


test("test 3", ()=>{
    let result = m(9,-9);
    expect(result).toBe(-81);
})

