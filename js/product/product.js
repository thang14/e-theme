'use strict';

/**
 * @name            OnhanhProduct
 * @description     ProductModule
 */
var productModule = angular.module("app.product", [
  
  // App Module
  'app.media',
  'app.section',
  'app.kernel',
  
  
  'ui.utils.masks',
    
  //Bootstrap
  'ui.bootstrap',

  //UI.grid
  'ui.grid',
  'ui.grid.edit',
]);
