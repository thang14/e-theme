
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantModule
 */
var variantModule = angular.module("app.variant", []);


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
