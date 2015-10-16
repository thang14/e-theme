'use strict';

/**
 * @name            OnhanhKernel
 * @description     ...
 */
 
app.config(['$provide', '$urlRouterProvider',
  function($provide, $urlRouterProvider) {
      $urlRouterProvider.otherwise(function($injector, $location) {
          $state.transitionTo('home');
      });
  }
]);
