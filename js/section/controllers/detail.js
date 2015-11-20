'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionDetailController
 */
sectionModule
.controller('sectionDetailController', [ '$scope', '$state', 'sectionItem', 'categories'
    function($scope, $state, sectionItem) {
        
        $scope.resource = sectionItem;
        $scope.categories = categories;
        
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
