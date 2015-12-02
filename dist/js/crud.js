
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhCrud
 * @description     crudModule
 */
var crudModule = angular.module("app.crud", []);

'use strict';

/**
 * @name            OnhanhCrud
 * @description     crudModule
 */
crudModule
.directive('crudButtons', function () {
  return {
    restrict:'E',
    replace:true,
    template:
      '<div>' +
      '  <button type="button" class="btn btn-primary btn-sm save" ng-disabled="!canSave()" ng-click="save()">Save</button>' +
      '  <button type="button" class="btn btn-warning btn-sm revert" ng-click="revertChanges()" ng-disabled="!canRevert()">Revert changes</button>'+
      '  <button type="button" class="btn btn-warning btn-sm cancel" ng-click="cancel()">Cancel</button>'+
      '  <button type="button" class="btn btn-danger  btn-sm remove" ng-click="remove()" ng-show="canRemove()">Remove</button>'+
      '</div>'
  };
});

'use strict';

/**
 * @name            OnhanhCrud
 * @description     crudModule
 */
 
crudModule

// Apply this directive to an element at or below a form that will manage CRUD operations on a resource.
// - The resource must expose the following instance methods: $saveOrUpdate(), $id() and $remove()
.directive('crudEdit', ['$parse', function($parse) {
  return {
    // We ask this directive to create a new child scope so that when we add helper methods to the scope
    // it doesn't make a mess of the parent scope.
    // - Be aware that if you write to the scope from within the form then you must remember that there is a child scope at the point
    scope: true,
    // We need access to a form so we require a FormController from this element or a parent element
    require: '^form',
    // This directive can only appear as an attribute
    link: function(scope, element, attrs, form) {
      // We extract the value of the crudEdit attribute
      // - it should be an assignable expression evaluating to the model (resource) that is going to be edited
      var resourceGetter = $parse(attrs.crudEdit);
      var resourceSetter = resourceGetter.assign;
      // Store the resource object for easy access
      var resource = resourceGetter(scope);
      // Store a copy for reverting the changes
      var original = angular.copy(resource);

      var checkResourceMethod = function(methodName) {
        if ( !angular.isFunction(resource[methodName]) ) {
          throw new Error('crudEdit directive: The resource must expose the ' + methodName + '() instance method');
        }
      };
      checkResourceMethod('$save');
      checkResourceMethod('$id');
      checkResourceMethod('$remove');

      // This function helps us extract the callback functions from the directive attributes
      var makeFn = function(attrName) {
        var fn = scope.$eval(attrs[attrName]);
        if ( !angular.isFunction(fn) ) {
          throw new Error('crudEdit directive: The attribute "' + attrName + '" must evaluate to a function');
        }
        return fn;
      };
      // Set up callbacks with fallback
      // onSave attribute -> onSave scope -> noop
      var userOnSave = attrs.onSave ? makeFn('onSave') : ( scope.onSave || angular.noop );
      var userOnSaveAndFinish = attrs.onSaveAndFinish ? makeFn('onSaveAndFinish') : ( scope.onSave || angular.noop );
      var onSave = function(result, status, headers, config) {
        // Reset the original to help with reverting and pristine checks
        original = result;
        userOnSave(result, status, headers, config);
      };
      // onRemove attribute -> onRemove scope -> onSave attribute -> onSave scope -> noop
      var onRemove = attrs.onRemove ? makeFn('onRemove') : ( scope.onRemove || onSave );
      // onError attribute -> onError scope -> noop
      var onError = attrs.onError ? makeFn('onError') : ( scope.onError || angular.noop );

      var onCancel = attrs.onCancel ? makeFn('onCancel') : ( scope.onCancel || angular.noop );

      // The following functions should be triggered by elements on the form
      // - e.g. ng-click="save()"
      scope.save = function() {
        resource.$save(onSave, onError);
      };
      scope.saveAndFinish = function() {
        resource.$save(userOnSaveAndFinish, onError);
      }
      scope.cancel = function() {
        scope.revertChanges();
        onCancel();
      };
      scope.revertChanges = function() {
        resource = angular.copy(original);
        resourceSetter(scope, resource);
        form.$setPristine();
      };
      scope.remove = function() {
        if(resource.$id()) {
          resource.$remove(onRemove, onError);
        } else {
          onRemove();
        }
      };

      // The following functions can be called to modify the behaviour of elements in the form
      // - e.g. ng-disable="!canSave()"
      scope.canSave = function() {
        return form.$valid && !angular.equals(resource, original);
      };
      scope.canRevert = function() {
        return !angular.equals(resource, original);
      };
      scope.canRemove = function() {
        return resource.$id();
      };
      /**
       * Get the CSS classes for this item, to be used by the ng-class directive
       * @param {string} fieldName The name of the field on the form, for which we want to get the CSS classes
       * @return {object} A hash where each key is a CSS class and the corresponding value is true if the class is to be applied.
       */
      scope.getCssClasses = function(fieldName) {
        var ngModelController = form[fieldName];
        return {
          error: ngModelController.$invalid && !angular.equals(resource, original),
          success: ngModelController.$valid && !angular.equals(resource, original)
        };
      };
      /**
       * Whether to show an error message for the specified error
       * @param {string} fieldName The name of the field on the form, of which we want to know whether to show the error
       * @param  {string} error - The name of the error as given by a validation directive
       * @return {Boolean} true if the error should be shown
       */
      scope.showError = function(fieldName, error) {
        return form[fieldName].$error[error];
      };
    }
  };
}]);

