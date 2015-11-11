'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */
productModule
	.controller('productDetailController', ['$location', '$scope', '$rootScope',"productService", 'mediaService', '$controller',
	    function($location, $scope, $rootScope, productService, mediaService, $controller) {
	    	$scope.route = {
                name: 'product',
                collection: productService.collectioName,
                edit: 'product.edit'
            };

            angular.extend(this, $controller('AbstractDetailController', {
                $scope: $scope,
                itemService: productService
            }));

            // Delete file
            var deleteFile = function (id) {
                mediaService
				.remove(id)
				.success(
                    function (data, status) {
                        notify('Attached media was removed');

                        angular.forEach($scope.item.medias, function (image, key) {
                            if (image.id === id) {
                                $scope.item.medias.splice(
                                    $scope.item.medias.indexOf(image), 1
                                );
                            }
                        });
                    }
                ).error(
                    function (data, status) {
                        if (data.error.code == 404) {
                            $state.transitionTo('home');
                            notify('404 Noting found');
                        } else {
                            notify(data.error.message);
                        }
                    }
                );
            };

			// Delete file
            $scope.fileDelete = function (id) {
                $scope.item.medias.splice(id, 1);
                $scope.editSave(deleteFile(id));
            };

			// Upload file
            $scope.fileUploaded = function (res) {
				// error
				if(res.status === 0){
					notify(res.messages);
					return;
				}

				//save iten
                $scope.item.medias.push(res.data);
                $scope.editSave();
            };

			$scope.newProduct = function(id) {
              $state.transitionTo('product.new');
            }
	    }
	]);
