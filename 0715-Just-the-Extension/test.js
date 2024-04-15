const {returnExtension} = require("./index");

test("testing for extension", ()=>{

    let example1 = "meow.jpg";
    let result = returnExtension(example1);

    expect(result).toBe(".jpg");

});


test("testing for extension", ()=>{

    let example1 = "meow.doc";
    let result = returnExtension(example1);

    expect(result).toBe(".doc");

});