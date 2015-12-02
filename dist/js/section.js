
(function(window, _, angular, undefined) {

'use strict';

/**
 * @name            OnhanhSection
 * @description     Sectionmodule
 */
var sectionModule = angular.module("app.section", [
	'ui.router',
	'app.category'
]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionConfig
 */
sectionModule
    .config(['$stateProvider',
        function($stateProvider) {

          var getCategories = ['Categories', function(Categories) {
             return Categories.query();
          }];

          var getSectionId = ['$stateParams', function($stateParams) {
             return $stateParams.id;
          }];
         // Use $stateProvider to configure your states.
          $stateProvider

          .state("section", {
            title: "Mục",
            url: "/section",
            controller: 'sectionController',
            templateUrl: '/web/section/list.html',

          })

          .state("section.new", {
            title: "New Section",
            url: "/new",

            views: {
              "@": {
                resolve: {
                  categories: getCategories,
                  sectionId: getSectionId,
                  section:['Sections', function(Sections) {
                    return new Sections();
                  }]
                },
                controller: 'sectionDetailController',
                templateUrl: '/web/section/detail.html',
              }
            }

          })

          .state("section.detail", {
            title: "Detail",
            url: "/:id",

            views: {
              "@": {
                resolve: {
                  categories: getCategories,
                  sectionId: getSectionId,
                  section:['Sections', 'sectionId', function(Sections, sectionId) {
                    return Sections.get({id: sectionId});
                  }]
                },
                controller: 'sectionDetailController',
                templateUrl: '/web/section/detail.html',
              }
            }

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
.controller('sectionDetailController', [ '$scope', '$state', 'section', 'categories',
    function($scope, $state, section, categories) {

        $scope.resource = section;
        $scope.categories = categories;

        var goBack = function() {
            $state.go('section');
        }

        // Delete
        $scope.onDelete = $scope.onSaveAndFinish = $scope.onCancel = goBack;
    }
]);

'use strict';

/**
 * @name            OnhanhSection
 * @description     SectionController
 */
sectionModule
.controller('sectionController', [ '$scope', '$state', 'sectionGrid',
    function($scope, $state, sectionGrid) {
        
        $scope.gridOptions = sectionGrid.gridOptions($scope);


        $scope.viewDetail = function(entity) {
            $state.transitionTo('section.detail',{
              id:entity.id
            })
        }

        $scope.newRow = function() {
            $state.transitionTo('section.new');
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
        '<div class="ngCellText ui-grid-cell-contents" title="TOOLTIP"> ',
            '<a href="javascript:void(0)"  ng-click="grid.appScope.viewDetail(row.entity)"><i class="fa fa-pencil-square-o"></i></a>',
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
        enableColumnMenus: false,
        enableScrollbars: false,
        enableHorizontalScrollbar: 0, 
        enableVerticalScrollbar: 0,
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
