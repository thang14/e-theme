'use strict';

/**
 * @name            OnhanhKernel
 * @description     ...
 */
kernelModule.config(['$provide', '$urlRouterProvider',
        function($provide, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        }
    ]);
