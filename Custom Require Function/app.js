const b = loadModule('./math.js')

function loadModule(path){
  const fs = require('fs')
  const fileContent = fs.readFileSync(path).toString()
  console.log(fileContent)
  
  (function(send){
    eval(fileContent)

  })({})

}

