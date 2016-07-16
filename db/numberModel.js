module.exports = (function() {

  var numberStorage = [];




  function _getById(idToFind, callback) {
    for ( var i = 0; i <idtToFind.length; i++){
      // found that num? sweet
      return callback(null, numberStorage[i]);
    }
  }

  function _getAll(callback){

    if (!numberStorage.length) {
      return callback('Over');
    }
    return callback(null, numberStorage);
  }

  return {

    getById: _getById,

    getAll: _getAll

  };





})();
