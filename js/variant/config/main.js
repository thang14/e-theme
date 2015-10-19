
'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantConfig
 */
variantModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("variant", {
              title: "Variant",
              // Use a url of "/" to set a states as the "index".
              url: "/variant",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'variantController',
              templateUrl: '/web/variant/list.html',
            });



            
        }
    ]);
