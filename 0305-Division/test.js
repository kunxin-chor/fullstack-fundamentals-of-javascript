const divide = require("./index");

test("divide function test 1", ()=>{

    const result = divide(10, 5);
    expect(result).toBe(2.00);

})

test("divide function test 2", ()=>{

    const result = divide(10, 3);
    expect(result).toBe(3.33);

})

test("divide function test 3", ()=>{

    const result = divide(53, 4);
    expect(result).toBe(13.25);

})