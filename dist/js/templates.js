angular.module('app.kernel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/web/auth/login.html',
    "<div class=\"row\"></div>"
  );


  $templateCache.put('/web/collection/action.html',
    "<button class=\"btn btn-link\" ng-click=\"grid.appScope.editDetails(row.entity.id)\"><span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> edit</button>"
  );


  $templateCache.put('/web/dashboard/dashboard.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>{{$state.current.title}}</h4></div></div><!--.page-header-content--></div><!--.page-header--><div class=\"content\">Dashboard Page</div><!--.content-->"
  );


  $templateCache.put('/web/layouts/footer.html',
    "<div></div>"
  );


  $templateCache.put('/web/layouts/header.html',
    "<div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"index.html\"><img src=\"images/logo.png\" alt=\"\"></a></div><!--.navbar-header--><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown dropdown-user\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\"><img src=\"images/face11.jpg\" alt=\"\"> <span>Thắng</span> <i class=\"caret\"></i></a><ul class=\"dropdown-menu dropdown-menu-right\"><li><a href=\"#\"><i class=\"glyphicon glyphicon-user\"></i> My profile</a></li><li><a href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i> Logout</a></li></ul></li></ul><!--.navbar-right--></div><!--.navbar-collapse collapse-->"
  );


  $templateCache.put('/web/layouts/main.html',
    "<header class=\"navbar navbar-inverse navbar-fixed-top\" ng-include=\"'/web/layouts/header.html'\"></header><!--header--><div class=\"page-container\" style=\"min-height:1000px\"><div class=\"page-content\"><div class=\"sidebar sidebar-main\" ng-include=\"'/web/layouts/sidebar.html'\"></div><div class=\"content-wrapper\" ui-view></div><!--.content-wrappe--></div><!--.page-content--></div><!--.page-container--><footer ng-include=\"'/web/layouts/footer.html'\"></footer><!--header-->"
  );


  $templateCache.put('/web/layouts/sidebar.html',
    "<div class=\"sidebar-content\"><div class=\"sidebar-shop\"><div class=\"category-content\"><div class=\"media\"><a href=\"#\" class=\"media-left\"><img src=\"images/face11.jpg\" class=\"img-circle img-sm\" alt=\"\"></a><div class=\"media-body\"><span class=\"media-heading text-semibold\">Thực phẩm sạch</span><!--.media-heading--><div class=\"text-size-mini text-muted\"><i class=\"fa fa-map-marker text-size-small\"></i>&nbsp;Hanoi</div><!--.text-size-mini--></div><!--.media-body--><div class=\"media-right media-middle\"><ul class=\"icons-list\"><li><a href=\"#\"><i class=\"glyphicon glyphicon-cog\"></i></a></li></ul></div><!--.sidebar-shop--></div><!--.sidebar-shop--></div></div><!--.sidebar-shop--><div class=\"sidebar-category sidebar-category-visible\"><div class=\"category-content no-padding\"><ul class=\"navigation navigation-main navigation-accordion\"><li ui-sref-active=\"active\"><a ui-sref=\"home\"><i class=\"glyphicon glyphicon-home\"></i>Dashboard</a></li><li ui-sref-active=\"active\"><a ui-sref=\"product\"><i class=\"glyphicon glyphicon-tag\"></i>Products</a></li><li ui-sref-active=\"active\"><a ui-sref=\"order\"><i class=\"glyphicon glyphicon-edit\"></i>Orders</a></li><li ui-sref-active=\"active\"><a ui-sref=\"section\"><i class=\"glyphicon glyphicon-check\"></i>Sections</a></li><li ui-sref-active=\"active\"><a ui-sref=\"reports\"><i class=\"glyphicon glyphicon-calendar\"></i>Reports</a></li><li ui-sref-active=\"active\"><a ui-sref=\"settings\"><i class=\"glyphicon glyphicon-star\"></i>Settings</a></li></ul><!--.navigation--></div><!--.category-content--></div><!--.sidebar-category--></div><!--.sidebar-content-->"
  );


  $templateCache.put('/web/order/list.html',
    "Order list"
  );


  $templateCache.put('/web/product/add.html',
    "<form name=\"productAdd\" class=\"form-horizontal\"><div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Create New Product</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"editCancel()\">Cancel</button> <button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"editSave()\"><i class=\"fa fa-floppy-o\"></i> Save</button> <button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"editSaveAndFinish()\"><i class=\"fa fa-floppy-o\"></i> Save and finish</button></div></div><!--.page-header--><div class=\"content\"><h3>Quan trọng</h3><div class=\"form-group\"><label for=\"productName\" class=\"col-sm-2 control-label\">Name <strong class=\"color-red\">(*)</strong></label><div class=\"col-sm-7\"><input type=\"text\" ng-model=\"item.name\" class=\"form-control\" id=\"productName\" placeholder=\"Name\"></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\" class=\"col-sm-2 control-label\">Branh</label><div class=\"col-sm-2\"><input ng-model=\"item.branh\" type=\"text\" class=\"form-control\" id=\"productBranh\" placeholder=\"Branh\"></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\" class=\"col-sm-2 control-label\">Template</label><div class=\"col-sm-2\"><select ng-options=\"option in variantOptionTemplates track by $index\" ng-model=\"item.template\" ng-change=\"generateVariantOption()\"></select></div></div><!--.form-group--><div ng-if=\"item.template != 0\"><h3>Biến thể</h3><div class=\"form-group\"><label class=\"col-sm-2 control-label\">&nbsp;</label><div class=\"col-sm-6\"><div class=\"form-group\" ng-repeat=\"(variantOptionName, index) in item.variant_option_names\"><label class=\"col-sm-2 control-label\">{{variantOptionLabels[variantOptionName]}}</label><div class=\"col-sm-10\"><tags-input ng-model=\"item.variant_options_values[index]\"></tags-input></div></div><!--.form-group--></div></div><!--.form-group--><div class=\"form-group\" ng-if=\"item.variants.length > 0\"><label class=\"col-sm-2 control-label\">&nbsp;</label><div class=\"col-sm-10\"><div class=\"variant-list\"><table><thead><tr><th>Action</th><th>Variant</th><th>Sku</th><th>Barcode</th><th>Price</th><th>Sale price</th><th>Quantity</th></tr></thead><tbody><tr ng-repeat=\"variant in item.variants\"><td width=\"80\"><a href=\"removeVariant(variant)\">Remove</a></td><td width=\"100\">{{getVariantLabel(variant.variants)}}</td><td width=\"100\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.sku\"></td><td width=\"100\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.barcode\"></td><td width=\"100\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.price\"></td><td width=\"100\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.sale_price\"></td><td width=\"50\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.quantity\"></td></tr></tbody></table></div></div></div><!--.form-group--></div><div ng-if=\"item.template === 0\"><h3>Product info</h3><div class=\"form-group\"><label for=\"productMedia\" class=\"col-sm-2 control-label\">Photo</label><div class=\"col-sm-10\"><ul class=\"media-list\"><li class=\"item\" ng-repeat=\"media in item.current.medias\"><img ng-src=\"media.path\"><ul class=\"media-action\"><li><a href=\"javascript:void(0)\" ng-click=\"fileDelete(media)\">Remove</a></li><li><a href=\"javascript:void(0)\" ng-click=\"setMediaDefault(media)\">Đặt ảnh chính</a></li></ul></li><li class=\"file-upload\"><a href=\"javascript:void(0)\">Upload File</a></li></ul></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productSku\" class=\"col-sm-2 control-label\">Sku</label><div class=\"col-sm-3\"><input ng-model=\"item.current.sku\" type=\"text\" class=\"form-control\" id=\"productSku\" placeholder=\"Sku\"></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productBarcode\" class=\"col-sm-2 control-label\">Barcode</label><div class=\"col-sm-3\"><input ng-model=\"item.current.barcode\" type=\"text\" class=\"form-control\" id=\"productBarcode\" placeholder=\"Barcode\"></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productPrice\" class=\"col-sm-2 control-label\">Price</label><div class=\"col-sm-3\"><input ng-model=\"item.current.price\" type=\"text\" class=\"form-control\" id=\"productPrice\" placeholder=\"Price\"></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productSalePrice\" class=\"col-sm-2 control-label\">Sale price</label><div class=\"col-sm-3\"><input ng-model=\"item.current.sale_price\" type=\"text\" class=\"form-control\" id=\"productSalePrice\" placeholder=\"Sale price\"></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productSalePrice\" class=\"col-sm-2 control-label\">Quantity</label><div class=\"col-sm-3\"><input ng-model=\"item.current.quantity\" type=\"text\" class=\"form-control\" id=\"productQuantity\" placeholder=\"Quantity\"></div></div><!--.form-group--></div><div><!-- Nav tabs --><ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a href=\"#attributes\" aria-controls=\"attributes\" role=\"tab\" data-toggle=\"tab\">Thuộc tính</a></li><li role=\"presentation\"><a href=\"#keywords\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Từ khóa</a></li><li role=\"presentation\"><a href=\"#description\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Mô tả</a></li></ul><!-- Tab panes --><div class=\"tab-content\"><div role=\"tabpanel\" class=\"tab-pane active\" id=\"attributes\"><div class=\"form-group\"><div class=\"col-sm-12\"><div class=\"row\" ng-repeat=\"attr in item.attrs\"><div class=\"col-md-4\"><input type=\"text\" class=\"form-control\" ng-model=\"attr.name\"></div><div class=\"col-md-5\"><input type=\"text\" class=\"form-control\" ng-model=\"attr.value\"></div></div><!--.row--><button type=\"button\" class=\"btn btn-default\">Add Attribute</button></div></div><!--.form-group--></div><!--#attributes--><div role=\"tabpanel\" class=\"tab-pane\" id=\"keywords\"><div class=\"form-group\"><label for=\"productKeywords\" class=\"col-sm-2 control-label\">Keywords</label><div class=\"col-sm-3\"><textarea ng-model=\"item.keywords\" type=\"text\" class=\"form-control\" id=\"productKeywords\" placeholder=\"Keywords\"></textarea></div></div><!--.form-group--></div><!--#keywords--><div role=\"tabpanel\" class=\"tab-pane\" id=\"description\"><div class=\"form-group\"><label for=\"productDescriptionList\" class=\"col-sm-2 control-label\">Description list</label><div class=\"col-sm-3\"><div class=\"form-group\"><div class=\"col-md-12\"><input ng-model=\"item.description_list[0]\" type=\"text\" class=\"form-control\" id=\"productDescriptionList\" placeholder=\"Description list\"></div></div><div class=\"form-group\"><div class=\"col-md-12\"><input ng-model=\"item.description_list[1]\" type=\"text\" class=\"form-control\" id=\"productDescriptionList\" placeholder=\"Description list\"></div></div><div class=\"form-group\"><div class=\"col-md-12\"><input ng-model=\"item.description_list[2]\" type=\"text\" class=\"form-control\" id=\"productDescriptionList\" placeholder=\"Description list\"></div></div><div class=\"form-group\"><div class=\"col-md-12\"><input ng-model=\"item.description_list[3]\" type=\"text\" class=\"form-control\" id=\"productDescriptionList\" placeholder=\"Description list\"></div></div></div></div><!--.form-group--><div class=\"form-group\"><label for=\"productDescription\" class=\"col-sm-2 control-label\">Description more</label><div class=\"col-sm-3\"><textarea ng-model=\"item.description\" type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Description\"></textarea></div></div><!--.form-group--></div><!--#description--></div></div><!--Tab--></div><!--.content--></form>"
  );


  $templateCache.put('/web/product/detail.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>{{$state.current.title}}</h4></div></div><!--.page-header-content--><div class=\"pull-right\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"newProduct()\">Add New Product</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"editCancel()\">Cancel</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"editSave()\">Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"editSaveAndFinish()\">Save and finish</button></div></div><!--.page-header--><div class=\"content\"></div><!--.content-->"
  );


  $templateCache.put('/web/product/list.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>{{$state.current.title}}</h4></div></div><!--.page-header-content--><div class=\"pull-right\"><div class=\"row\"><div class=\"col-md-12 nav-buttons\"><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-success\" ng-click=\"load()\"><span class=\"glyphicon glyphicon-filter\" aria-hidden=\"true\"></span> Filter</button> <button type=\"submit\" class=\"btn btn-primary add-new-item\" ng-click=\"newProduct()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add New Item</button></div></div></div></div></div><!--.page-header--><div class=\"content\"><div class=\"col-md-12\"><div class=\"row\"><div id=\"content-grid\" ui-grid=\"gridOptions\" class=\"content-grid\"></div></div></div><!-- Pagination & collection details --><div class=\"row\"><div class=\"col-md-8\"><pagination ng-if=\"gridOptions.totalItems > 0\" on-select-page=\"load(page)\" items-per-page=\"{{pageLimit}}\" total-items=\"gridOptions.totalItems\" page=\"pageNumber\"></pagination></div><div class=\"col-md-4\"><p class=\"pagination-info pagination\"><strong>Total in collection: {{gridOptions.totalItems}} Current: {{pageNumber}}</strong></p></div></div></div><!--.content-->"
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
