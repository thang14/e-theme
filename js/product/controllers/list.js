'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductController
 */
productModule
.controller('productController', [ '$scope', '$state', 'productGrid',



    function($scope, $state, productGrid) {

        //Page Init
        $scope.currentPage = 1;
        $scope.maxSize = 10;
        $scope.search = {
            page: $scope.currentPage,
            maxSize: $scope.maxSize
        }
        // grid Options
        $scope.gridOptions = productGrid.gridOptions($scope);

        $scope.load = function() {
            $scope.gridOptions.load($scope.search);
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
