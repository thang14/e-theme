'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductDetailController
 */
 
productModule

/**
 * Product Detail Controller
 */
.controller('productDetailController', ['$scope', '$state',  'productItem', 'sections', 'i18nNotifications',
  function($scope, $state, productItem, sections, i18nNotifications) {
      
    var resource = $scope.resource = productItem;
    
    $scope.sections = sections;
    
    // Action
    var action = $scope.action = {
      name: null,
      item: null,
    };
    
    //Goback
    var goBack = function() {
        $state.go('product');
    }
    
    //Delete
    $scop.onDelete = goBack;
    
    //onSaveAndFinish
    $scope.onSaveAndFinish = goBack;
    
    // Set action
    $scope.setAction = function(item, name) {
      action.name = name;
      action.item = item;
    }
    
    $scope.upload = function(file) {
      file.upload = resource.upload(file);
      file.upload.progress(function(evt) {
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }
    
    $scope.removeFile = function(file) {
      resource.removeFile(file)
      .error(function(data, status, headers, config) {
        i18nNotifications.error('Tải ảnh thất bại');
      });
    }
  }
]);


