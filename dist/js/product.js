
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModule
 */
var productModule = angular.module("app.product", [
  
  // App Module
  'app.media',
  'app.section',
  'app.kernel',
  
  
  'ui.utils.masks',
  'ngTagsInput',
  'cgNotify',
]);

'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
productModule
    .config(['$stateProvider',
        function($stateProvider) {
            
            var getSections = ['Sections', function(Sections) {
               return Sections.query(); 
            }];
            
            var getProductId = ['$stateParams', function($stateParams) {
               return $stateParams.id; 
            }];
            
            var getVariantId = ['$stateParams', function($stateParams) {
               return $stateParams.variantId; 
            }];
            
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
              
              resolve: {
                  gridOptions:['productGrid', '$scope', function(productGrid, $scope) {
                    return productGrid.gridOptions($scope);
                  }],
              }
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
              
              resolve: {
                  productItem:['Products', 'Variants', function(Products, Variants) {
                    return new Products({
                        variant: new Variants()
                    });
                  }],
                  sections: getSections,
              }
            })

            //////////////////
            // Product Detail //
            ////////////////
            .state("product.detail", {
              title: "Chi tiết sản phẩm",
              // Use a url of "/" to set a states as the "index".
              url: "/:id",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'productDetailController',
                      templateUrl: '/web/product/detail.html',
                      resolve: {
                          productId: getProductId(),
                          productItem:['Products', 'productId', function(Products, productId, variants) {
                            var item = Products.get({id:productId}, function() {
                                item.variants = variants;
                            });
                            return item;
                          }],
                          
                          variants:['Variants', 'productId', function(Variants, productId) {
                            return Variants.query({product_id:productId});
                          }],
                          
                          sections: getSections,
                      }
                  }
              },
            })
            
            //////////////////
            // Product Detail //
            ////////////////
            .state("product.detail.variant.new", {
              title: "Thên biến thể",
              // Use a url of "/" to set a states as the "index".
              url: "/new",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'variantDetailController',
                      templateUrl: '/web/product/variant/detail.html',
                      resolve: {
                          variantItem:['Variants', function(Variants, productItem) {
                            return new Variants({
                                product_id: productItem.id
                            })
                          }],
                      }
                  }
              },
            })
            
            //////////////////
            // Product Detail //
            ////////////////
            .state("product.detail.variant.detail", {
              title: "Thên biến thể",
              // Use a url of "/" to set a states as the "index".
              url: "/:variantId",

              views: {
                  "@" : {
                      // Example of an inline template string. By default, templates
                      // will populate the ui-view within the parent state's template.
                      // For top level states, like this one, the parent template is
                      // the index.html file. So this template will be inserted into the
                      // ui-view within index.html.
                      controller: 'variantDetailController',
                      templateUrl: '/web/product/variant/detail.html',
                      resolve: {
                          variantId: getVariantId(),
                          variantItem:['variants', 'variantId', function(variants, productItem, variantId) {
                            return _.find(variants, function(obj) {
                                return (obj.id == variantId);
                            });
                          }],
                      }
                  }
              },
            })
        }
    ]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */
 
productModule

/**
 * Product Detail Controller
 */
.controller('productDetailController', [
 '$scope', 
 '$state',  
 'productItem', 
 'sections', 
 'i18nNotifications', 
 '$uibModal',
  function($scope, $state, productItem, sections, i18nNotifications, $uibModal) {
      
    var product = $scope.product = productItem;
    
    $scope.sections = sections;
    
    //onSaveAndFinish
    var goBack = function() {
        $state.go('product');
    }
    $scop.onDelete = goBack;
    $scope.onSaveAndFinish = goBack;
    
    
    /**
     * ACTIONS
     * -----------------------------------------------
     */
    $scope.newVariant = function() {
      $state.go('product.detail.variant.new');
    }
    
    $scope.viewVariant = function(id) {
      $state.go('product.detail.variant.detail', {
        variantId: id
      });
    }
    
    $scope.variantMedias = function(variant) {
      return modal({
        templateUrl: '/web/product/modal/media-list.html',
        controller: 'mediaListController',
        resolve: {
          variant: function () {
            return variant;
          }
        }
      })
    }
    
    $scope.variantDetail = function(variant) {
      return modal({
        templateUrl: '/web/product/modal/variant-detail.html',
        controller: 'variantDetailController',
        resolve: {
          variant: function () {
            return variant;
          },
          
          product: function () {
            return product;
          }
        }
      })
    }
    
    $scope.variantNew = function() {
      return modal({
        templateUrl: '/web/product/modal/variant-detail.html',
        controller: 'variantDetailController',
        resolve: {
          variant: ['product', 'Variants', function (product, Variants) {
            return new Variants({
              product_id: product.$id(),
            });
          }],
          
          product: function () {
            return product;
          }
        }
      })
    }
    
    var modal = function(options) {
      options = options || {};
      return {
        open: function(size) {
          var defaults = {
            animation: true,
            size: size,
          }
          return $uibModal.open(angular.extend(defaults, options));

        }
      }
    }
    
  }
])


