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
                .state("product", {
                    title: "Danh sách sản phẩm",
                    url: "/product",
                    controller: 'productController',
                    templateUrl: '/web/product/list.html',
                }
            );

        }
    ]);
