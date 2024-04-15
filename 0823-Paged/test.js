const {page} = require("./index");

let list = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","item16","item17","item18","item19","item20"]

test("test 1", ()=> {
    let result = page(list,0)
    expect(result).toStrictEqual([ 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8']);
})

test("test 2", ()=> {
    let result = page(list, 2)
    expect(result).toStrictEqual(['item17','item18','item19','item20']);
})

test("test 3", ()=> {
    let result = page(list, 5)
    expect(result).toStrictEqual([]);
})