'use strict';

/**
 * @name            OnhanhCrud
 * @description     crudModule
 */
crudModule
.factory('crudEditMethods', function () {

  return function (itemName, item, formName, successcb, errorcb) {

    var mixin = {};

    mixin[itemName] = item;
    mixin[itemName+'Copy'] = angular.copy(item);

    mixin.save = function () {
      this[itemName].$saveOrUpdate(successcb, successcb, errorcb, errorcb);
    };

    mixin.canSave = function () {
      return this[formName].$valid && !angular.equals(this[itemName], this[itemName+'Copy']);
    };

    mixin.revertChanges = function () {
      this[itemName] = angular.copy(this[itemName+'Copy']);
    };

    mixin.canRevert = function () {
      return !angular.equals(this[itemName], this[itemName+'Copy']);
    };

    mixin.remove = function () {
      if (this[itemName].$id()) {
        this[itemName].$remove(successcb, errorcb);
      } else {
        successcb();
      }
    };

    mixin.canRemove = function() {
      return item.$id();
    };

    /**
     * Get the CSS classes for this item, to be used by the ng-class directive
     * @param {string} fieldName The name of the field on the form, for which we want to get the CSS classes
     * @return {object} A hash where each key is a CSS class and the corresponding value is true if the class is to be applied.
     */
    mixin.getCssClasses = function(fieldName) {
      var ngModelController = this[formName][fieldName];
      return {
        error: ngModelController.$invalid && ngModelController.$dirty,
        success: ngModelController.$valid && ngModelController.$dirty
      };
    };

    /**
     * Whether to show an error message for the specified error
     * @param {string} fieldName The name of the field on the form, of which we want to know whether to show the error
     * @param  {string} error - The name of the error as given by a validation directive
     * @return {Boolean} true if the error should be shown
     */
    mixin.showError = function(fieldName, error) {
      return this[formName][fieldName].$error[error];
    };

    return mixin;
  };
})

.factory('crudListMethods', ['$location', function ($location) {

  return function (pathPrefix) {

    var mixin = {};

    mixin['new'] = function () {
      $location.path(pathPrefix+'/new');
    };

    mixin['edit'] = function (itemId) {
      $location.path(pathPrefix+'/'+itemId);
    };

    return mixin;
  };
}]);

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


})(window, _, window.angular);
