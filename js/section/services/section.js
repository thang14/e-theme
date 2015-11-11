'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionService
 */
sectionModule
    .service('sectionService', [ 'baseService',
        function(baseService) {
          return angular.extend(baseService, {
            collectionName: "section"
          });
        }
    ]);
