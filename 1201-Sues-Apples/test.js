const {apples} = require("./index");

test("test 1", ()=>{

    let result = apples(4)
    expect(result).toBe(1);
});

test("test 2", ()=>{

    let result = apples(10)
    expect(result).toBe(2.5);

});

test("test 3", ()=>{

    let result = apples(0)
    expect(result).toBe(0);

});

