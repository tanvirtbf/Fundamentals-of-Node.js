function sum(...nums){
  return nums.reduce((curr,acc) => curr + acc)
}

function product(...nums){
  return nums.reduce((curr,acc) => curr * acc)
}

// module.exports = {
//   sum,
//   product,
// }

module.exports.sum = sum
module.exports.product = product