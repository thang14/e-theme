'use strict';

/**
 * @name            OnhanhKernel
 * @description     resourceService
 */
angular.module('app.kernel').factory('resourceService', ['$http', 'Environment',
    function($http, Environment) {
        
        var resourceService = function(name) {
            this.resource = name;
        }
        
        resourceService.prototype = {
        
            getCollection: function($scope, pageNumber) {
                var url = Environment.settings.api + '/' + this.resource + '/?limit=' + $scope.pageLimit + '&current=' + pageNumber + '&filter=' + $scope.filter;
                return $http.get(url);
            }, 
            
            remove: function($id) {
                var url = Environment.settings.api+'/'+this.resource+'/'+$id;
                return $http.delete(url);
            },
            
            save: function(data) {
                var url = Environment.settings.api+'/'+this.resource+'/'+$id;
                return $http({
                    method: 'PUT',
                    url: url,
                    data: data
                });
            },
            
            create: function(data) {
                var url = Environment.settings.api+'/'+this.resource+'/'+$id;
                return $http({
                    method: 'POST',
                    url: url,
                    data: data
                });
            },
            
        }
    }
]);
