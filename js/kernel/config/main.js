'use strict';

/**
 * @name            OnhanhKernel
 * @description     ...
 */
kernelModule.config(['$provide', '$urlRouterProvider',
        function($provide, $urlRouterProvider) {
            $urlRouterProvider.otherwise(function($injector, $location) {
                var $state = $injector.get('$state');
                $state.transitionTo('home');
            });
        }
    ]);