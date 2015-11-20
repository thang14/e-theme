'use strict';

/**
 * @name            OnhanhVariant
 * @description     VariantListController
 */
variantModule
.controller('variantController', ['$scope', '$state', 'variants',
	function($scope, $state, variants) {
	    $scope.variants = variants;
	}
]);
