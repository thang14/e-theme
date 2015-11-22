'use strict';
/**
 * @name            Onhanh
 * @description     Utils
 */

// Create a safe reference to the utils object for use below.
var Utils = function(obj) {
  if (obj instanceof Utils) return obj;
  if (!(this instanceof Utils)) return new Utils(obj);
  this._wrapped = obj;
};






window.Onhanh = window.Onhanh || {};
window.Onhanh.Utils = Utils;
