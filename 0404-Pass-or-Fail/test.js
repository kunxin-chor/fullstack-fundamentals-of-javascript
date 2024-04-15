const {grade} = require("./index.js");

test("Testing if correct grades assigned", ()=>{

    let foo = grade(20);

    expect(foo).toBe("Failed");

})