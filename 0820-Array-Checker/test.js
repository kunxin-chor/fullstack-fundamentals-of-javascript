const {arrayChecker} = require("./index");

test("test 1", ()=>{

    let result = arrayChecker([1,2,3], 1);
    expect(result).toStrictEqual(true);   
})

test("test 2", ()=>{

    let result = arrayChecker([1,2,3], 4);
    expect(result).toStrictEqual(false);   
})

test("test 3", ()=>{

    let result = arrayChecker(["a","b","c"], "a");
    expect(result).toStrictEqual(true);   
})

test("test 4", ()=>{

    let result = arrayChecker([], 1);
    expect(result).toStrictEqual(false);   
})