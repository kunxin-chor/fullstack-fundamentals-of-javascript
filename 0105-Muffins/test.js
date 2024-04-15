const {d,c,n,total} = require("./index");

test("finding total", ()=>{

    expect(total).toBe((d + (c * 0.01)) * n)

})
