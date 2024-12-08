function sum(...nums){
  return nums.reduce((curr,acc) => curr + acc)
}

for(let i=0; i<100; i++){
  console.log(i)
}
console.log('Hii Running sum.js')

module.exports = sum