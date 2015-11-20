'use strict';

/**
 * @name            OnhanhCrud
 * @description     crudModule
 */
(function() {

  function crudStateProvider($stateProvider) {

    // This $get noop is because at the moment in AngularJS "providers" must provide something
    // via a $get method.
    // When AngularJS has "provider helpers" then this will go away!
    this.$get = angular.noop;

    // Again, if AngularJS had "provider helpers" we might be able to return `routesFor()` as the
    // crudRouteProvider itself.  Then we would have a much cleaner syntax and not have to do stuff
    // like:
    //
    // ```
    // myMod.config(function(crudRouteProvider) {
    //   var routeProvider = crudRouteProvider.routesFor('MyBook', '/myApp');
    // });
    // ```
    //
    // but instead have something like:
    //
    //
    // ```
    // myMod.config(function(crudRouteProvider) {
    //   var routeProvider = crudRouteProvider('MyBook', '/myApp');
    // });
    // ```
    //
    // In any case, the point is that this function is the key part of this "provider helper".
    // We use it to create routes for CRUD operations.  We give it some basic information about
    // the resource and the urls then it it returns our own special routeProvider.
    this.routesFor = function(resourceName, urlPrefix, routePrefix) {
      var baseUrl = '/web';
      var baseRoute = '/' + resourceName.toLowerCase();
      routePrefix = routePrefix || urlPrefix;

      // Prepend the routePrefix if it was provided;
      if (routePrefix !== null && routePrefix !== undefined && routePrefix !== '') {
        baseRoute = '/' + routePrefix + baseRoute;
      }

      // Create the templateUrl for a route to our resource that does the specified operation.
      var templateUrl = function(operation) {
        return baseUrl + '/' + resourceName.toLowerCase() +'/'+operation.toLowerCase()+'.html';
      };
      // Create the controller name for a route to our resource that does the specified operation.
      var controllerName = function(operation) {
        return resourceName + operation +'Ctrl';
      };

      // This is the object that our `routesFor()` function returns.  It decorates `$routeProvider`,
      // delegating the `when()` and `otherwise()` functions but also exposing some new functions for
      // creating CRUD routes.  Specifically we have `whenList(), `whenNew()` and `whenEdit()`.
      var stateBuilder = {
        // Create a route that will handle showing a list of items
        stateList: function(resolveFns) {
          stateBuilder.when(resourceName.toLowerCase(), {
            url: baseRoute,
            templateUrl: templateUrl('List'),
            controller: controllerName('List'),
            resolve: resolveFns
          });
          return stateBuilder;
        },
        // Create a route that will handle creating a new item
        stateNew: function(resolveFns) {
          stateBuilder.when(resourceName.toLowerCase() +'.new', {
            url: baseRoute+'/new',
            templateUrl: templateUrl('Edit'),
            controller: controllerName('Edit'),
            resolve: resolveFns
          });
          return stateBuilder;
        },
        // Create a route that will handle editing an existing item
        stateEdit: function(resolveFns) {
          stateBuilder.state( resourceName.toLowerCase()+'.edit', {
            url: baseRoute+'/:id',
            templateUrl: templateUrl('Edit'),
            controller: controllerName('Edit'),
            resolve: resolveFns
          });
          return stateBuilder;
        },
        // Pass-through to `$routeProvider.when()`
        state: function(path, route) {
          $stateProvider.state(path, route);
          return stateBuilder;
        },
        // Pass-through to `$routeProvider.otherwise()`
        otherwise: function(params) {
          $stateProvider.otherwise(params);
          return stateBuilder;
        },
        // Access to the core $routeProvider.
        $stateProvider: $stateProvider
      };
      return stateBuilder;
    };
  }
  // Currently, v1.0.3, AngularJS does not provide annotation style dependencies in providers so,
  // we add our injection dependencies using the $inject form
  crudStateProvider.$inject = ['$stateProvider'];

  // Create our provider - it would be nice to be able to do something like this instead:
  //
  // ```
  // angular.module('services.crudStateProvider', [])
  //   .configHelper('crudStateProvider', ['$stateProvider, crudStateProvider]);
  // ```
  // Then we could dispense with the $get, the $inject and the closure wrapper around all this.
  crudModule.provider('crudRoute', crudStateProvider);
})();
