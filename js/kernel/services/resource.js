'use strict';

/**
 * @name            OnhanhKernel
 * @description     resourceService
 */
angular.module('app.kernel')
.factory('resourceService', ['Environment', '$resource',
    function(Environment, $resource) {
        var resourceService = function(name) {
            var api = this.api =  Environment.settings.api + '/' + name + Environment.settings.prefix;
            this.resource = $resource(api+'/:id',{
                id:'@id'
            }, {
              charge: {
                  method:'POST', 
                  params:{
                      charge:true
                      
                  }}
            });
        };
        
        /**
         * CREATE
         */
        resourceService.prototype.create = function(data) {
            return new this.resource(data);
        }
        
        /**
         * GET
         */
        resourceService.prototype.get = function(params, callback) {
            return new this.resource.get(params, callback);
        }
        
        /**
         * UPDATE
         */
        resourceService.prototype.update = function($id, $data) {
            return new this.resource.update({id: $id}, $data);
        }
        
        
        /**
         * Remove
         */
        resourceService.prototype.remove = function($id) {
            return new this.resource.remove({id: $id}).$remove();
        }
        
        return resourceService;
    }
]);
