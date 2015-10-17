
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
	.controller('productAddController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
	    	
	    }
	]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */
productModule
	.controller('productDetailController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
	    	
	    }
	]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
	.controller('productController', ['$location', '$scope', '$rootScope',
	    function($location, $scope, $rootScope) {
			$scope.products = [];
			for(var i = 0; i < 10; i++) {
				$scope.products.push({
					name: "Ấm chén tử sa "+i
				});
			}
	    }
	]);



})(window, window.angular);
