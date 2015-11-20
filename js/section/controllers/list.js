'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
.controller('sectionController', [ '$scope', '$state', 'sections',
    function($scope, $state, sections) {
        
        $scope.sections = sections;
        $scope.view = function(id) {
            $state.go('section', {id: id});
        }
    }
]);
