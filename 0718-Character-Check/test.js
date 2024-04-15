const {checkString} = require("./index");

test("check string for @ 1", ()=>{

    let result = checkString("meow@");
    expect(result).toBe(true);

})


test("check string for @ 2", ()=>{

    let result = checkString("meow");
    expect(result).toBe(false);

})