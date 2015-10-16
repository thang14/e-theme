'use strict';

/**
 * @name            OnhanhBreadcrumb
 * @description     BreadcrumbModule
 */
breadcrumbModule.directive('breadcrumb-view', ['$state'
    function($state) {
        return {
            templateUrl:"/web/breadcrumb/breadcrumb.html"
        }
    }
]);
