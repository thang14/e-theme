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
