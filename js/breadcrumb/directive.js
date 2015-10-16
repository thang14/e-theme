'use strict';

/**
 * @name            OnhanhBreadcrumb
 * @description     BreadcrumbModule
 */
breadcrumbModule.directive('breadcrumbs', ['$state'
    function($state) {
        return {
            templateUrl:"/web/breadcrumb/breadcrumb.html"
        }
    }
]);
