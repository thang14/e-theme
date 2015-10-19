'use strict';

/**
 * @name            OnhanhAuth
 * @description     AuthModule
 */
 
authModule.service('authService', ['$http', 'Environment'
  function($http, Environment) {
    return {
    
      logout: function() {
        var url = Environment.settings.api + '/user/logout';
        return $http.get(url);
      },
      
      login: function(username, password) {
        var url = Environment.settings.api + '/user/login';
        return $http.post(url, {
          username: username,
          password: password,
        });
      },
      
      getUserInfomation: function() {
        var url = Environment.settings.api + '/user/infomation';
        return $http.get(url);
      }
      
    };
  } 
]);
