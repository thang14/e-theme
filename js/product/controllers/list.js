'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
	.controller('productController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
			$scope.products = [];
			for(var i = 0; i < 10; i++) {
				$scope.products.push({
					name: "Ấm chén tử sa "+i
				});
			}
	    }
	]);
