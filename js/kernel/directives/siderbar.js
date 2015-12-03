'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
kernelModule.directive('siderbar', ["$interval", "$filter", function ($interval, $filter) {


	var link = function(scope, element, attrs) {
		var currentSub = null;
		// Show current sub menu
		$(element).find("li.item").click(function(e) {
			if(currentSub !== null) {
				currentSub.hide();
			}
			currentSub = $(this).find('ul');
			if(currentSub.length == 0) {
				currentSub = null;
			} else {
				currentSub.show();
			}
		});

    }

    return {
        link: link
    };
}]);
