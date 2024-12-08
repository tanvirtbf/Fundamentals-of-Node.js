
function sum(...nums){
  return nums.reduce((curr,acc) => curr + acc)
}

function product(...nums){
  return nums.reduce((curr,acc) => curr * acc)
}

console.log(sum(1,2,3,4,5))
