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
