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
                  product:['Products', function(Products) {
                    return Products.query();
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
                      templateUrl: '/web/product/variant-detail.html',
                      resolve: {
                          variantItem:['Variants', function(Variants, productItem) {
                            var item =  new Variants();
                            item.product_id = productItem;
                            return item;
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
                      templateUrl: '/web/product/variant-detail.html',
                      resolve: {
                          variantItem:['variants', '$stateParams', function(variants, productItem, $stateParams) {
                            return _.find(variants, function(obj) {
                                return obj.id == $stateParams.variantId;
                            });
                          }],
                      }
                  }
              },
            })
        }
    ]);
