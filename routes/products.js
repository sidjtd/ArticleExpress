'use strict'
/*
-----------------------------------------------------
|                     ROUTER
_____________________________________________________
---------------------------------------------------*/
var exp = require('express');
var Router = exp.Router();
var parser = require('body-parser');
var writeF = require('fs').writeF;
const app = require('../server');

// Router.use(parser.json());

// var keysToCheckArr = ['name','age'];

// function validatePayload(keysToCheckArr){
//   return function (erq, res, next) {
//     if (err) {
//       return res.send('CANNOT WRITE FILE');
//     }
//   };
//   return next();
// }



Router.post('/products', (req, res) => {
  console.log(res.send);
  console.log(req.send);
  res.send(req.send);
});



// Router.post('/test',
//   isAPIKeyInURL,
//   logIP,
//   validatePayload(['name', 'age']),
//   function (req, res){
//   res.send(res.body);
//   }
// );


// Router.get('/', (req, res) => {
//   res.send(`counter is currently: ${counter}`);
// });

// Router.get('/increment', (req, res) => {
//   counter++;
//   res.send(`counter is currently: ${counter}`);
// });

// Router.get('/decrement', (req, res) => {
//   counter--;
//   res.send(`counter is currently: ${counter}`);
// });

// Router.get('/double', (req, res) => {
//   counter = counter*2;
//   res.send(`counter is currently: ${counter}`);
// });

// /*___________________________________________________
//   --------------------------------------------------- */


module.exports = PRouter;