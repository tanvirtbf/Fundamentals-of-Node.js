function sum(...nums){
  return nums.reduce((curr,acc) => curr + acc)
}

for(let i=0; i<10; i++){
  console.log(i)
}
console.log('Hii Running sum.js')

module.exports = sum


