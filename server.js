'use strict';

var exp = require('express');
var app = exp();
var parser = require('body-parser');
var prodMod = require('./db/productModel');
var methodOverride = require('method-override');

//var methodOverride = require('method-override');

app.set('view engine','jade');
app.set('views', './templates');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true})); // <Catches incoming res, does action on it.
//app.use(exp.static('public')); // <This sends 404 when it can't find req in public/elsewhere:)


app.get('/products', (req, res) => {
  res.render('product/index', {
    products: prodMod.productHolder
  });
});

app.get('/products/:id/edit', (req, res) => {
  var allProducts = prodMod.all();
  res.render('products/edit', {
    products: prodMod.productHolder,
    id: req.params.id
  });
});

app.get('/products/new', (req, res) => {
  res.render('products/new', {

  });
});

app.post('/products', (req, res) => {
  var allProducts = prodMod.all();
  res.render('index', {
    products: prodMod.productHolder
  });
});

module.exports = app;