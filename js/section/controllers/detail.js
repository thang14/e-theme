'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionDetailController
 */
sectionModule
.controller('sectionDetailController', [ '$scope', '$state', 'sectionItem',
    function($scope, $state, sectionItem) {
        
        $scope.resource = sectionItem;
        
        // Delete
        $scope.onDelete = function() {
            $state.go('section');
        }
        
        // Save and Finish
        $scope.onSaveAndFinish = function() {
            $state.go('section');
        }
    }
]);
