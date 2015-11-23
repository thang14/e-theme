'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
.controller('productController', [ '$scope', '$state', 'productGridService',
    function($scope, $state, productGridService) {

        //Page Init
        $scope.currentPage = 1;
        $scope.maxSize = 5;

        $scope.setPage = function(page) {
            $scope.currentPage = page;
        }
        
        $scope.gridOptions = productGridService.gridOptions();
        
        
        // Load Items
        $scope.load = function() {
            productGridService.load({
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
