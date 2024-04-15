const {objValues} = require("./index");

test("test 1", ()=>{

    let object1 = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6
    }

    let result = objValues(object1);
    expect(result).toStrictEqual([3,4,5]);
})


test("test 2", ()=>{

    let object1 = {
        "seven":7,
        "eight":8,
        "nine":9,
        "ten":10,
        "eleven":11
    }

    let result = objValues(object1);
    expect(result).toStrictEqual([7,8,9,11]);
})