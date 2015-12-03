'use strict';

/**
 * @name            OnhanhKernel
 * @description     KernelModule
 */
 
kernelModule.directive('dateInterval', ["$interval", "$filter", function ($interval, $filter) {

	var getCurrentTime = function() {
		var time = new Date().getTime();
        return Math.round(time / 1000);
	}
	var getSeconds = function(time) {
		var currentTime = getCurrentTime();
		return currentTime - time;
	}
	var canIterval = function(seconds) {
		return (seconds*60 > 30);
	}
	var changeTime(element, time) {
		var seconds = getSeconds();
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
	var link = function(scope, element, attrs) {
    	var timeoutId = null;
        scope.$watch(attrs.dateInterval, function (value) {
            changeTime(element, value);
            if(canIterval(getSeconds(value))) {
            	timeoutId = $interval(function () {
	            	changeTime(element, value);
	            }, 60000);
            }
        });

        element.on('$destroy', function () {
        	if(timeoutId != null) {
        		$interval.cancel(timeoutId);
        	}
        });

    }

    return {
        link: link
    };
}]);
