
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhSection
 * @description     Sectionmodule
 */
var sectionModule = angular.module("app.section", []);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionConfig
 */
sectionModule
    .config(['$stateProvider',
        function($stateProvider) {

          var getCategories = ['Categories', function(Categories) {
             return Category.all();
          }];

          var getSectionId = ['$stateParams', function($stateParams) {
             return $stateParams.id;
          }];
         // Use $stateProvider to configure your states.
          $stateProvider

            .state("section", {
              title: "Mục",
              // Use a url of "/" to set a states as the "index".
              url: "/section",

              resolve: {
                  sections:['Sections', function(Sections) {
                    return Sections.query();
                  }]
              },

              // Example of an inline template string. By default, templates
              // will populate the ui-view within the parent state's template.
              // For top level states, like this one, the parent template is
              // the index.html file. So this template will be inserted into the
              // ui-view within index.html.
              controller: 'sectionController',
              templateUrl: '/web/section/list.html',
              
            });
        }
    ]);

'use strict';

/**
 * @name            OnhanhProduct
 * @description     sectionModule
 */
sectionModule.factory('Sections', ['resourceService',
    function(resourceService) {
    	var sectionResource = resourceService('section');
    	return sectionResource;
    }
]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionDetailController
 */
sectionModule
.controller('sectionDetailController', [ '$scope', '$state', 'sectionItem', 'categories',
    function($scope, $state, sectionItem) {
        
        $scope.resource = sectionItem;
        $scope.categories = categories;
        
        // Delete
        $scope.onDelete = function() {
            $state.go('section');
        }
        
        // Save and Finish
        $scope.onSaveAndFinish = function() {
            $state.go('section');
        }
    }
]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
.controller('sectionController', [ '$scope', 'sectionGrid',
    function($scope, sectionGrid) {
        
        $scope.gridOptions = sectionGrid.gridOptions($scope);
        $scope.new = function() {
            $state.go('section.new');
        }

        $scope.gridOptions.load();

    }
]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     sectionModule
 */
sectionModule
.service("sectionGrid", ['Sections', function(Sections) {
  return {
    columns: [{
      name: "action",
      width: '23',
      displayName: "",
      enableCellEdit: false,
      enableSorting: false,
      cellTemplate: [
        '<div class="ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a href="#"><i class="fa fa-pencil-square-o"></i></a>',
        '</div>'
      ].join('')
    },{
      name: "name",
      displayName: "Name",
    }],
    
    gridOptions: function($scope) {
      var options = $scope.options || {};
      var defaults = {
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        enableFiltering: false,
        enableSorting: true,
        exporterMenuCsv: false,
        enableGridMenu: false,
        useExternalFiltering: false,
        columnDefs: this.columns,
        load: function(params, fn) {
          var res = Sections.query(function() {
            this.data= res;
            this.totalItems = res.length;
            fn ? fn : "";
          }.bind(this));
        },
        
        onRegisterApi: function(gridApi) {
          this.api = gridApi;
          
          if($scope.saveRow) {
            gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
          }
        }
      }
      return angular.extend(defaults, options);
    }
  }
}]);


})(window, _, window.angular);
