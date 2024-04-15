const {objValues1, objValues2} = require("./index");

test("test 1", ()=>{

    let testObj = {
        1:"one",
        2:"two",
        3:"three"
    }

    let result = objValues1(testObj);
    expect(result).toStrictEqual(["one","two","three"]);

})

test("test 2", ()=>{

    let testObj = {
        1:"one",
        2:"two",
        3:"three"
    }

    let result = objValues2(testObj);
    expect(result).toStrictEqual(["one","two","three"]);

})
