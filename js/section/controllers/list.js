'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
.controller('sectionController', [ '$scope', '$state', 'sectionGrid',
    function($scope, $state, sectionGrid) {
        
        $scope.gridOptions = sectionGrid.gridOptions($scope);


        $scope.viewDetail = function(entity) {
            $state.transitionTo('section.detail',{
              id:entity.id
            })
        }

        $scope.newRow = function() {
            $state.transitionTo('section.new');
        }


        $scope.gridOptions.load();



    }
]);
