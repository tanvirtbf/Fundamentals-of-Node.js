// const num = require('./math.js')
// console.log(module)
const math = require('./math')
const hello = require('./hello')
console.log(math)

// Important Notes : 
// jokhon app.js theke module object access kora hoy tokhon sei module object and math.js file er module object same na . prottekta file er module object alada alada. 

// 1. module.children
// 2. module.exports
// 3. module.filename
// 4. module.isPreloading
// 5. module.loaded
// 6. module.parent

// 1. module.children 
// eta holo main file er moddhe koto gula file export kora hoise tar ekta hishab array er value akare pass hoy children array er moddhe. dhoren math.js file app.js er moddhe require function use kore import korsi tar mane children array er moddhe 1 ta value set hoise. sei ekta value index 0 diye access kora jay. sei index 0 te another ekta module object ase jeta only for math.js file. temni vabe jodi app.js e arekta file jar nam hello.js require kori tahole tar pore debugging dile dekha jay je children e 2 ta value ase. jar index 1 er moddhe hello.js file er module object store kora.

// 2. module.exports
// ataii sei object jeta module.exports er bodole sudhu exports diyeo kora jay. 

// 3. module.filename
// jei file theke dekha hocche sei file location

// 4. module.isPreloading 
// normal obosthay module.isPreloading false ashe. tar mane holo sei file preloading kore na . jokhon file ke call kora hoy tokhon loading kore.
// jodi amra chai je jokhon node js server run hobe tokhonii sei file preload hobe tahole amader terminal e 'node --require ./math.js app.js' ai code boshaite hobe . ekhane app.js holo main file jekhan theke node js start hoy and math.js holo jei file ta ami pre load korte chai
// Example : 
// node --require ./math.js app.js ---- true
// Important Notes About Preloading ==> jodi preloading kori tahole sei file er access main file e pauyar jonno require function use kore call kora lagbe na. preloading korleii math.js er code run hobe automatically jokhon main file er sathe node js server run kora hoy.


// 5. module.loaded
// jokhon pura file loading hoy na tokhon etar value false thake . jokhon file ta pura load hoye jay ba pura ta execute hoye jay tokhon true hoye jay. true hoile obossho seta gayeb hoye jay module object theke

// 6. module.parent