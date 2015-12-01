'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
.controller('sectionController', [ '$scope', 'sectionGrid',
    function($scope, sectionGrid) {
        
        $scope.gridOptions = sectionGrid.gridOptions($scope);
        $scope.new = function() {
            $state.go('section.new');
        }

        $scope.gridOptions.load();

    }
]);
