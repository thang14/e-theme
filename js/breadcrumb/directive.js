'use strict';

/**
 * @name            OnhanhBreadcrumb
 * @description     BreadcrumbModule
 */
breadcrumbModule.directive('breadcrumb-view', ['$state', '$breadcrumb'
    function($state, $breadcrumb) {
        return {
            templateUrl:"/web/breadcrumb/breadcrumb.html"
        }
    }
]);
