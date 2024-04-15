const {run} = require("./index");

test("Days to cover dist 1", ()=>{

    let result = run(3,5);
    expect(result).toBe(1.5);
    
});

test("Days to cover dist 2", ()=>{

    let result = run(2,20);
    expect(result).toBe(5);
    
})

test("Days to cover dist 3", ()=>{
    
    let result = run(1,100);
    expect(result).toBe(13.642857142857142);    
})


test("Days to cover dist 4", ()=>{
    
    let result = run(5,2);
    expect(result).toBe(0.4);    
})

