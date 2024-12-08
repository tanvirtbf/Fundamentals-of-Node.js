const math = require('./math.js')

// Example 1: 
// const user = {
//   name: 'Tanvir Ahmed',
//   age : 25, 
//   address: {
//     city: 'Dhaka',
//     state: 'Sonir Akhra'
//   },
//   hobbies: ['Teaching', 'Coding', 'Football']
// }
// let address = user.address
// console.log(user.address === address)
// address.pinCode = 6064
// address.country = 'Bangladesh'

// Example 1 er moddhe user nam e ekta object ase jeta ke amra module object dhorte pari and user object er moddhe address nam e ekta sub-object ase setake amra exports object dhorte pari . jodi amra let address = user.address kori tahole user er sub-object address ta address variable er moddhe aisha pore. jehetu object ekta non-premitive tai address variable er kase user.address er memory address ashe . tai address variable e kichu change korle user.address e change hobe. kintu address variable e jodi assignment operation use kore notun object create kora hoy tahole user.address er memory theke se bicchinno hoye jabe and new object create korbe memory te. tar fole address variable e furthure kono kichu change korleo user.address e change hoy na. same concept jodi module object er moddhe chinta kori tahole bola jay module ekta object and module er vitore exports nam e ekta object ase. setake behind the scene let exports = module.exports kora hoise jei karone exports and module.exports same memory te kaj kore . jemon upore let address = user.address korar por jokhon address.pinCode and address.country dara address er value change korle seta main user object e reflect hocche karon object holo non-premitive data . same concept hoise module.exports and exports er moddhe.
// jemon : 
// const send = module.exports
// send.sum = sum
// send.product = product
// This example is valid


// Important Notes********** 
// Problem with exports : 
// jehetu exports behind the scene let exports = module.exports evabe ashce tai exports and module.exports same memory te exist kore. ekhane amra project e sei let exports er exports variable instance use kori . kintu jodi exports variable ke assignment operation '=' diye notun kono object assign kora hoy tahole exports variable ta module object er sathe connection lost korbe and memory te notun address e tar object store korbe . jaron karone require function new object er exports object theke kichui ney na . 
// Example : 
// exports.sum = sum // this is valid
// exports.product = product // this is valid
// but...
// exports = {
//   sum,
//   product
// } // This is not valid

// kintu 
// module.exports = {
//   sum,
//   product,
// } // This is valid karon module.exports koreii new object banano hoise . 


// Final note: 
// 1. user object is equvalent to module object
// 2. user.address object is equvalent to module.exports object
// 3. let address = user.address is equvalent to let exports = module.exports



