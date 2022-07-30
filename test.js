const md5 = require('md5');
const password = md5('123')
const isValid = md5('123') == password
console.log(isValid)