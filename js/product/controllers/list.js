'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
	.controller('productController', ['$location', '$scope', '$rootScope', 'collectionService', 'gridService'
	    function($location, $scope, $rootScope, collectionService) {
	    	var collection = collectionService.getCollection('product');
	    	$scope.gripOptions = new gridService(collection);
	    }
	]);
