'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
 kernelModule.factory('baseModel', [
  function() {
    
    var BaseModel = function(data) {
      this.init(data);
    }
    
    BaseModel.prototype.init = function(data) {
      
    }
    
    BaseModel.instance = function(data) {
      if(data) {
        this.data = new this(data);
      }
    }
    return BaseModel;
  }
]);
