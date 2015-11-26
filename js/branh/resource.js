'use strict';

/**
 * @name            OnhanhBranh
 * @description     branhModule
 */
branhModule.factory('Branh', [ 'resourceService',
  function(resourceService) {
    var Branh = resourceService('branh');
    return Branh;
  }
]);
