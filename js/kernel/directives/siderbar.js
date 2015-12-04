'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
kernelModule.directive('siderbar', ["$interval", "$filter", function ($interval, $filter) {
	var currentSub = null;
	// Reset navbar
	var resetNav = function(element, active) {
		var $this = active;
		if(currentSub !== null) {
			$(element).removeClass('next-nav--is-expanded');
			currentSub.hide();
		}
		currentSub = $this.find('ul');
		if(currentSub.length == 0) {
			currentSub = null;
		} else {
			$(element).addClass('next-nav--is-expanded');
			currentSub.show();
		}
	}

	var link = function(scope, element, attrs) {
		// Show current sub menu

		var elementActive = $(element).find('li.item.active');
		resetNav(element, elementActive);

		$(element).find("li.item").click(function(e) {
			resetNav(element, $(this));
		});

    }

    return {
        link: link
    };
}]);
