const {objChecker} = require("./index");

test("test 1", ()=>{

    let object = {
        1: "one",
        2: "two",
        3: "three"
    }

    let result = objChecker(object, 1);
    console.log(result)

    expect(result).toBe(true);
})

test("test 2", ()=>{

    let object = {
        1: "one",
        2: "two",
        3: "three"
    }

    let result = objChecker(object, 4);
    console.log(result)

    expect(result).toBe(false);
})

test("test 3", ()=>{

    let object = {
        fourty: "one",
        meow: "two",
        moo: "three"
    }

    let result = objChecker(object, "meow");
    console.log(result)

    expect(result).toBe(true);
})

test("test 4", ()=>{

    let object = {
        fourty: "one",
        meow: "two",
        moo: "three"
    }

    let result = objChecker(object, "ananas");
    console.log(result)

    expect(result).toBe(false);
})
