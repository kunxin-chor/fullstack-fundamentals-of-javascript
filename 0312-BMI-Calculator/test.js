const {BMICalculator} = require("./index.js");

test("BMI calculator testing 1", ()=>{

    const BMIWeight = 80;
    const BMIHeight = 1.7;

    let results = BMICalculator(BMIWeight, BMIHeight);
    expect(results).toBe(27.68);

})

test("BMI calculator testing 2", ()=>{

    const BMIWeight = 65;
    const BMIHeight = 1.6;

    let results = BMICalculator(BMIWeight, BMIHeight);
    expect(results).toBe(25.39);

})

test("BMI calculator testing 3", ()=>{

    const BMIWeight = 55;
    const BMIHeight = 1.7;

    let results = BMICalculator(BMIWeight, BMIHeight);
    expect(results).toBe(19.03);

})

test("BMI calculator testing 3", ()=>{

    const BMIWeight = 20;
    const BMIHeight = 1.35;

    let results = BMICalculator(BMIWeight, BMIHeight);
    expect(results).toBe(10.97);

})


