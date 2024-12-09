// kotha hocche amra module er moddhe exports, require, module, __filename, __dirname egula directly use kori . kintu egula kottheke ashe ??? egular source ki ???
// Answer : 
// jokhon kono file er moddhe kono code kora hoy and sei file jodi node js er under e run kora hoy tahole node js sei code gula ekta function er moddhe run kore jeta amra khali chokhe dekhi na . internally ekta function er vitor sob code run hoy . jemon math.js namok ekta file er moddhe 10 line code ache . sei 10 line code ekta function er moddhe wrap kora behind the scene. sei wrapper function ke bola hoy Module Wrapper Function 
// module wrapper function ekta IIFE function . tar argument er moddhe exports, require, module, __dirname, __filename ache jar karone easily amra egula code er moddhe access korte pari . jemon...
// Example of module wrapper function => 
(function(exports, require, module, __filename, __dirname){
  // code....
})(exports, require, module, __filename, __dirname)









