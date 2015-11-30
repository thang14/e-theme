
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModule
 */
var productModule = angular.module("app.product", [
    'ui.router',
    'app.media',
    'app.section',
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
               return Sections.all();
            }];

            var getProductId = ['$stateParams', function($stateParams) {
               return $stateParams.id;
            }];

            var getVariantId = ['$stateParams', function($stateParams) {
               return $stateParams.variantId;
            }];

            // Use $stateProvider to configure your states.
            $stateProvider
            .state("product", {
                    title: "List Product",
                    url: "/product",
                    controller: 'productController',
                    templateUrl: '/web/product/list.html',
                }
            )

            .state("product.new", {
                    title: "Add Product",
                    url: "/new",
                    views: {
                        "@": {
                            resolve: {
                                sections: getSections,
                                product: ['Products', function(Products) {
                                    return new Products();
                                }],
                            },
                            controller: 'productDetailController',
                            templateUrl: '/web/product/detail.html',
                        }
                    }
                }
            );

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
  function($scope, $state, product, sections, i18nNotifications, $uibModal) {

    $scope.product = product;

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
.controller('productController', [ '$scope', '$state', 'productGrid',



    function($scope, $state, productGrid) {

        //Page Init
        $scope.currentPage = 1;
        $scope.maxSize = 5;

        // grid Options
        $scope.gridOptions = productGrid.gridOptions($scope);

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
 * @description     ProductService
 */
productModule.factory('Products', ['resourceService', 'Variants', 'productTemplates',

    function(resourceService, mediaResource, Variants) {

        var Products = resourceService('product');

        Products.forSection = function(id) {
            return this.query({section_id: id});
        }

        Products.prototype.selectTemplate = function(template) {
            if(!this.isNew()) {
                return false;
            }

            if(template === this.template) {
                return;
            }

            if(template === null) {
                this.variants = [];
                this.variant_options = [];
                return;
            }

            var options = [];
            var names = productTemplates.templates[template];
            angular.forEach(names, function(name) {
                options.push({
                    name: name,
                    label: productTemplates.labels[name],
                    values: []
                })
            });
            this.variant_options = options;
        }

        Products.prototype.templateDropdownList = function() {
            return productTemplates.getDropdownList();
        }

        Products.prototype.generateVariants = function() {
            if(!this.isNew()) {
                return false;
            }
            function generateVariants(key, data) {
                var options = this.variant_options;
                angular.forEach(options[key].values, function(value, index) {
                    var item = angular.copy(data);
                    item.push(index);
                    if(angular.isUndefined(options[key + 1])) {
                        this.variants.push(new Variants({
                            price: 0,
                            sale: 0,
                            quantity: 0,
                            option: item
                        }));
                    } else {
                        generateVariants(key + 1, data);
                    }
                }, this)
            }

            generateVariants.call(this, 0, []);
        }

        Products.prototype.removeVariant = function(variant) {
            var index = this.variants.indexOf(variant);
            if(variant.id) {
                variant.$remove();
            }
            this.variant.splice(index, 1);
        }



        Products.prototype.removeVariantOption = function(a1, a2) {
            this.variants.forEach(function(obj) {
                if(typeof obj.option === "Array") {
                    if(a1 && angular.isUndefined(a2)) {
                        obj.option.splice(a1, 1);
                        if(obj.option.length === 0) {
                            this.removeVariant(obj);
                        } else {
                            obj.$save();
                        }
                    }

                    if(a1 && a2) {
                        obj.option[a1].splice(a2, 1);
                        obj.$save();
                    }
                }
            }, this)
        }

        Products.prototype.getVariantDefault = function() {
            var variants = this.variants;
            if(!angular.isUndefined(variants) && variants.length > 0) {
                return variants[0];
            }

            if(!this.variant instanceof Resource) {
                this.variant = new Variants(this.variant);
            }
            return this.variant;
        }


        Products.prototype.upload = function(file) {
            return this.getVariantDefault().upload(file);
        }

        Products.prototype.removeFile = function(file) {
            return this.getVariantDefault().removeFile(file);
        }

        Products.prototype.isNew = function() {
            return (this.id != undefined);
        }
        return Products;
    }
]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     productModule
 */
productModule.factory('Variants', ['resourceService', 'Medias', '$q',
    function(resourceService, $q) {
        var Variant = resourceService('variant');

        Variant.forProduct = function(id, successcb, errorcb) {
            return Variant.query({product_id: id}, successcb, errorcb);
        }
        /**
         * Upload media
         * @param object mefiledia
         */
        Variant.prototype.upload = function($files) {
            if($files && $files.length > 0) {
                var promises = []
                this.medias = this.medias || [];
                $files.forEach(function(file) {
                    var deffered  = $q.defer();
                    this.medias.push(file);
                    file.upload = Medias.upload(file);
                    // Success
                    file.upload.success(function(data, status, headers, config) {
                        file = data;
                        deffered.resolve(data);
                    }.bind(this));
                    // Error
                    file.upload.error(function(error){
                        deffered.reject();
                    });
                    // Progress
                    file.upload.progress(function (evt) {
                        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });

                    promises.push(deffered.promise);
                }, this);

                $q.all(promises)
                .then(function() {
                    if(this.id) {
                        this.$save();
                    }
                }.bind(this));
            }
        }

        /**
         * Remove media
         * @param object media
         */
        Variant.prototype.removeMedia = function(media) {
            var idx = this.medias.splice(media);
            if(idx >= 0) {
                media.$remove();
                if(this.id) {
                    this.$save();
                }
                this.medias.splice(idx, 1);
            }
        }
        return Variant;
    }
]);

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
      width: '100',
      displayName: "",
      enableCellEdit: false,
      enableSorting: false,
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a href="#"><i class="fa-pencil-square-o"></i> {{Constants.EDIT}}</a>',
        '</div>'
      ].join('')
    },{
      name: "name",
      displayName: "Tên",
    }, {
      name: "price",
      displayName: "Giá tiền",
      width: '120',
      cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:"đ "}} </div>'
    }, {
      name: "sale",
      displayName: "Khuyến mãi",
      width: '80',
    }, {
      name: "quantity",
      displayName: "Số lượng",
      width: '80',
    }],
    
    gridOptions: function($scope) {
      var options = $scope.options || {};
      var defaults = {
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: true,
        exporterMenuCsv: false,
        enableGridMenu: false,
        useExternalFiltering: false,
        columnDefs: this.columns,
        load: function(params, fn) {
          var res = Products.get(params, function() {
            this.data= res.data;
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
