'use strict';

/**
 * @name            OnhanhKernel
 * @description     resourceService
 */
angular.module('app.kernel')
.factory('resourceService', ['$http', 'Environment', '$resource'
    function($resource, Environment) {

        var resourceService = function(name) {
            this.resource = name;
            this.api = Environment.settings.api + '/' + name + Environment.settings.prefix;
        }

        resourceService.prototype = {
            
            /**
             * findAll 
             */
            findAll: function(conditions) {
                var url = this.api+'?limit='+conditions.limit+'?page='+conditions.page+'?q='+conditions.text;
                return $resource(url).get();
            },
            
            findOne: function($id) {
                var url = this.api+'/:id';
                return $resource(url).get({id: $id});
            },


        }

        return resourceService;
    }
]);
