
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
	'ui.grid.selection'
]);


'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
kernelModule.directive('dateInterval', ["$interval", "$filter", function ($interval, $filter) {

	// Gets current time
	function getCurrentTime() {
		var time = new Date().getTime();
        return Math.round(time / 1000);
	}

	// Change time
	function changeTime(element, time) {
		var currentTime = getCurrentTime();
		var seconds = currentTime - time;
		var text;
		if(seconds < 60) {
			text = 'The few seconds ago';
		} else if(seconds*60 < 60) {
			text = seconds*60 + ' last minute';
		}else if(seconds*60*60 < 60) {
			text = seconds*60*60 + ' hours ago';
		}else {
			text = $filter('date')(time * 1000, 'HH:mm, dd/MM/yyyy');
		}
		element.text(text);
	}


    function link(scope, element, attrs) {
    	var timeoutId = null;
        scope.$watch(attrs.dateInterval, function (value) {
            changeTime(element, value);
            timeoutId = $interval(function () {
            	changeTime(element, value);
            }, 60000);
        });

        element.on('$destroy', function () {
            $interval.cancel(timeoutId);
        });

    }

    return {
        link: link
    };
}]);

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
            var api = Environment.settings.api + '/' + name + Environment.settings.prefix;
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
