//hoisting

console.log(name);

//let name = 'hello world';   //THROWS ERROR, NOT HOISTED
//const name = 'hello world'; //THROWS ERROR, NOT HOISTED
var name = 'hello world'; //HOISTED

const sum = () => console.log('Hello universe');

sum();
