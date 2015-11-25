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
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("section", {
              title: "Mục",
              // Use a url of "/" to set a states as the "index".
              url: "/section",

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'sectionController',
              templateUrl: '/web/section/list.html',
              resolve: {
                  sections:['Sections', function(Sections) {
                    return Sections.all();
                  }]
              }
            })

            .state("section.new", {
              title: "Thêm mục mới",
              // Use a url of "/" to set a states as the "index".
              url: "/new",

              views: {
                '@': {
                    // Example of an inline template string. By default, templates
                    // will populate the ui-view within the parent state's template.
                    // For top level states, like this one, the parent template is
                    // the index.html file. So this template will be inserted into the
                    // ui-view within index.html.
                    controller: 'sectionDetailController',
                    templateUrl: '/web/section/detail.html',
                    resolve: {
                        sectionItem:['Sections', function(Sections) {
                            return new Sections();
                        }],
                        
                        categories: getCategories(),
                    },
                    
                    
                }  
              }
            })

            .state("section.detail", {
              title: "Chi tiết mục",
              // Use a url of "/" to set a states as the "index".
              url: "/:id",

              views: {
                '@': {
                    // Example of an inline template string. By default, templates
                    // will populate the ui-view within the parent state's template.
                    // For top level states, like this one, the parent template is
                    // the index.html file. So this template will be inserted into the
                    // ui-view within index.html.
                    controller: 'sectionDetailController',
                    templateUrl: '/web/section/detail.html',
                    resolve: {
                        sectionId: getSectionId(),
                        sectionItem:['Sections', 'sections', function(sections, sectionId) {
                            return _.find(sections, function(obj) {
                                return (obj.id == sectionId);
                            });
                        }],
                        
                        categories: getCategories(),
                    }
                }  
              }
            });
        }
    ]);
