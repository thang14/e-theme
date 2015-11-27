
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
var kernelModule = angular.module('app.kernel', [
	'ngResource',
	'ui.bootstrap',
	'ui.grid',
	'ui.grid.edit',
]);


'use strict';

/**
 * @name            OnhanhKernel
 * @description     ...
 */
kernelModule.config(['$provide', '$urlRouterProvider',
        function($provide, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        }
    ]);
'use strict';

/**
 * @name            OnhanhKernel
 * @description     Most important data are loaded here
 */

kernelModule
  .service('initService', ['$http', '$rootScope', 'Environment',
      function ($http, $rootScope, Environment) {
          return {
              launch: function () {
                  $rootScope.domain = Environment.settings.domain;
              }
          }
      }
  ]);

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


})(window, _, window.angular);
