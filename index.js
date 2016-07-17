
/*=============================================
=               Socket Listener              =
=============================================*/
'use strict';
const PORT = 3000;
const app = require('./server');


/*-----Actual Server (Separated for SuperTest)------*/

var server = app.listen(PORT, () => {

  var host = server.address().address;
  var port = server.address().port;
  console.log(`Server listening @ :${host}:${port}`);

}); //--------->>>>>>> I don't actually go anywhere
//==================================================

 /*=====  End of index.js  =====*/
/*==============================*/