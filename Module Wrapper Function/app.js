// kotha hocche amra module er moddhe exports, require, module, __filename, __dirname egula directly use kori . kintu egula kottheke ashe ??? egular source ki ???
// Answer : 
// jokhon kono file er moddhe kono code kora hoy and sei file jodi node js er under e run kora hoy tahole node js sei code gula ekta function er moddhe run kore jeta amra khali chokhe dekhi na . internally ekta function er vitor sob code run hoy . jemon math.js namok ekta file er moddhe 10 line code ache . sei 10 line code ekta function er moddhe wrap kora behind the scene. sei wrapper function ke bola hoy Module Wrapper Function 
// module wrapper function ekta IIFE function . tar parameter and argument er moddhe exports, require, module, __dirname, __filename ache jar karone easily amra egula code er moddhe access korte pari . jemon...
// Example of module wrapper function => 
(function(exports, require, module, __filename, __dirname){
  // code....
})(exports, require, module, __filename, __dirname)

// Important Note******
// Question holo node js er moddhe kno var diye variable declare korleo local scope e variable add hoy ?? 
// Answer : amra jani javascript e function er vitore var diyeo kono variable declare korle seta local scope e thake . tar mane window object er vitor pauya jay na globally . jehetu node js sob file er code gula ekta IIFE wrapper function er moddhe rakhe tai var diyeo declare kora variable gula local scope e thake
// kintu var let const kichu diye variable declare na korle seta global scope e jay

// Node js er erokom vabe sob file er code function er vitor wrap korar karon ki ? 
// karon holo jate kono variable global scope e na jay

// dhori amar main file app.js and math.js and hello.js 2 ta file ami app.js er moddhe import korsi, othoba bola jay require korsi. akhn app.js er moddhe jemon wrapper function thakbe temni math.js and hello.js er moddheo wrapper function thakbe. app.js er wrapper function and math.js er wrapper function same na. tader argument gulao same na . prottekta file e alada alada wrapper function sob code gula ke wrap kore thake. eta test korar jonno amra app.js and math.js 2 ta file er moddhei console.log(__filename, __dirname) kore dekhi . dekhben 2 tar value same na . tar mane holo 2 ta file er wrapper function er argument er value same na . 




