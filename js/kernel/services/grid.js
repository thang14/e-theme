'use strict';

/**
 * @name            OnhanhKernel
 * @description     kernelModule
 */
 kernelModule.factory('grid', [function() {
 	var defaults = {
 		selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: true,
        exporterMenuCsv: false,
        enableGridMenu: false,
        useExternalFiltering: false,
        enableColumnMenus: false,
        enableScrollbars: false,
        enableHorizontalScrollbar: 0, 
        enableVerticalScrollbar: 0,
 	}
 	var gridFactory = function(resource, options) {
 		this.resource = resource;
 		this.options = angular.extend(angular.copy(defaults), options);
 	}

 	/**
 	 * Load data 
 	 * @param Object params
 	 */
 	gridFactory.prototype.load = function(params) {
 		var res = this.resource.get(params, function() {
 			this.options.data= res.data;
 			this.options.totalItems = res.total;
 		}.bind(this));
 	}



 	/**
 	 * Load data 
 	 * @param Object params
 	 */
 	gridFactory.prototype.gridOptions = function() {
 		return this.options;
 	}

 	return gridFactory;
 }])