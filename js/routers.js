'use strict';
onhanhApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products/', {
        templateUrl: 'web/partials/product-list.html',
        controller: 'ProductListController'
      }).
      when('/products/:productId', {
        templateUrl: 'web/partials/product-detail.html',
        controller: 'ProductDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
