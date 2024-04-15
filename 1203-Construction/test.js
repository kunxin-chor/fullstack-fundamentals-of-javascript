const {timeTakenToBuildBoats} = require("./index");

test("test 1", ()=>{

    let result = timeTakenToBuildBoats(15)
    expect(result).toBe(11);

});

test("test 2", ()=>{

    let result = timeTakenToBuildBoats(23)
    expect(result).toBe(16);

});

test("test 1", ()=>{

    let result = timeTakenToBuildBoats(35)
    expect(result).toBe(25);

});