const key = require("./src/config/key")

arr = [1, 2, 3]
for (let i = 0; i <arr.length; i++) {
    let a = 0
    a++
    console.log(i)
}

arr = [
    {key1 : 'value1'},
    {key2 : 'value2'},
    {key3 : 'value3'}
]

const newArr = arr.forEach((obj) => {
    obj.newKey = 'abc'
})
console.log(arr)