.controller('variantDetailController', [
   '$scope', 
   '$state',
   'variant', 
   'product', 
   function($scope, $state, variant, product) {
    $scope.variant = variant;
    $scope.product = product;
    
    var options = $scope.options = product.variant_options;
    
    $scope.$watch('option', function(option) {
      option.forEach(function(value, index) {
        var idx = options[index].indexOf(value);
        if(idx === -1) {
          options[index].push(value);
          idx = options[index].length - 1;
          variant.option[index] = idx;
        }
      });
    });
    
    
    
    /**
     * EVENTS
     * -----------------------------------------------
     */
    var goBack = function() {
        $state.go('product', {
          id: product.id,
        });
    }
    $scope.onSave = function(fn) {
      product.variants.push(resource);
      product.$save(fn);
    }
    $scope.onSaveAndFinish = function() {
      scope.onSave(goBack);
    }
    $scope.onDelete = goBack;
    $scope.onCancel = goBack;
}])

.controller('mediaListController', [
 '$scope', 
 'variant', 
 '$uibModalInstance',
  function($scope, variant, $uibModalInstance) {
   $scope.resource = variant;
   $scope.items = variant.medias;
   
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
}]);




'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
.controller('productController', [ '$scope', '$state', 'gridOptions',
    function($scope, $state, productGrid) {

        //Page Init
        $scope.currentPage = 1;
        $scope.maxSize = 5;
        
        // grid Options
        $scope.gridOptions = gridOptions;
        
        
        // Load Items
        $scope.load = function() {
            $scope.gridOptions.load({
                page: $scope.currentPage
            });
        }
        $scope.load();
        
        
        $scope.viewDetail = function(row) {
            $state.transitionTo('product.detail',{
              id:row.entity.id
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
 * @description     ProductModel
 */


productModule.factory('Product', ['$resource' , function($resource) {
    function Product(data) {
        this.id = data.id;
        this.name = data.name;
    }

    Product.prototype.save = function() {
        $http.post('/dasdsad', this);
    }
    return Product;
}]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productGrid", ['Products', function(Products) {
  return {
    columns: [{
      name: "action",
      displayName: "",
    },{
      name: "name",
      displayName: "Tên",
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a ui-sref="product.detail({id:row.entity.id})">{{COL_FIELD}}</a>',
        '</div>'
      ].join('')
    }, {
      name: "price",
      displayName: "Giá tiền",
    }, {
      name: "sale",
      displayName: "Khuyến mãi",
    }, {
      name: "quantity",
      displayName: "Số lượng",
    }],
    
    gridOptions: function($scope) {
      var options = $scope.options || {};
      var defaults = {
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: false,
        useExternalFiltering: true,
        columnDefs: this.columns,
        load: function(params, fn) {
          var res = resource.query(params, function() {
            this.data= res.items;
            this.totalItems = res.total;
            fn ? fn : "";
          }.bind(this));
        },
        
        onRegisterApi: function(gridApi) {
          this.api = gridApi;
          
          if($scope.saveRow) {
            gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
          }
        }
      }
      return angular.extend(defaults, options);
    }
  }
}]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule
.service("productTemplates", function() {
  return {
    templates: [
      // Only
      ['color_name'],
      ['size_name'],
      ['style_name'],
      ['configure_name'],
      ['weight_name'],
      ['cover_tyle_name'],
      
      // Color map
      ['color_name', 'size_name'],
      ['color_name', 'style_name'],
      ['color_name', 'configure_name'],
      ['color_name', 'size_name', 'style_name'],
      ['color_name', 'size_name', 'configure_name'],
      ['color_name', 'style_name', 'configure_name']
      ['color_name', 'size_name', 'style_name', 'configure_name'],
      
      
      // Size map
      ['size_name', 'style_name'],
      ['size_name', 'configure_name'],
      ['size_name', 'style_name', 'configure_name'],
      
      // Style map
      ['style_name', 'configure_name'],
    ],
    
    labels: {
      color_name: "Màu sắc",
      size_name: "Kích thước",
      style_name: "Kiểu dáng",
      configure_name: "Cấu hình",
      weight_name: "Trọng lượng",
      cover_type_name: "Loại bìa"
    },
    
    getDropdownList: function() {
      var results = [];
      angular.forEach(this.themes, function(values, index) {
        var result = [];
        angular.forEach(values, function(value) {
          result.push(this.labels[value]);
        }, this);
        results[index] = result.join(', ');
      }, this);
      return results;
    }
  }
});


})(window, _, window.angular);
