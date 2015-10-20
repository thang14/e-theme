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
      return this.getCollection.save(this);
    }
    
    BaseModel.prototype.create = function() {
      return this.getCollection.create(this);
    }
    
    BaseModel.prototype.remove = function() {
      return this.getCollection.remove(this.id);
    }
    
    BaseModel.instance = function(data) {
      if(data) {
        return new this(data);
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
