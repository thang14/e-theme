
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
var categoryModule = angular.module("app.category", []);

'use strict';

/**
 * @name            OnhanhCategory
 * @description     categoryModule
 */
categoryModule.factory('Categories', [ 'resourceService',
    function(resourceService) {
        var Categories = resourceService('category');
        return Categories;
    }
]);


})(window, _, window.angular);
