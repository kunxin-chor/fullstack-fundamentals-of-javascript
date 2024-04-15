const {stringWithoutVowels} = require("./index");

test("test for vowel", ()=>{

    let string = "meowMEOW";
    let result = stringWithoutVowels(string);

    expect(result).toBe("mwMW");

})