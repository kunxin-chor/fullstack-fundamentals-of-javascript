const {runOver, overSix} = require("./index");


test("test 1", ()=>{

    let result = runOver(['apples', 'strawberries', 'mangosteen'], overSix);
    expect(result).toStrictEqual(['strawberries', 'mangosteen']);

})

test("test 2", ()=>{

    let result = runOver(["meow", "moo", "moomoo1"], overSix);
    expect(result).toStrictEqual(["moomoo1"]);

})

test("test 3", ()=>{

    let result = runOver(["meow", "moo", "meh"], overSix);
    expect(result).toStrictEqual([]);

})

