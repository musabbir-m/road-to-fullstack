//modular js
//Js had no built in module system
//node js brought the modular system with common js
//Later ES6 modules were introduced, node js supports both

import {numarr, name as Name} from "./file2.mjs";

// when import default exporst, we can import with any name;
import addadd from "./file2.mjs";

console.log (addadd(2,3))
console.log(numarr)

