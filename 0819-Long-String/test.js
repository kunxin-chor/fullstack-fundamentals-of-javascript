const {longerThanThree} = require("./index");

test("test 1", ()=>{

    let result = longerThanThree(["a","b","test"]);
    expect(result).toStrictEqual(['test']);   
})

test("test 2", ()=>{

    let result = longerThanThree(["a", "apple", "b", "banana", "c", "cat"]);
    expect(result).toStrictEqual([ 'apple', 'banana' ]);   
})

test("test 3", ()=>{

    let result = longerThanThree(["a","b"]);
    expect(result).toStrictEqual([]);   
})




