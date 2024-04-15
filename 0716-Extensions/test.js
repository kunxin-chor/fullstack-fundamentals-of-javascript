const {returnExtension} = require("./index");

test("testing for extension 1", ()=>{

    let example1 = "meow.jpg";
    let result = returnExtension(example1);

    expect(result).toBe("image");

});


test("testing for extension 2", ()=>{

    let example1 = "meow.doc";
    let result = returnExtension(example1);

    expect(result).toBe("document");

});

test("testing for extension 3", ()=>{

    let example1 = "meow.png";
    let result = returnExtension(example1);

    expect(result).toBe("none");

});