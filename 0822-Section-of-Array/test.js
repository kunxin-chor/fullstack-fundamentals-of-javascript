const {threeToFive} = require("./index");

test("test 1", ()=>{

    let result = threeToFive([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toStrictEqual([ 4, 5, 6 ]);   
})

test("test 2", ()=>{

    let result = threeToFive(["a", "b", "c", "d", "e", "f", "g", "h"]);
    expect(result).toStrictEqual([ 'd', 'e', 'f' ]);
})

test("test 3", ()=>{

    let result = threeToFive([]);
    expect(result).toStrictEqual([]);   
})
