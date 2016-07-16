/*
-----------------------------------------------------
|      COUNTER
_____________________________________________________
-----------------------------------------------------  */
var express = require('express');
var Router = express.Router();
var bodyParser = require('body-parser');
var writeFile = require('fs').writeFile;

var counter = 0;
/*                ROUTER!
 ____________________________________________________
 ----------------------------------------------------  */
//Router specific Middleware
Router.use(bodyParser.json());

// function validatePayload(req, res, next){
//   if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('age')) {
//   }
//   return next();
// }
//--------
var keysToCheckArr = ['name','age'];

function validatePayload(keysToCheckArr){
  return function (erq, res, next) {
    if (err) {
      return res.send('CANNOT WRITE FILE');
    }
  };
  return next();
}

//-------
function logIP (req, res, next) {
  writeFile('./logs/log', req.ip, function(err) {
    if (err) {
      return res.send('CANNOT WRITE FILE');
    }
    return next();
  });
}

function isAPIKeyInURL (req, res, next) {
  if(!req.query.hasOwnProperty('apiKey')){
  return res.send('YOU NEED AN API BRUH');
  }
  next();
}

Router.post('/test',
  isAPIKeyInURL,
  logIP,
  validatePayload(['name', 'age']),
  function (req, res){
  res.send(res.body);
  }
);

Router.post('/test', validatePayload, function(req, res){
  res.send(req.send);
}

Router.get('/', (req, res) => {
  res.send(`counter is currently: ${counter}`);
});

Router.get('/increment', (req, res) => {
  counter++;
  res.send(`counter is currently: ${counter}`);
});

Router.get('/decrement', (req, res) => {
  counter--;
  res.send(`counter is currently: ${counter}`);
});

Router.get('/double', (req, res) => {
  counter = counter*2;
  res.send(`counter is currently: ${counter}`);
});

/*___________________________________________________
  --------------------------------------------------- */
