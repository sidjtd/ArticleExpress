module.exports = (function(){
var productHolder = [];



function _all(){
  return productHolder;
}

return {
  all:_all

};

})();


module.exports = (function() {

//   var numberStorage = [];
//   // ^ I'm some sort of storage



//   function _getById(idToFind, callback) {
//     for ( var i = 0; i <idToFind; i++){
//       return callback(null, numberStorage[i]);
//       // found that num? sweet
//     }
//   }

//   function _getAll(callback){

//     if (!numberStorage.length) {
//       return callback('Over');
//     }
//     return callback(null, numberStorage);
//   }



//   // This just automatically starts the functions above
//   // cuz key name activates _score name
//   return {

//     getById: _getById,

//     getAll: _getAll

//   };
// })();
