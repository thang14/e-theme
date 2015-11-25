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
            
            Resource.all = function(a1, a2) {
                return this.query({}, a1, a2);
            }
            
            Resource.prototype.$id = function() {
                if(!angular.isUndefined(this.id)) {
                    return this.id;
                }
                return false;
            }
            
            return Resource;
        };
        
        return resourceService;
    }
]);
