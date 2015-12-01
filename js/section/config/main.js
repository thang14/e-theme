'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionConfig
 */
sectionModule
    .config(['$stateProvider',
        function($stateProvider) {

          var getCategories = ['Categories', function(Categories) {
             return Categories.query();
          }];

          var getSectionId = ['$stateParams', function($stateParams) {
             return $stateParams.id;
          }];
         // Use $stateProvider to configure your states.
          $stateProvider

          .state("section", {
            title: "Mục",
            url: "/section",
            controller: 'sectionController',
            templateUrl: '/web/section/list.html',

          })

          .state("section.new", {
            title: "New Section",
            url: "/new",

            views: {
              "@": {
                resolve: {
                  categories: getCategories,
                  sectionId: getSectionId,
                  section:['Sections', function(Sections) {
                    return new Sections();
                  }]
                },
                controller: 'sectionDetailController',
                templateUrl: '/web/section/detail.html',
              }
            }

          })

          .state("section.detail", {
            title: "Detail",
            url: "/:id",

            views: {
              "@": {
                resolve: {
                  categories: getCategories,
                  sectionId: getSectionId,
                  section:['Sections', 'sectionId', function(Sections, sectionId) {
                    return Sections.get({id: sectionId});
                  }]
                },
                controller: 'sectionDetailController',
                templateUrl: '/web/section/detail.html',
              }
            }

          });
        }
    ]);
