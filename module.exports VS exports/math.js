function sum(...nums){
  return nums.reduce((curr,acc) => curr + acc)
}

function product(...nums){
  return nums.reduce((curr,acc) => curr * acc)
}
 
console.log(module.exports === exports) // true
// ekhane jodio true ashce kintu tao onk difference ase 

// module.exports.sum = sum
// module.exports.product = product

// Example 1 er Example: 
const send = module.exports
send.sum = sum
send.product = product