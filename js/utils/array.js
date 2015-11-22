"use strict";

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
      var index = field[field];
      if(typeof index === Array) {
        index = data.join(joinPrefix);
      }
      rObj[index] = obj;
      return rObj;
    })
  }
  
  return ArrayUtil;
});
