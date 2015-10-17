
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhSection
 * @description     Sectionmodule
 */
var sectionModule = angular.module("app.section", []);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionConfig
 */
sectionModule
    .config(['$stateProvider',
        function($stateProvider) {
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("section", {
              title: "Section",
              // Use a url of "/" to set a states as the "index".
              url: "/section",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'sectionController',
              templateUrl: '/web/section/list.html',
            })

            .state("section.new", {
              title: "Section",
              // Use a url of "/" to set a states as the "index".
              url: "/new",

              views: {
                '@': {
                    // Example of an inline template string. By default, templates
                    // will populate the ui-view within the parent state's template.
                    // For top level states, like this one, the parent template is
                    // the index.html file. So this template will be inserted into the
                    // ui-view within index.html.
                    controller: 'sectionAddController',
                    templateUrl: '/web/section/add.html',
                }  
              }
            })

            .state("section.detail", {
              title: "Section detail",
              // Use a url of "/" to set a states as the "index".
              url: "/:sectionId",

              views: {
                '@': {
                    // Example of an inline template string. By default, templates
                    // will populate the ui-view within the parent state's template.
                    // For top level states, like this one, the parent template is
                    // the index.html file. So this template will be inserted into the
                    // ui-view within index.html.
                    controller: 'sectionDetailController',
                    templateUrl: '/web/section/detail.html',
                }  
              }
            });
        }
    ]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionAddController
 */
sectionModule
    .controller('sectionAddController', [ '$scope',
        function($scope) {
            
        }
    ]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionDetailController
 */
sectionModule
    .controller('sectionDetailController', [ '$scope',
        function($scope) {
            
        }
    ]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
    .controller('sectionController', [ '$scope',
        function($scope) {
            
        }
    ]);



})(window, window.angular);
