
const sub = (...numbers) => {
  return numbers.reduce((acc, cur) => acc - cur) 
}

module.exports = sub
