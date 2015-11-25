'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
.controller('productController', [ '$scope', '$state', 'gridOptions',
    function($scope, $state, productGrid) {

        //Page Init
        $scope.currentPage = 1;
        $scope.maxSize = 5;
        
        // grid Options
        $scope.gridOptions = gridOptions;
        
        
        // Load Items
        $scope.load = function() {
            $scope.gridOptions.load({
                page: $scope.currentPage
            });
        }
        $scope.load();
        
        
        $scope.viewDetail = function(row) {
            $state.transitionTo('product.detail',{
              id:row.entity.id
            })
        }
        
        $scope.newProduct = function(id) {
            $state.transitionTo('product.new');
        }
    }
]);
