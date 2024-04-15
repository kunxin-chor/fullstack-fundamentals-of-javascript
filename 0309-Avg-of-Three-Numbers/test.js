const {averageOfThree} = require("./index.js")

test("average of three testing 1", () => {
    let result = averageOfThree(10,15,20);
    expect(result).toBe(15);
})

test("average of three testing 2", () => {
    let result = averageOfThree(3,4,5);
    expect(result).toBe(4);
})

test("average of three testing 3", () => {
    let result = averageOfThree(10,30,15);
    expect(result).toBe(18.333333333333333);
})