'use strict';
/*=============================================
=               Products DataBase             =
=============================================*/
module.exports = (function(){

  var productArray = [];
  var uniqueID = 0;

  function _post(req, res){
    req.body.id = uniqueID++;
    productArray.push(req.body);
    res.send({'success': true});
  }

  function _put(req, res){
    for ( var i = 0; i < productArray.length; i++){
      if(parseFloat(req.body.id) === productArray[i].id){
        for (var key in req.body){
          (productArray[i][key] = req.body[key]);
        }
        res.status(200).send({'success': true});
        return;
      }
    }
    return res.send({'success': false});
  }

  function _deleter(req, res){
    for ( var i = 0; i < productArray.length; i++){
      if(parseFloat(req.body.id) === body.param.id){
        productArray.splice(i,1);
        res.status(200).send({'success': true});
        return;
      }
    return res.send({'success': false});
    }
  }

  function _itemById(req, res){
    if(parseFloat(productArray[i].id) === body.param.id){
      return;
    }
  }

  return {
    post: _post,
    put: _put,
    delete: _deleter,
    find: _itemById
  };

})();

