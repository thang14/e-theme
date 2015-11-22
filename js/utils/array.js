use strict';

/**
 * @name            OnhanhUtil
 * @description     ...
 */
utilModule
.factory('ArrayUtil', function() {
  var ArrayUtil = {};
  
  ArrayUtil.index = function(arr, field, joinPrefix) {
    joinPrefix = joinPrefix || '_';
    return arr.map(function(obj) {
      var rObj = {};
      var data = field[field];
      if(typeof data === Array) {
        data = data.join(joinPrefix);
      }
      return rObj;
    })
  }
  
  return ArrayUtil;
});
