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
        
        resourceService.prototype.create = function(data) {
            return new this.resource(data);
        }
        
        resourceService.prototype.get = function(params, callback) {
            return new this.resource.get(params, callback);
        }
        
        return resourceService;
    }
]);
