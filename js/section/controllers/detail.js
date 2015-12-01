'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionDetailController
 */
sectionModule
.controller('sectionDetailController', [ '$scope', '$state', 'section', 'categories',
    function($scope, $state, section, categories) {

        $scope.resource = section;
        $scope.categories = categories;

        var goBack = function() {
            $state.go('section');
        }

        // Delete
        $scope.onDelete = $scope.onSaveAndFinish = $scope.onCancel = goBack;
    }
]);
