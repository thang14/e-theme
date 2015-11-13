
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModule
 */
var productModule = angular.module("app.product", ['app.variant']);

'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
productModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            /////////////
            // Product //
            ////////////

            .state("product", {
              title: "Product",
              // Use a url of "/" to set a states as the "index".
              url: "/product",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'productController',
              templateUrl: '/web/product/list.html',
            })


            //////////////////
            // Product New //
            ////////////////
            .state("product.new", {
              title: "Product new",
              // Use a url of "/" to set a states as the "index".
              url: "/new",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'productAddController',
                      templateUrl: '/web/product/add.html',
                  }
              },
            })

            //////////////////
            // Product Detail //
            ////////////////
            .state("product.detail", {
              title: "Product detail",
              // Use a url of "/" to set a states as the "index".
              url: "/:productId",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'productDetailController',
                      templateUrl: '/web/product/detail.html',
                  }
              },
            })

            //////////////////
            // Product Variant //
            ////////////////
            .state("product.detail.variant", {
              title: "Variant list",
              // Use a url of "/" to set a states as the "index".
              url: "/variant",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'variantController',
                      templateUrl: '/web/variant/list.html',
                  }
              },
            })

            //////////////////
            // Product Variant detail //
            ////////////////
            .state("product.detail.variant.new", {
              title: "Variant new",
              // Use a url of "/" to set a states as the "index".
              url: "/new",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'variantAddController',
                      templateUrl: '/web/variant/add.html',
                  }
              },
            })

            //////////////////
            // Product Variant detail //
            ////////////////
            .state("product.detail.variant.detail", {
              title: "Variant detail",
              // Use a url of "/" to set a states as the "index".
              url: "/:variantId",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'variantController',
                      templateUrl: '/web/variant/detail.html',
                  }
              },
            });
        }
    ]);

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
				template: 0,
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
			
			$scope.generateVariantOptions = function() {
				var data = $scope.variantOptionTemplateData[$scope.item.template];
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

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
    .controller('productController', [ '$scope', 'productService', 'gridService', '$state',
        function($scope, productService, gridService, $state) {
          $scope.columns = [{
            name: "id",
            enableColumnMenu: false,
            enableSorting: false,
            enableFiltering: false,
            width: '75',
          },{
            name: "photo",
            enableColumnMenu: false,
            enableSorting: false,
            enableFiltering: false,
            width: '75',
            cellTemplate: '/web/ui-grid/image-view.html',
          },{
            name: "name",
            enableCellEdit: true,
            enableColumnMenu: false,
            cellTemplate: '<div class="ngCellText ui-grid-cell-contents"><a href="javascript:void(0)"  ng-click="viewDetail(row.entity.id)">{{MODEL_COL_FIELD}}</a></div>'
          },{
            name: "price",
            enableColumnMenu: false,
            width: '100',
            enableCellEdit: true,
            editableCellTemplate: '/web/ui-grid/editor-price.html',
          },{
            name: "sale_price",
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '100',
            editableCellTemplate: '/web/ui-grid/editor-price.html',
          },{
            name: "quantity",
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '70'
          },{
            name: "status",
            type: 'boolean',
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '50',

          },{
            name: "action",
            enableColumnMenu: false,
            enableCellEdit: true,
            width: '100',
            editableCellTemplate: '/web/collection/action.html',
          }];

          $scope.onSaveRow = function(rowEntity) {
            productService.save(rowEntity);
          }

          $scope.gridOptions = gridService.gridOptions($scope);

          //load collection from remote
          $scope.load = function() {
            gridService.load($scope, productService);
          }
          $scope.load();


          $scope.viewDetail = function(id) {
            $state.transitionTo('product.detail',{
              id:id
            })
          }

          $scope.newProduct = function(id) {
            $state.transitionTo('product.new');
          }
        }
    ]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductService
 */
productModule.service('productService', ['baseService',
    function(baseService) {
        return angular.extend(baseService, {
            collectionName: "product"
        });
    }
]);


})(window, window.angular);
