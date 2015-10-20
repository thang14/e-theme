'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
 kernelModule.factory('baseModel', ['collectionService'
  function() {
    
    var BaseModel = function(data) {
      this.init(data);
    }
    
    BaseModel.collectionName = underfiled;
    
    BaseModel.getCollection = function() {
      return collectionService.getCollection(this.collectionName);
    }
    
    BaseModel.prototype.init = function(data) {
      
    }
    
    BaseModel.prototype.save = function() {
      
    }
    
    BaseModel.prototype.create = function() {
      
    }
    
    BaseModel.prototype.remove = function() {
      
    }
    
    BaseModel.instance = function(data) {
      if(data) {
        this.data = new this(data);
      }
    }
    
    BaseModel.instances = function(data) {
      var results = [];
      if(data) {
        data.forEach(function(item) {
          results.push(this.instance(item));
        });
      }
      return results;
    }
    return BaseModel;
  }
]);
