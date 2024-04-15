const {correctLogin} = require("./index");

test("testing correct login II 1", ()=>{

    let username = "meow";
    let password = "moo";
    let result = correctLogin(username, password);
    expect(result).toBe(false);
})

test("testing correct login II 2", ()=>{

    let username = "jake";
    let password = "jake123";
    let result = correctLogin(username, password);
    expect(result).toBe("admin");
})

test("testing correct login II 3", ()=>{

    let username = "mary";
    let password = "mary456";
    let result = correctLogin(username, password);
    expect(result).toBe("customer");
})