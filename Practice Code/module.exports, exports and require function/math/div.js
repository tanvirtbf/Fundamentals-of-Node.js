
const div = (...numbers) => {
  return numbers.reduce((acc, cur) => acc / cur)
}

module.exports = div
