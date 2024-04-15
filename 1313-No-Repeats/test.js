const {unique, unique1} = require("./index");

test("test 1", ()=>{
    let testArray = [ 1, 2, 5, 6, 7, 3, 8, 4, 25, 123];
    let result = unique(testArray);
    let comparable = new Set([1,2,5,6,7,3,8,4,25,123])
    expect(result).toStrictEqual(comparable)
})

test("test 2", ()=>{
    let testArray = [ 4, 4, 5, 5, 5, 7, 8, 10, 10, 30];
    let result = unique(testArray);
    let comparable = new Set([ 4, 4, 5, 5, 5, 7, 8, 10, 10, 30])
    expect(result).toStrictEqual(comparable)
})

test("test 3", ()=>{
    let testArray = [ 4, -6, 7, 8, -10, -11, 6, -7]
    let result = unique(testArray);
    let comparable = new Set([4, -6, 7, 8, -10,-11, 4, 6, -7, 8])
    expect(result).toStrictEqual(comparable)

})

test("test 4", ()=>{
    let testArray = [1, 1, 1, 1, 1, 1, 1];
    let result = unique1(testArray);
    expect(result).toStrictEqual([1])
})

test("test 5", ()=>{
    let testArray = [];
    let result = unique1(testArray);
    expect(result).toStrictEqual([])
})

test("test 6", ()=>{
    let testArray = [1,1,2,2,3,3,4,4,5,5];
    let result = unique1(testArray);
    expect(result).toStrictEqual([1,2,3,4,5])
})





