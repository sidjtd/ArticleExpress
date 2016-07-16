'use strict';
var parser = require('body-parser');
var exp = require('express');
var app = exp();

var store = {};

function randomNum() {
  return Math.floor(100000*Math.random());
}
 /* -------------------------------------
 |              MIDDLEWARE              |
 ____________________________________________________
 ----------------------------------------------------  */

app.use(exp.static('public')); // <This sends 404 when it can't find req in public/elsewhere:)
app.use(parser.urlencoded({ extended: true})); // <Catches incoming res, does action on it.

/* --------------------------------------
 |                EXPRESS               |
 ____________________________________________________
 ----------------------------------------------------  */


//THIS IS WORKING YAYAYAYAYAYAYAY
app.get('/products', (req, res) => {
  res.send('./templates/index.jade');
});


app.post('/', (req, res) => {
  var newId = randomNum();
 store.newId.req.body = req.body;
  console.log(req.body);
  return res.json({"success" : true});  // Then return "json success"

});






// app.put('/:id', (req, res) => {
//   return res.json({"success" : true});  // Then return "json success"
// });







// var Articles = require('./db/articles.js');

// var app;
// // returns the entire collection

// // Articles.all();

// // adds a new article to the collection

// // Articles.add({});

// // returns the correct object from the collection

// // Articles.getByTitle('The%20Best%20Magpie%20Developer%20of%202016');

// // finds an article in the collection by its title, if found - updates the article based on object passed as the second parameter then returns `true`
// // in the example below, it would change the title.
// // if the article is not found, returns `false`

// // Articles.editByTitle('The%20Best%20Magpie%20Developer%20of%202016', { title: "..."});

module.exports = app;