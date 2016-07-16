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
      if(parseFloat(req.body.id) === productArray[i].id){
        for (var key in req.body){
          (productArray[i][key] = req.body[key]);
        }
        res.status(200).send({'sucess': true});
        return;
      }
    }
    return res.send({'sucess': false});
  }


  function deleter(req, res){
    for ( var i = 0; i < productArray.length; i++){
      if(parseFloat(req.body.id) === body.param.id){
        productArray.splice(i,1);
        res.status(200).send({'sucess': true});
        return;
      }
    return res.send({'sucess': false});
    }
  }


  function itemById(req, res){
    if(parseFloat(productArray[i].id) === body.param.id){
      return;
    }
  }

})();

