'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductAddController
 */

var ProductAttributes = {
    name: null,
    current: {
        price: 0,
        sale: 0,
        quantity: 1,
    },
    description_list: [],
    description: [],
    keywords: null,
    attrs: [],
    variant_options: [],
    variants: [],
    status: 'private',
    template: null,
}

var Controller = function($scope, $rootScope, $state, productService, mediaService, 
 $controller, variantOption, Constants) {
    
    // product default attribute  
    $scope.item = angular.clone(ProductAttributes);
    
    // save data
    $scope.save = function() {
        if($scope.item.id) {
            return productService.update($scope.item);
        }
        return productService.insert($scope.item);
    }
    
    // save and finish
    $scope.saveAndFinish = function() {
       $state.transitionTo('product');
    }
    
    // cancel
    $scope.cancel = function() {
        $state.transitionTo('product');
    }
    
    // delete file
    $scope.deleteFile = function(file) {
        mediaService.remove(file.id);
        $scope._onFileDelete(file);
    }
    
    // upload
    $scope.upload = function($files) {
        if($files) {
            $files.forEach(function(file) {
                mediaService.upload(file).success($scope._onUploaded);
            });
        }
    }
    
    // on uploaded
    $scope._onUploaded = function(data) {
        $scope.item.current.medias.push(data.data);
    }
    
    // on delete file
    $scope._onFileDelete = function(file) {
        var index = $scope.item.current.medias.indexOf(file);
        $scope.item.current.medias.splice(index, 1);
    }
    
}

Controller.$inject = [
    '$scope',
    '$rootScope',
    '$state',
    'productService',
    'mediaService',
    '$controller',
    'variantOption',
    'Constants'
];

productModule
.controller('productAddController', Controller);
