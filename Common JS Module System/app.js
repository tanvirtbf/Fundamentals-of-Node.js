// const sum = require('./math/sum.js')
// const product = require('./math/product.js')

// console.log(sum(1,2,3,4,5))
// console.log(product(1,2,3,4))

// // ekhane require ekta function 
// console.log( typeof require ) // function
// // ai require function er first argument ekta string jekhane path set kora hoy. ekta valid path jekhane kono js or onno kono file exist kore . dhori ami sum.js file er path require function er moddhe string akare pass korsi . tokhon require function prothome sum.js file e dhuke full sum.js file execute kore . sum.js file e ja ja ase sob execute kore . jehetu require ekta function tai obosshoi tar ekta return value ache . tahole question ashe require function er return value ki hobe?? answer holo require function er return value holo module.exports. 
// // module.exports diye to sum.js file er moddhe sum function ta ke return kora hoise . amra chaile module.exports diye kono string or jekono number or boolean return korte pari . jemon module.exports = 'Hello World' or module.exports = 120 or module.exports = true etc jekono type er data rakhle setaii require function return kore . ekhane amra object array function sob kichuii rakhte pari module.exports er moddhe , setaii require function return korbe.
// // mot kotha module.exports er value taii require function return kore


// const math = require('./math.js')
// console.log(math.sum(1,2,3,4,5)) // 15
// console.log(math.product(1,2,3,4)) // 24

// const sum = math.sum
// const product = math.product
// console.log(sum(1,2,3,4,5)) // 15
// console.log(product(1,2,3,4)) // 24

// const {sum, product} = math
// console.log(sum(1,2,3,4,5))
// console.log(product(1,2,3,4))

// const {sum, product} = require('./math.js')

// console.log(sum(1,2,3,4,5)) // 15
// console.log(product(1,2,3,4)) // 24

// Important Notes********
// module.exports always sudhu ekta dataii return korte pare . multiple data return korte pare na . only ektaii object, or only ektaii array, or only ektaii string or ektaii number etc sudhu ektaii data return korte pare . karon ??????
// karon holo require ekta function and module.exports er value require function return kore . jehetu require ekta function taii amra sobai jani ekta function only ektaii value return korte pare . tai module.exports only ekta data return korte pare

// Important Notes*****
// require function asynchronously kaj kore thake. jokhon require function er vitore kono path deya hoy tokhon sei path e giye file er sob code execute korte thake. jotokkhon na sei file er sob code execute na hobe totokkhon require function jei line e ache sei line eii compiler suspend hoye thakbe, samne jaite parbe na . oi file er sob code run houyar por then require function execute complete kore next line theke run korbe compiler

// Empty object return 
const myFile = require('./emptyReturn.js')
console.log(myFile) // {}
// karon module.exports by default empty object hobe thake . tai jodi emptyReturn.js file theke jodi module.exports e kono data pass kora na hoy tahole by default ai file require function ke empty object return kore. 