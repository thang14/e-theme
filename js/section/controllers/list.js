'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
.controller('sectionController', [ '$scope', 'sections',
    function($scope, sections) {
        $scope.sections = sections;
    }
]);
