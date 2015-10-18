'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
	.controller('productController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
			$scope.gridOptions = {
				data: []
			};
			for(var i = 0; i < 10; i++) {
				$scope.gridOptions.data.push({
					name: "Ấm chén tử sa "+i,
					price: "150000",
					sale: "150000",
					quantity: 11,
				});
			}
	    }
	]);
