/*=============================================
=               Articles Router               =
=============================================*/
var  storage = require('./../db/articles_model');
var  bodyParser = require('body-parser');
var  express = require('express');
var  Router = express.Router();

/*----------  Modules  ----------*/

Router.use(bodyParser.urlencoded({extended:true}));
Router.use(bodyParser.json());

Router.get('/', (req, res) => {
  console.log("normal getA");
  res.render('./articles/index',{
    storage:storage,
  });
});

Router.get('/:title/edit', (req, res) => {
  console.log("title getA");
  // res.render('articles/edit', {
  //   title: req.params.title,
  //   storage:storage,
  // });
});

Router.get('/new', (req,res) => {
  console.log("new getA");
  // res.render('articles/new');
});

Router.post('/', (req, res) => {
  console.log("normal postA");
  //var title = findOpen(0, false, 'articles');
  // req.body.urlTitle = encodeURI(req.body.title);
  // req.body.title = title;
  // storage[title - 1] = req.body;
  // res.json({"success":true});
});

Router.put('/:title', (req,res) => {
  console.log("putA");
  //var requested = findItem(req.params.title, 'articles');
  // if(typeof requested === 'number') {
  //   for(var key in req.body) {
  //     storage[requested][key] = req.body[key];
  //   }
  //   res.json({"success":true});
  // } else {
  //   res.json({"success":false});
  // }
});

Router.delete('/:title', (req, res) => {
  console.log("delete");
  //var requested = findItem(Number(req.params.title), 'articles');
  // if(typeof requested === 'number') {
  //   storage.splice(requested,1);
  //   res.json({"success":true});
  // } else {
  //   res.json({"success":false});
  // }
});

module.exports = Router; //--------->>>>>>> To server.js

//*=====  End =======