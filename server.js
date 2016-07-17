'use strict';
/*=============================================
=            Server.js                        =
=============================================*/

  var articleRouter = require('./routes/articles_r.js');
  var productRouter = require('./routes/products_r.js');

  var express = require('express');
  var app = express();


/*---- Middleware + Routers ----*/
  app.set('view engine','jade');
  app.set('views', './templates');

  app.use('/articles', articleRouter);
  app.use('/products', productRouter);


module.exports = app; //--------->>>>>>> To index.js

 /*=====  End =====*/