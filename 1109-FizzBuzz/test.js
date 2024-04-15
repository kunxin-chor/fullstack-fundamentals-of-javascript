const {testFizzbuzz, fizzbuzz} = require("./index");

test("test 1", ()=>{

    let result = testFizzbuzz([1,11,13,14,15,18,30,31,40,42,45,55], fizzbuzz);
    expect(result).toStrictEqual([15,30,45]);
})