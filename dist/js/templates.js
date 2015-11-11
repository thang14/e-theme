angular.module('app.kernel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/web/auth/login.html',
    "<div class=\"row\"></div>"
  );


  $templateCache.put('/web/collection/action.html',
    "<button class=\"btn btn-link\" ng-click=\"grid.appScope.editDetails(row.entity.id)\"><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> edit</button>"
  );


  $templateCache.put('/web/dashboard/dashboard.html',
    "Dashboard"
  );


  $templateCache.put('/web/layouts/footer.html',
    "<div></div>"
  );


  $templateCache.put('/web/layouts/header.html',
    "<div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"index.html\"><img src=\"images/logo.png\" alt=\"\"></a></div><!--.navbar-header--><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown dropdown-user\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\"><img src=\"images/face11.jpg\" alt=\"\"> <span>Thắng</span> <i class=\"caret\"></i></a><ul class=\"dropdown-menu dropdown-menu-right\"><li><a href=\"#\"><i class=\"glyphicon glyphicon-user\"></i> My profile</a></li><li><a href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i> Logout</a></li></ul></li></ul><!--.navbar-right--></div><!--.navbar-collapse collapse-->"
  );


  $templateCache.put('/web/layouts/main.html',
    "<header class=\"navbar navbar-inverse navbar-fixed-top\" ng-include=\"'/web/layouts/header.html'\"></header><!--header--><div class=\"page-container\" style=\"min-height:1000px\"><div class=\"page-content\"><div class=\"sidebar sidebar-main\" ng-include=\"'/web/layouts/sidebar.html'\"></div><div class=\"content-wrapper\"><div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>{{$state.current.title}}</h4></div></div><!--.page-header-content--></div><!--.page-header--><div class=\"content\" ui-view></div><!--.content--></div><!--.content-wrappe--></div><!--.page-content--></div><!--.page-container--><footer ng-include=\"'/web/layouts/footer.html'\"></footer><!--header-->"
  );


  $templateCache.put('/web/layouts/sidebar.html',
    "<div class=\"sidebar-content\"><div class=\"sidebar-shop\"><div class=\"category-content\"><div class=\"media\"><a href=\"#\" class=\"media-left\"><img src=\"images/face11.jpg\" class=\"img-circle img-sm\" alt=\"\"></a><div class=\"media-body\"><span class=\"media-heading text-semibold\">Thực phẩm sạch</span><!--.media-heading--><div class=\"text-size-mini text-muted\"><i class=\"fa fa-map-marker text-size-small\"></i>&nbsp;Hanoi</div><!--.text-size-mini--></div><!--.media-body--><div class=\"media-right media-middle\"><ul class=\"icons-list\"><li><a href=\"#\"><i class=\"glyphicon glyphicon-cog\"></i></a></li></ul></div><!--.sidebar-shop--></div><!--.sidebar-shop--></div></div><!--.sidebar-shop--><div class=\"sidebar-category sidebar-category-visible\"><div class=\"category-content no-padding\"><ul class=\"navigation navigation-main navigation-accordion\"><li ui-sref-active=\"active\"><a ui-sref=\"home\"><i class=\"glyphicon glyphicon-home\"></i>Dashboard</a></li><li ui-sref-active=\"active\"><a ui-sref=\"product\"><i class=\"glyphicon glyphicon-tag\"></i>Products</a></li><li ui-sref-active=\"active\"><a ui-sref=\"order\"><i class=\"glyphicon glyphicon-edit\"></i>Orders</a></li><li ui-sref-active=\"active\"><a ui-sref=\"section\"><i class=\"glyphicon glyphicon-check\"></i>Sections</a></li><li ui-sref-active=\"active\"><a ui-sref=\"reports\"><i class=\"glyphicon glyphicon-calendar\"></i>Reports</a></li><li ui-sref-active=\"active\"><a ui-sref=\"settings\"><i class=\"glyphicon glyphicon-star\"></i>Settings</a></li></ul><!--.navigation--></div><!--.category-content--></div><!--.sidebar-category--></div><!--.sidebar-content-->"
  );


  $templateCache.put('/web/order/list.html',
    "Order list"
  );


  $templateCache.put('/web/product/add.html',
    "<div class=\"product-form\"><form name=\"productForm\"><ul class=\"product-step\"><li><a href=\"javascript:void(0)\">Thông tin cần thiết</a></li><li><a href=\"javascript:void(0)\">Hình ảnh</a></li><li><a href=\"javascript:void(0)\">Từ khóa</a></li><li><a href=\"javascript:void(0)\">Mô tả</a></li></ul><button type=\"submit\" ng-click=\"editSave()\">Save</button></form></div>"
  );


  $templateCache.put('/web/product/detail.html',
    ""
  );


  $templateCache.put('/web/product/list.html',
    "<div class=\"\"><!-- Heading actions --><div class=\"col-md-12 page-header\"><div class=\"row\"><div class=\"row\"><div class=\"col-md-12 nav-buttons\"><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-success\" ng-click=\"load()\"><span class=\"glyphicon glyphicon-filter\" aria-hidden=\"true\"></span> Filter</button> <button type=\"submit\" class=\"btn btn-primary add-new-item\" ng-click=\"newProduct()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add New Item</button></div></div></div></div></div><!-- Collection Grid --><div class=\"col-md-12\"><div class=\"row\"><div id=\"content-grid\" ui-grid=\"gridOptions\" class=\"content-grid\"></div></div></div><!-- Pagination & collection details --><div class=\"row\"><div class=\"col-md-8\"><pagination ng-if=\"gridOptions.totalItems > 0\" on-select-page=\"load(page)\" items-per-page=\"{{pageLimit}}\" total-items=\"gridOptions.totalItems\" page=\"pageNumber\"></pagination></div><div class=\"col-md-4\"><p class=\"pagination-info pagination\"><strong>Total in collection: {{gridOptions.totalItems}} Current: {{pageNumber}}</strong></p></div></div></div>"
  );


  $templateCache.put('/web/reports/reports.html',
    "Report Page"
  );


  $templateCache.put('/web/section/add.html',
    ""
  );


  $templateCache.put('/web/section/detail.html',
    ""
  );


  $templateCache.put('/web/section/list.html',
    ""
  );


  $templateCache.put('/web/settings/settings.html',
    ""
  );


  $templateCache.put('/web/shop/detail.html',
    ""
  );


  $templateCache.put('/web/ui-grid/editor-price.html',
    "<div><form name=\"inputForm\"><input ui-number-mask=\"0\" ng-class=\"'colt' + col.uid\" type=\"INPUT_TYPE\" ui-grid-editor ng-model=\"MODEL_COL_FIELD\"></form></div>"
  );


  $templateCache.put('/web/ui-grid/image-view.html',
    "<div class=\"ngCellText text-center\"><img style=\"height:35px\" ng-src=\"{{MODEL_COL_FIELD}}\"></div>"
  );


  $templateCache.put('/web/variant/add.html',
    ""
  );


  $templateCache.put('/web/variant/detail.html',
    ""
  );


  $templateCache.put('/web/variant/list.html',
    ""
  );

}]);
