'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionServiceController
 */
sectionModule
    .service('sectionService', [ 'baseService'
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "section"
          });  
        }
    ]);
