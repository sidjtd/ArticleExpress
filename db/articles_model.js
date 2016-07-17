'use strict';
/*=============================================
=               Articles  DataBase            =
=============================================*/
module.exports = (function(){

  var articleArray = [];
  var uniqueID = 0;

  function _post(req, res){
    req.body.id = uniqueID++;
    articleArray.push(req.body);
    res.send({'success': true});
  }

  function _put(req, res){
    for ( var i = 0; i < articleArray.length; i++){
      if(parseFloat(req.body.id) === articleArray[i].id){
        for (var key in req.body){
          (articleArray[i][key] = req.body[key]);
        }
        res.status(200).send({'success': true});
        return;
      }
    }
    return res.send({'success': false});
  }

  function _deleter(req, res){
    for ( var i = 0; i < articleArray.length; i++){
      if(parseFloat(req.body.id) === body.param.id){
        articleArray.splice(i,1);
        res.status(200).send({'success': true});
        return;
      }
    return res.send({'success': false});
    }
  }

  function _itemById(req, res){
    if(parseFloat(articleArray[i].id) === body.param.id){
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
