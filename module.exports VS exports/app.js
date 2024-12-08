const math = require('./math.js')

// Example 1: 
const user = {
  name: 'Tanvir Ahmed',
  age : 25, 
  address: {
    city: 'Dhaka',
    state: 'Sonir Akhra'
  },
  hobbies: ['Teaching', 'Coding', 'Football']
}
let address = user.address
console.log(user.address === address)
address.pinCode = 6064
address.country = 'Bangladesh'

// Example 1 er moddhe user nam e ekta object ase jeta ke amra module object dhorte pari and user object er moddhe address nam e ekta object ase setake amra exports object dhorte pari . to behind the scene let exports = module.exports kora hoise jei karone exports and module.exports same memory te kaj kore . jemon upore let address = user.address korar por jokhon address.pinCode and address.country dara address er value change korle seta main user object e reflect hocche karon object holo non-premitive data . same concept hoise module.exports and exports er moddhe....








