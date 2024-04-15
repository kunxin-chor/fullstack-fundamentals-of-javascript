const {correctLogin} = require("./index");

test("testing login 1", ()=>{

    let result = correctLogin("hello", "yes")
    expect(result).toBe(false);
});

test("testing login 2", ()=>{

    let result = correctLogin("hi", "yes123")
    expect(result).toBe(false);
});

test("testing login 3", ()=>{

    let result = correctLogin("hello", "yes123")
    expect(result).toBe(true);
});