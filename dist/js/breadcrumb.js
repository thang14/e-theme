
(function(window, angular, undefined) {

'use strict';

/**
 * @name            OnhanhBreadcrumb
 * @description     BreadcrumbModule
 */
var breadcrumbModule = angular.module("app.breadcrumb", []);

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


})(window, window.angular);
