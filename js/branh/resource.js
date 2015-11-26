'use strict';

/**
 * @name            OnhanhBranh
 * @description     branhModule
 */
branhModule.factory('Branh', [ 'resourceService',
  function(branhResource) {
    var Branh = resourceService('branh');
    return Branh;
  }
]);
