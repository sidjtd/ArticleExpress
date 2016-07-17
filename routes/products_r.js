/*=============================================
=               Products Router               =
=============================================*/
var  storage = require('./../db/products_model');
var  bodyParser = require('body-parser');
var  express = require('express');
var  Router = express.Router();

/*----------  Modules  ----------*/

Router.use(bodyParser.urlencoded({extended:true}));
Router.use(bodyParser.json());

Router.get('/', (req, res) => {
  console.log("normal get");
  res.render('templates/products/index',{
    storage:storage,
  });
});

Router.get('/:id/edit', (req, res) => {
  console.log("get id edit");
  // res.render('products/edit', {
  //   //id: req.params.id,
  //   storage:storage,
  // });
});

Router.get('/new', (req, res) => {
  console.log("get new");
  // res.render('products/new');
});

Router.post('/', (req, res) => {
  console.log("normal post");
  //var id = findOpen(0, false, 'products');
  //req.body.id = id;
  // storage[id - 1] = req.body;
  // res.json({"success":true});
});

Router.put('/:id',  (req, res) => {
  console.log("just put");
  // var requested = findItem(Number(req.params.id), 'products');
  // if(typeof requested === 'number') {
  //   for(var key in req.body) {
  //     storage[requested][key] = req.body[key];
  //   }
  //   res.json({"success":true});
  // } else {
  //   res.json({"success":false});
  // }
});

Router.delete('/:id', (req, res) => {
  console.log("delete");
  // var requested = findItem(Number(req.params.id), 'products');
  // if(typeof requested === 'number') {
  //   storage.splice(requested,1);
  //   res.json({"success":true});
  // } else {
  //   res.json({"success":false});
  // }
});

module.exports = Router; //--------->>>>>>> To server.js

/*=====  End =====*/