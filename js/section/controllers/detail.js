'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionDetailController
 */
sectionModule
.controller('sectionDetailController', [ '$scope', 'sectionItem'
    function($scope) {
        $scope.resource = sectionItem;
    }
]);
