'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */
productModule.factory('Model', [
  
  function Model(resource) {
    this.items = [];
    this.current = null;
    this.total = 0;
    this.resource = resource;
  }
  
  Model.prototype.$get = function(id) {
    if(id == undefined) {
      this.current = new this.resource();
    }
    this.current = this.resource.$get({id: id});
  }
  
  Model.prototype.$load = function(params) {
    this.items = [];
    this.resource.$get(params, function(res) {
      this.items.push(new this.resource(res.items));
      this.total = res.total;
    }.bind(this));
  }
  
  return Model;
]);
