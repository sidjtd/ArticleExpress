'use strict';

var parser = require('body-parser');
var exp = require('express');
var app = exp();
var pMod = require('./db/productModel');

//var methodOverride = require('method-override');


app.use(exp.static('public')); // <This sends 404 when it can't find req in public/elsewhere:)
app.use(parser.urlencoded({ extended: true})); // <Catches incoming res, does action on it.

app.set('view engine','jade');
app.set('views', './templates');


app.get('/products', (req, res) => {
  var allProducts = pMod.all();
  res.render('index', {
    products: allProducts
  });
});

module.exports = app;