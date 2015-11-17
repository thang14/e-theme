'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
 kernelModule.factory('baseModel', ['collectionService'
  function() {
    
    /**
     * BaseModel Class
     */
    var BaseModel = function(data) {
      this.init();
    }
    
    /**
     * Collection Name
     */
    BaseModel.prototype.collectionName = underfiled;
    
    /**
     * Gets Collection from collection name
     */
    BaseModel.getCollection = function() {
      return collectionService.getCollection(this.collectionName);
    }
    
    /**
     * Init
     */
    BaseModel.prototype.init = function() {
      
    }
    
    /**
     * Save model
     */
    BaseModel.prototype.save = function() {
      if(this.id) {
        return this.getCollection.save(this);
      }
      return this.create(this);
    }
    
    /**
     * Create model
     */
    BaseModel.prototype.create = function(data) {
      return this.getCollection.create(data);
    }
    
    /**
     * Remove model
     */
    BaseModel.prototype.remove = function() {
      return this.getCollection.remove(this.id);
    }
    
    /**
     * New instance
     */
    BaseModel.instance = function(data) {
      if(data) {
        return new this(data);
      }
    }
    
    /**
     * New instances
     */
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
