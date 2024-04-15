const {objChecker} = require("./index.js");

let test1 = {
    1: "one",
    2: "two",
    3: "three"
}

test("test 1", ()=>{
    let result = objChecker(test1, 1);
    expect(result).toBe("one");
})

test("test 2", ()=>{
    let result = objChecker(test1, 4);
    expect(result).toBeUndefined();
})

test("test 3", ()=>{
    let result = objChecker({}, 1);
    expect(result).toBeUndefined();
})
