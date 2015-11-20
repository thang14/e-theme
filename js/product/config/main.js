'use strict';

/**
 * @name            OnhanhDashboard
 * @description     ...
 */
productModule
    .config(['$stateProvider',
        function($stateProvider) {
            
            var getSections = ['Section', function(Section) {
               return Section.$all().items; 
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
                  products:['Product', function(Product) {
                    return Product.$query().items;
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
                  product:['Product', function() {
                    return Product.$get().current;
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
                          product:['Product', '$stateParam', function($stateParam) {
                            return Product.$get({id:$stateParam.id}).current;
                          }],
                          
                          sections: getSections,
                      }
                  }
              },
            })
        }
    ]);
