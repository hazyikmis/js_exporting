const express = require('express');
const { response } = require('express');
//require("./db/mongoose");

const app = express();
/*
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('abcd');
var result = buffer1.compare(buffer2);
console.log(result);
*/
var circle = require('./exp.js');
console.log(
  //'The area....' + circle.area(4) + circle.surface(3) + circle.weight(2)
  'The weight ' + circle.weight(2)
);
//let pi = undefined;

console.log('Action type is ' + circle.CartActionTypes.TOGGLE_CART_HIDDEN);

// console.log(Math.PI);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is up on port: ' + port));
