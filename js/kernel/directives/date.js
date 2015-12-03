'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
kernelModule.directive('dateInterval', ["$interval", "$filter", function ($interval, $filter) {

	// Gets current time
	function getCurrentTime() {
		var time = new Date().getTime();
        return Math.round(time / 1000);
	}

	// Change time
	function changeTime(element, time) {
		var currentTime = getCurrentTime();
		var seconds = currentTime - time;
		var text;
		if(seconds < 60) {
			text = 'The few seconds ago';
		} else if(seconds*60 < 60) {
			text = seconds*60 + ' last minute';
		}else if(seconds*60*60 < 60) {
			text = seconds*60*60 + ' hours ago';
		}else {
			text = $filter('date')(time * 1000, 'HH:mm, dd/MM/yyyy');
		}
		element.text(text);
	}


    function link(scope, element, attrs) {
    	var timeoutId = null;
        scope.$watch(attrs.dateInterval, function (value) {
            changeTime(element, value);
            timeoutId = $interval(function () {
            	changeTime(element, value);
            }, 60000);
        });

        element.on('$destroy', function () {
            $interval.cancel(timeoutId);
        });

    }

    return {
        link: link
    };
}]);
