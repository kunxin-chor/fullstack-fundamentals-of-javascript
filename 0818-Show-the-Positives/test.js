const {positiveOutputOnly} = require("./index");

test("test 1", ()=>{

    let result = positiveOutputOnly([-1,2,3]);
    expect(result).toStrictEqual([2,3]);   
})

test("test 2", ()=>{

    let result = positiveOutputOnly([4,-6,7,8,-10,-11]);
    expect(result).toStrictEqual([ 4, 7, 8 ]);   
})

test("test 3", ()=>{

    let result = positiveOutputOnly([]);
    expect(result).toStrictEqual([]);   
})



