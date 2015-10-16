'use strict';

/**
 * @name            OnhanhBreadcrumb
 * @description     BreadcrumbModule
 */
breadcrumbModule.directive('breadcrumbs', [
    function($breadcrumb) {
        return {
            templateUrl:"/web/breadcrumb/breadcrumb.html"
        }
    }
]);
