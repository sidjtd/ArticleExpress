'use strict';
// const exp = require('express');
// const app = exp();
const app = require('./server');

  //Bring that server.js in as APP

const PORT = 3000;


 /*    Actual Server (Separated for Test Purposes)

 ____________________________________________________
 ---------------------------------------------------*/


var server = app.listen(PORT, function (){

  var host = server.address().address;

  var port = server.address().port;

  console.log(`Server listening @ :${host}:${port}`);


}); // server---<<<
