const {addition} = require("./index");

test("test 1", ()=>{

    let result = addition(5,6).next().value;
    expect(result).toBe(11);

})

test("test 2", ()=>{

    let result = addition(13,14).next().value;
    expect(result).toBe(27);

})

test("test 3", ()=>{

    let result = addition(1,4).next().value;
    expect(result).toBe(5);

})



