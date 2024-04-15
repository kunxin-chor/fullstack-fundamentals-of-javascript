const {age,gst,isRaining,username} = require("./index.js");

test("testing variables", ()=>{
    expect(age).toBe(25);
    expect(gst).toBe(0.09);
    expect(isRaining).toStrictEqual(false);
    expect(username).toBe("Samatha Brown");
})