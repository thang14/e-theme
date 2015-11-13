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
		'variantOption',
		'Constants',
	    function(
	    	$location,
	    	$scope,
	    	$rootScope,
	    	productService,
	    	mediaService,
	    	$controller,
	    	variantOption,
	    	Constants) {

			$scope.route = {
                name: 'product',
                collection: productService.collectioName,
                edit: 'product.edit'
            };

            $scope.variantOption = variantOption;

			$scope.item = {
				name:'fdsfdsfds',
				branh: "",
				variant_options: [],
				variant_option_values:[],
				variant_option_names: [],
				description_list: [],
				attrs: [{}],
				current: {
					medias: [],
					price: 0,
					sale_price: 0,
					sale_start: 0,
					sale_end: 0,
					quantity: 1,
					sku: '',
				},
				variants:[],
				template: null,
			}

			angular.extend(this, $controller('abstractDetailController', {
                $scope: $scope,
                itemService: productService
            }));
			
			$scope.variantOptionTemplates = [
				'Size',
				'Color',
				'Style',
				'Color and Size',
				'Color and Style',
				'Color, Size, and Style',
				'Size and Style'
			];
			
			
			$scope.variantOptionTemplateData = [
				['size_name'],
				['color_name'],
				['style_name'],
				['color_name', 'size_name'],
				['color_name', 'style_name'],
				['color_name', 'size_name', 'style_name'],
				['size_name', 'style_name'],
			];
			
			$scope.variantOptionLabels = {
				size_name: 'Size',
				color_name: "Color",
				style_name: "Style"
			};
			
			$scope.generateVariantOptions = function(id) {
				if(!$scope.variantOptionTemplateData[id]) {
					$scope.item.template = null;
					return;
				}
				var data = $scope.variantOptionTemplateData[id];
				data.forEach(function(value, index) {
					$scope.item.variant_options.push('');
				});
			}
			
			$scope.removeVariantOption = function(option) {
				var index = $scope.item.variant_options.indexOf(option);
				$scope.item.variant_options.splice(index, 1);
			}
			
			$scope.removeVariant = function(variant) {
				var index = $scope.item.variants.indexOf(variant);
				$scope.item.variants.splice(index, 1);
			}
			
			// delete file
			var deleteFile = function(id) {
				mediaService.remove(id)
				.success(function(res) {
					var index = $scope.item.current.medias.indexOf(id);
					$scope.item.current.medias.splice(index, 1);
				})
			}

			// file delete
			$scope.fileDelete = function(id) {
				deleteFile(id);
			}

			// file uploaded
			$scope.fileUploaded = function(res) {
				if(res.status === Constants.SUCCESS) {
					$scope.item.current.medias.push(res.data);
				} else {
					notify(res.messages);
				}
			}

			$scope.newProduct = function(id) {
              $state.transitionTo('product.new');
            }
	    }
	]);
