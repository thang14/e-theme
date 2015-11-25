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
            var Resource =  $resource(api+'/:id',{
                id:'@id'
            }, {
              charge: {
                  method:'POST', 
                  params:{
                      charge:true
                      
                  }}
            });
            
            Resource.all = function() {
                return this.query({});
            }
            
            return Resource;
        };
        
        return resourceService;
    }
]);
