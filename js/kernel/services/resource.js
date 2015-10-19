'use strict';

/**
 * @name            OnhanhKernel
 * @description     resourceService
 */
angular.module('app.kernel').factory('resourceService', ['$http', 'Environment',
    function($http, Environment) {
        
        var resourceService = function(name) {
            this.resource = name;
            this.api = Environment.settings.api + '/' + name+Environment.settings.prefix;
        }
        
        resourceService.prototype = {
        
            find: function(params) {
                return $http.get(this.api, params);
            }, 
            
            remove: function($id) {
                return $http.delete(this.api+'/'+$id);
            },
            
            save: function(data) {
                var url = this.api+'/'+data.id;
                return $http({
                    method: 'PUT',
                    url: url,
                    data: data
                });
            },
            
            create: function(data) {
                var url = this.api;
                return $http({
                    method: 'POST',
                    url: url,
                    data: data
                });
            },
            
        }
        
        return resourceService;
    }
]);
