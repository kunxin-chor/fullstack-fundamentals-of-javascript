const {largerOrSmaller} = require("./index.js");

test("testing bigger or smaller or same", ()=>{

    let foo = largerOrSmaller(14,50);
    expect(foo).toBe("Smaller");

})

test("testing bigger or smaller or same", ()=>{

    let foo = largerOrSmaller(50,14);
    expect(foo).toBe("Larger");

})

test("testing bigger or smaller or same", ()=>{

    let foo = largerOrSmaller(14,14);
    expect(foo).toBe("Same");

})