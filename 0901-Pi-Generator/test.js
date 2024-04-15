const {piGenerator} = require("./index");

test("test 1", ()=>{

    const gen = piGenerator();
    let result = gen.next().value;
    expect(result).toBe(3.14);
})