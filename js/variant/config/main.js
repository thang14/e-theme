
'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantConfig
 */
variantModule
.config(['$stateProvider',
    function($stateProvider) {
        
        /////////////
        // Variant //
        ////////////
        $stateProvider
        .state("product.detail.variant.new", {
          title: "Biến thể mới",
          // Use a url of "/" to set a states as the "index".
          url: "/new",

          // Example of an inline template string. By default, templates
          // will populate the ui-view within the parent state's template.
          // For top level states, like this one, the parent template is
          // the index.html file. So this template will be inserted into the
          // ui-view within index.html.
          controller: 'variantDetailController',
          templateUrl: '/web/variant/detail.html',
          
          resolve: {
              variantItem:['Variant', function(Variant) {
                return Variant.$get().item;
              }],
          }
        })
        
        state("product.detail.variant.detail", {
          title: "Chi tiết",
          // Use a url of "/" to set a states as the "index".
          url: "/:variantId",

          // Example of an inline template string. By default, templates
          // will populate the ui-view within the parent state's template.
          // For top level states, like this one, the parent template is
          // the index.html file. So this template will be inserted into the
          // ui-view within index.html.
          controller: 'variantDetailController',
          templateUrl: '/web/variant/detail.html',
          
          resolve: {
              variantItem:['Variant', '$stateParams', 'productItem', function(Variant, $stateParams, productItem) {
                var item =  Variant.$get($stateParams.variantId).item;
                item.product_id = productItem.id;
                return item;
              }],
          }
        })
    }
]);
