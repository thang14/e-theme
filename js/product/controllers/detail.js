'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */

productModule
.controller('productDetailController', ['$scope', '$state',  'productItem', 'sections',
    function($scope, $state, productItem) {
        
        $scope.resource = productItem;
        
        $scope.sections = sections;
        
        
        //Delete
        $scop.onDelete = function() {
            $state.go('product');
        }
        
        //onSaveAndFinish
        $scope.onSaveAndFinish = function() {
            $state.go('product');
        }
    }
]);
