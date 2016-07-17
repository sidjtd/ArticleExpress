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

/*--------   POST   ----------*/
Router.post('/', (req, res) => {
  console.log("normal postA");
  var title = findOpen(0, false, 'articles');
  req.body.urlTitle = encodeURI(req.body.title);
  req.body.title = title;
  storage[title - 1] = req.body;
  res.json({"success":true});
});

/*--------    PUT   ----------*/
Router.put('/:title', (req,res) => {
  console.log("putA");
  var requested = findItem(req.params.title, 'articles');
  if(typeof requested === 'number') {
    for(var key in req.body) {
      storage[requested][key] = req.body[key];
    }
    res.json({"success":true});
  } else {
    res.json({"success":false});
  }
});

/*--------    DELETE    ----------*/
Router.delete('/:title', (req, res) => {
  console.log("delete");
  var requested = findItem(Number(req.params.title), 'articles');
  if(typeof requested === 'number') {
    storage.splice(requested,1);
    res.json({"success":true});
  } else {
    res.json({"success":false});
  }
});

/*--------   GET   ----------*/
Router.get('/', (req, res) => {
  console.log("normal getA");
  res.render('./articles/index',{
  });
});

Router.get('/:title/edit', (req, res) => {
  console.log("title getA");
  res.render('articles/edit', {
    title: req.params.title,
  });
});

Router.get('/new', (req,res) => {
  console.log("new getA");
  res.render('articles/new');
});

module.exports = Router; //--------->>>>>>> To server.js

//*=====  End =======