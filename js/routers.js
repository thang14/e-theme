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
      when('/reports', {
        templateUrl: 'web/partials/reports-details.html',
        controller: 'ReportsDetailController'
      }).
      when('/info', {
        templateUrl: 'web/partials/shop-detail.html',
        controller: 'ShopDetailController'
      }).
      when('/sections/', {
        templateUrl: 'web/partials/section-list.html',
        controller: 'SectionListController'
      }).
      when('/sections/:sectionId', {
        templateUrl: 'web/partials/section-detail.html',
        controller: 'SectionDetailController'
      }).
      when('/settings', {
        templateUrl: 'web/partials/settings.html',
        controller: 'SettingsController'
      }).
      when('/orders', {
        templateUrl: 'web/partials/order-list.html',
        controller: 'OrderListController'
      }).
      when('/orders/:orderId', {
        templateUrl: 'web/partials/order-detail.html',
        controller: 'OrderDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
