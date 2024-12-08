const sum = require('./math/sum')
const sub = require('./math/sub')
const div = require('./math/div')
const mul = require('./math/mul')

console.log(sum(1,2,3,4,5))
console.log(sub(6,2))
console.log(mul(3,4,2))
console.log(div(6,1))

const returnString = require('./returnString')
console.log(returnString) // Hello World!

const returnNumber = require('./returnNumber')
console.log(returnNumber) // 123

const returnEmptyObject = require('./returnEmptyObject')
console.log(returnEmptyObject) // {}

const returnBool = require('./returnBool')
console.log(returnBool)

// const exportsHello = require('./exports')
// const {hello} = require('./exports')
// console.log(exportsHello.hello())
// console.log(hello())

const exportsHello = require('./exports')
console.log(exportsHello)
