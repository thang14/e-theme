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
