'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantDetailController
 */
variantModule
	.controller('variantDetailController', ['$location', '$scope', '$rootScope', 'variantService'
	    function($location, $scope, $rootScope, variantService) {
	    	$scope.route = {
                name: 'variant',
                collection: 'products',
                edit: 'product.detail.variant.detail'
            };
            
            angular.extend(this, $controller('AbstractDetailsNodeCtrl', {
                $scope: $scope,
                itemService: variantService
            }));
            
	    	$scope.fileUploaded = function ($file, $message, $flow) {
                var image = JSON.parse($message);
                $scope.item.medias.push(image);
                $scope.editSave();
            };
	    }
	]);
