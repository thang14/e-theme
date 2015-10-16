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
    
            //////////
            // Home //
            //////////
    
            .state("product", {
    
              // Use a url of "/" to set a states as the "index".
              url: "/product",
    
              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'productController',
              templateUrl: '/web/product/list.html',
              ncyBreadcrumb: {
                  label: 'Product'
              },
            })
            
            
            
            .state("product.new", {
    
              // Use a url of "/" to set a states as the "index".
              url: "/new",
    
              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'productAddController',
              templateUrl: '/web/product/add.html',
              
              ncyBreadcrumb: {
                  label: 'new'
              }
            });
        }
    ]);
