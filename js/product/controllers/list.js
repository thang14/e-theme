'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
	.controller('productController', ['$location', '$scope', '$rootScope', 'productService', 'gridService'
	    function($location, $scope, $rootScope, productService, gridService) {
	    	$scope.columns = [{
                name: 'id',
                enableColumnMenu: false,
                width: '100'
            }, {
	    		name: "photo",
	    		enableSorting: false,
                enableFiltering: false,
                enableColumnMenu: false,
                width: '75',
                cellTemplate: '<img ng-src="getPhotoDefault(row.entity.photos)"/>'
	    	}, {
	    		name:"name",
	    		enableColumnMenu: false,
	    		cellTemplate: '<a href="row.entity.url">row.entity.name</a>'
	    	}, {
                price: 'price',
                enableColumnMenu: false,
                width: '100'
            }, {
                name: 'action',
                enableSorting: false,
                enableFiltering: false,
                enableColumnMenu: false,
                width: '100',
                cellTemplate: gridService.actionTemplate()
            }];
	    	
	    	$scope.gripOptions = gridService.gripOptions();
	    	
	    	// === Load collection from remote ===
	    	$scope.load = function() {
	    		gridService.load($scope, productService);
	    	}
	    	$scope.load();
	    	
	    	
	    	$scope.getPhotoDefault = function(photos) {
	    		return photos[0].url;
	    	}
	    	
	    }
	]);
