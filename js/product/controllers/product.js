'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModel
 */


productModule.factory('Product', ['$resource' , function($resource) {
    function Product(data) {
        this.id = data.id;
        this.name = data.name;
    }

    Product.prototype.save = function() {
        $http.post('/dasdsad', this);
    }
    return Product;
}]);
