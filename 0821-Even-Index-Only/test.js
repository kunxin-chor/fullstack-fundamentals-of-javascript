const {evenIndex} = require("./index");

test("test 1", ()=>{

    let result = evenIndex([-1, 2]);
    expect(result).toStrictEqual([2]);   
})

test("test 2", ()=>{

    let result = evenIndex([1,2,3,4,5,6,7]);
    expect(result).toStrictEqual([2,4,6]);   
})

test("test 3", ()=>{

    let result = evenIndex([]);
    expect(result).toStrictEqual([]);   
})
