'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionConfig
 */
sectionModule
    .config(['$stateProvider',
        function($stateProvider) {

          var getCategories = ['Categories', function(Categories) {
             return Category.all();
          }];

          var getSectionId = ['$stateParams', function($stateParams) {
             return $stateParams.id;
          }];
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("section", {
              title: "Mục",
              // Use a url of "/" to set a states as the "index".
              url: "/section",

              resolve: {
                  sections:['Sections', function(Sections) {
                    return Sections.query();
                  }]
              },

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'sectionController',
              templateUrl: '/web/section/list.html',
              
            });
        }
    ]);
