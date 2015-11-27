
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantModule
 */
var variantModule = angular.module("app.variant", []);


/**
 * Variant Option
 */
variantModule.factory('variantOption', [
    function() {
      var variantOption = {
          options: [{
              name: 'color_name',
              value: "Color",
              items: ['Red', 'Blur', 'While']
          },{
              name: 'size_name',
              value: "Size",
              items: [33, 34, 35]
          },{
              name: 'style_name',
              value: "Style",
              items: ['15 inch', '13.5 inch', '13 inch']
          }]
      }
      return variantOption;
    }
  ]);


'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantConfig
 */
variantModule
    .config(['$stateProvider',
        function($stateProvider) {
        }
    ]);

'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantAddController
 */
variantModule
	.controller('variantAddController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
	    	
	    }
	]);

'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantDetailController
 */
variantModule
	.controller('variantDetailController', ['$location', '$scope', '$rootScope', 'variantService', '$controller',
	    function($location, $scope, $rootScope, variantService, $controller) {

	    	$scope.route = {
	    		name: "variant",
	    		collection: variantService.collectionName
	    	};

	    	angular.extend(this, $controller('AbstractDetailsNodeCtrl', {
	    		$scope: $scope,
	    		itemService: variantService
	    	}));

	    	$scope.fileUploaded = function($message){
	    		$scope.item.medias.push($message);
	    		$scope.editSave();
	    	}
	    }
	]);

'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantListController
 */
variantModule
	.controller('variantController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
	    	
	    }
	]);

'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantService
 */
variantModule.service('variantService', ['baseService',
    function(service, collectionService) {
        return angular.extend(baseService, {
            collectionName: "variant"
        });
    }
]);


})(window, window.angular);
