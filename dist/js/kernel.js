
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
	var intervalNumber = 60000;
	var getCurrentTime = function() {
		var time = new Date().getTime();
        return Math.round(time / 1000);
	}
	var getSeconds = function(time) {
		var currentTime = getCurrentTime();
		return currentTime - time;
	}
	var canIterval = function(seconds) {
		return (seconds*60 > 30);
	}
	var changeTime = function(element, time) {
		var seconds = getSeconds();
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
	var link = function(scope, element, attrs) {
    	var timeoutId = null;
        scope.$watch(attrs.dateInterval, function (value) {
            changeTime(element, value);
            if(canIterval(getSeconds(value))) {
            	timeoutId = $interval(function () {
	            	changeTime(element, value);
	            }, intervalNumber);
            }
        });

        element.on('$destroy', function () {
        	if(timeoutId != null) {
        		$interval.cancel(timeoutId);
        	}
        });

    }

    return {
        link: link
    };
}]);

'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
kernelModule.directive('siderbar', ["$interval", "$filter", function ($interval, $filter) {
	var currentSub = null;
	// Reset navbar
	var resetNav = function(element, active) {
		var $this = active;
		if(currentSub !== null) {
			$(element).removeClass('next-nav--is-expanded');
			currentSub.hide();
		}
		currentSub = $this.find('ul');
		if(currentSub.length == 0) {
			currentSub = null;
		} else {
			$(element).addClass('next-nav--is-expanded');
			currentSub.show();
		}
	}

	var link = function(scope, element, attrs) {
		// Show current sub menu

		var elementActive = $(element).find('li.item.active');
		resetNav(element, elementActive);

		$(element).find("li.item").click(function(e) {
			resetNav(element, $(this));
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
 * @description     kernelModule
 */
 kernelModule.factory('grid', [function() {
 	var defaults = {
 		selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: true,
        exporterMenuCsv: false,
        enableGridMenu: false,
        useExternalFiltering: false,
        enableColumnMenus: false,
        enableScrollbars: false,
        enableHorizontalScrollbar: 0, 
        enableVerticalScrollbar: 0,
 	}
 	var gridFactory = function(resource, options) {
 		this.resource = resource;
 		this.options = angular.extend(angular.copy(defaults), options);
 	}

 	/**
 	 * Load data 
 	 * @param Object params
 	 */
 	gridFactory.prototype.load = function(params) {
 		var res = this.resource.get(params, function() {
 			this.options.data= res.data;
 			this.options.totalItems = res.total;
 		}.bind(this));
 	}



 	/**
 	 * Load data 
 	 * @param Object params
 	 */
 	gridFactory.prototype.gridOptions = function() {
 		return this.options;
 	}

 	return gridFactory;
 }])
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
                  $rootScope.locale = Environment.settings.locale;
                  $rootScope.currency = Environment.settings.currency;
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
