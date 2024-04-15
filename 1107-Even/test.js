const {isEven,printEven} = require("./index");

test("test 1", ()=>{

    let result = printEven(isEven);
    expect(result).toStrictEqual([2,4,6,8,10,12,14,16,18,20])

})


