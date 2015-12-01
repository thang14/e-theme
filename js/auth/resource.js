'use strict';

/**
 * @name            OnhanhAuth
 * @description     AuthModule
 */

authModule.factory('Auth', [ '$resource', 'Environment'
	function($resource) {
		return $resource(Environment.settings.domain+"/auth");
	}

]);