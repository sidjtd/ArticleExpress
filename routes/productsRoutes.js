module.exports = (function(){

var productArray = [];
var uniqueID = 0;

function post(req, res){
  req.body.id = uniqueID++;
  productArray.push(req.body);
  res.send({'sucess': true});
}

function put(req, res){
  for ( var i = 0; i < productArray.length; i++){
    if(parseFloat(req.body.id)=== productArray[i].id)
      for (var key in req.body){
        (productArray[i][key] = req.body[key]);
    }
    return res.send({'sucess': true});
  }
    return res.send({'sucess': false});
}


function delete(req, res){

};


function itemById(req, res){

}


})();
