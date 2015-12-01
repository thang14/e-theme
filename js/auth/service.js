'use strict';

/**
 * @name            OnhanhAuth
 * @description     AuthModule
 */

authModule.service('Auth', ['Environment', '$http',
	function(Environment, $http) {
		return Auth = {
			identity: null,
			
			/**
			 * Attempt to authenticate a user by the given data [emain, password,rememberMe]
			 */
			login: function(data, a1, a2) {
				$http.post('/login', data).success(function(res) {
					if(res.status === true && res.data) {
						this.identity = res.data;
						if(angular.isFunction(a1)) {
							a1(res);
						}
					}
				}.bind(this)).error(a2);
				
			}
			
			/**
			 * Logout the current user
			 */
			logout: function () {
				$http.post('/logout').success(function(res) {
					this.identity = null;
				}.bind(this))
			}
			
			/**
			 * Is current user authenticated?
			 */
			isAuthenticated: function() {
				return !this.identity;
			}
			
			/**
			 * Is current user adminstrator?
			 */
			isAdmin: function() {
				return (this.identity && this.identity.isAdmin);
			}
		}
	}

]);
