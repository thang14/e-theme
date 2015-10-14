'use strict';
onhanhApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products/', {
        templateUrl: 'web/partials/product-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/products/:phoneId', {
        templateUrl: 'web/partials/product-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
