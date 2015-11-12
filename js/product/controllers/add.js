'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */
productModule
	.controller('productAddController', [
		'$location', 
		'$scope', 
		'$rootScope', 
		'productService', 
		'mediaService', 
		'$controller',
		'variantOption'
	    function(
	    	$location, 
	    	$scope, 
	    	$rootScope, 
	    	productService, 
	    	mediaService, 
	    	$controller,
	    	variantOption) {

			$scope.route = {
                name: 'product',
                collection: productService.collectioName,
                edit: 'product.edit'
            };

            angular.extend(this, $controller('abstractDetailController', {
                $scope: $scope,
                itemService: productService
            }));
            
            
            $scope.variantOption = variantOption;

			$scope.item = {
				name:'',
				variant_options: []
				variant_option_values:[],
				variant_option_names: [],
				current: {}
				variants:[]
			}

			// delete file
			var deleteFile = function(id) {
				mediaService.remove(id).success(function(res) {
					var index = $scope.medias.indexOf(id);
					$scope.item.medias.splice(index, 1);
				})
			}

			// file delete
			$scope.fileDelete = function(id) {
				deleteFile(id);
			}

			// file uploaded
			$scope.fileUploaded = function(res) {
				if(res.status === 1) {
					$scope.items.medias.push(res.data);
				} else {
					notify(res.messages);
				}
			}

			$scope.newProduct = function(id) {
              $state.transitionTo('product.new');
            }
	    }
	]);
