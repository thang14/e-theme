'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
	.controller('productController', ['$location', '$scope', '$rootScope', 'collectionService', 'gridService'
	    function($location, $scope, $rootScope, collectionService) {
	    	var collection = collectionService.getCollection('product');
	    	$scope.gripOptions = gridService.gripOptions();
	    	
	    	// === Load collection from remote ===
	    	$scope.load = function() {
				gridService.load($scope, collection);		
	    	}
	    	$scope.load();
	    }
	]);
