
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
              title: "Danh sách sản phẩm",
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
              title: "Sản phẩm mới",
              // Use a url of "/" to set a states as the "index".
              url: "/new",

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
            // Product Detail //
            ////////////////
            .state("product.detail", {
              title: "Chi tiết sản phẩm",
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
              title: "Chi tiết biến thể",
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


var ProductAttributes = {
    name: null,
    current: {
        price: 0,
        sale: 0,
        quantity: 1,
    },

    media_display: 0,

    medias: [{
        path:"/admin-theme/examples/images/1.jpg",
        display: true
    }, {
        path:"/admin-theme/examples/images/2.jpg",
        display: false
    }],
    description_list: [],
    description: [],
    keywords: null,
    attrs: [{}],
    variant_options: [],
    variants: [],
    status: 0,
    template: null,
}

// list template
var templates = [


    ['color_name'],
    ['size_name'],
    ['style_name'],
    ['configure_name'],


    ['color_name', 'size_name'],
    ['color_name', 'stype_name'],
    ['color_name', 'configure_name'],
    ['color_name', 'size_name', 'style_name'],
    ['color_name', 'size_name', 'configure_name'],

    ['size_name', 'style_name'],
    ['size_name', 'configure_name'],
    ['size_name', 'style_name', 'configure_name'],

    ['style_name', 'configure_name'],
];

var variantOptionValues = {
    color_name: "Màu sắc",
    size_name: "Kích thước",
    style_name: "Kiểu dáng",
    configure_name: "Cấu hình"
};

var templateValues = [
    'Màu sắc',
    'Kích thước',
    'Kiểu dáng',
    'Cấu hình',

    'Màu sắc, Kích thước',
    'Màu sắc, Kiểu dáng',
    'Màu sắc, Cấu hình',
    'Màu sắc, Kích thước, Kiểu dáng',
    'Màu sắc, Kích thước, Cấu hình',


    'Kích thước, Kiểu dáng',
    'Kích thước, Cấu hình',
    'Kích thước, Kiểu dáng, Cấu hình',

    'Kiểu dáng, Cấu hình'
];

var Controller = function($scope, $rootScope, $stateParams, $state, productService, mediaService,
 $controller, variantOption, Constants) {
    
    $scope.detail = {
        id: $stateParams.productId
    }

    /**
     * GET
     */
    if($scope.detail.id !== undefined) {
        productService.get($scope.detail.id).success(function (data, status) {
            $scope.item = data.data;
        }).error(function (data, status) {
            if (data.error.code == 404) {
                $state.transitionTo('home');
            }
        });
    } else {
        // product default attribute
        $scope.item = angular.copy(ProductAttributes);
    }

    $scope.templateValues = templateValues;

    $scope.selectTemplate = function(id) {
        if(!templates[id]) {
            $scope.item.template = null;
            $scope.item.variant_options = [];
            return;
        }
        $scope.item.variant_options = [];
        var variantOptionNames = templates[id];
        variantOptionNames.forEach(function(value, index) {
            $scope.item.variant_options.push({
                name: value,
                label: variantOptionValues[value],
                items: []
            })
        });

    }

    $scope.generateVariants = function(key, data) {
        key = key || 0;
        if(key === 0) {
            $scope.item.variants = [];
        }

        var options = $scope.item.variant_options;
        data = data || [];
        (options[key].items).forEach(function(value, index) {
            var item = angular.copy(data);
            item.push(index);
            if(!options[key + 1]) {
                $scope.item.variants.push({
                    options: item,
                    price: 0,
                    sale: 0,
                    quantity: 1,
                });
                return;
            }
            $scope.generateVariants(key + 1, item);
        });
    }

    $scope.setMediaDefault = function(index) {
        if($scope.item.media_display === index) {
            return;
        }
        $scope.item.medias[$scope.item.media_display].display = false;
        $scope.item.media_display = index;
        $scope.item.medias[index].display = true;
    }

    $scope.getVariantOptionValues = function(options) {
        var result = [];
        options.forEach(function(value, index) {
            result.push($scope.item.variant_options[index].items[value].text);
        });
        return result.join(">>");
    }

    // save data
    $scope.save = function(callback) {
        if($scope.item.id) {
            return productService.save($scope.item).success(function(res) {
                //ok
                callback ? callback(res): "";
            });
        }
        return productService.create($scope.item).success(function(res) {
            $scope.item.id = res.data.id;
            //ok
            callback ? callback(res): "";
        });
    }

    // save and finish
    $scope.saveAndFinish = function() {
        $scope.save(function(res) {
            $state.transitionTo('product');
        });
    }

    // cancel
    $scope.cancel = function() {
        $state.transitionTo('product');
    }

    // delete file
    $scope.deleteFile = function(index) {
        var media = $scope.item.medias[index];
        $scope._handleFileDelete(index);
    }

    // upload
    $scope.upload = function($files) {
        if($files) {
            $files.forEach(function(file) {
                mediaService.upload(file).success($scope._handleUploaded);
            });
        }
    }

    // on uploaded
    $scope._handleUploaded = function(data) {
        $scope.item.medias.push(data.data);
    }

    // on delete file
    $scope._handleFileDelete = function(index) {
        $scope.item.medias.splice(index, 1);
    }
}

Controller.$inject = [
    '$scope',
    '$rootScope',
    '$stateParams',
    '$state',
    'productService',
    'mediaService',
    '$controller',
    'variantOption',
    'Constants'
];

productModule
.controller('productDetailController', Controller);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
    .controller('productController', [ '$scope', 'productService', 'gridService', '$state',
        function($scope, productService, gridService, $state) {
            
            //Page Init
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            
            $scope.setPage = function(page) {
                $scope.currentPage = page;
            }
            
            $scope.pageChanged = function() {
                $scope.load();
            }
            
            //Columns
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
            cellTemplate: '<div class="ngCellText ui-grid-cell-contents">'+
                '<a href="javascript:void(0)"  ng-click="grid.appScope.viewDetail(row)">{{MODEL_COL_FIELD}}</a></div>'
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
            gridService.load($scope, productService, {
                page: $scope.currentPage
            });
          }
          $scope.load();


          $scope.viewDetail = function(row) {
            $state.transitionTo('product.detail',{
              productId:row.entity.id
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
