'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */
productModule
	.controller('productAddController', ['$location', '$scope', '$rootScope', 'productService', 'mediaService', '$controller',
	    function($location, $scope, $rootScope, productService, mediaService, $controller) {

			$scope.route = {
                name: 'product',
                collection: productService.collectioName,
                edit: 'product.edit'
            };

            angular.extend(this, $controller('abstractDetailController', {
                $scope: $scope,
                itemService: productService
            }));

			$scope.item = {
				name: "San pham",
				variant_options: [
					['red', 'blue'],
					[33, 34, 35, 36]
				],

				variant_option_value:{
					0: 'Color',
					1: 'Size'
				},

				variants: {
					'0_3':{
						id: 1,
						price: 50000,
						sale_price: 50000,
						quantity: 5,
						variants:"0_3"
					}
				}
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
