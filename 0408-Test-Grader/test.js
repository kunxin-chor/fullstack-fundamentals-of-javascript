const {testGrader} = require("./index");

test("testing grades", ()=>{

    let foo = testGrader(91);
    expect(foo).toBe("A+");

})

test("testing grades", ()=>{

    let foo = testGrader(60);
    expect(foo).toBe("C");

})

test("testing grades", ()=>{

    let foo = testGrader(0);
    expect(foo).toBe("F");

})




