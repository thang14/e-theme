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
    "<div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"index.html\"><img src=\"images/logo.png\" alt=\"\"></a></div><!--.navbar-header--><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown dropdown-user\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\"><img src=\"images/face11.jpg\" alt=\"\"> <span>Thắng</span> <i class=\"caret\"></i></a><ul class=\"dropdown-menu dropdown-menu-right\"><li><a href=\"#\"><i class=\"glyphicon glyphicon-user\"></i> Thông tin cá nhân</a></li><li><a href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i> Thoát</a></li></ul></li></ul><!--.navbar-right--></div><!--.navbar-collapse collapse-->"
  );


  $templateCache.put('/web/layouts/main.html',
    "<header class=\"navbar navbar-inverse navbar-fixed-top\" ng-include=\"'/web/layouts/header.html'\"></header><!--header--><div class=\"page-container\" style=\"min-height:1000px\"><div class=\"page-content\"><div class=\"sidebar sidebar-main\" ng-include=\"'/web/layouts/sidebar.html'\"></div><div class=\"content-wrapper\" ui-view></div><!--.content-wrappe--></div><!--.page-content--></div><!--.page-container--><footer ng-include=\"'/web/layouts/footer.html'\"></footer><!--header-->"
  );


  $templateCache.put('/web/layouts/sidebar.html',
    "<div class=\"sidebar-content\"><div class=\"sidebar-shop\"><div class=\"category-content\"><div class=\"media\"><a href=\"#\" class=\"media-left\"><img src=\"images/face11.jpg\" class=\"img-circle img-sm\" alt=\"\"></a><div class=\"media-body\"><span class=\"media-heading text-semibold\">Thực phẩm sạch</span><!--.media-heading--><div class=\"text-size-mini text-muted\"><i class=\"fa fa-map-marker text-size-small\"></i>&nbsp;Hanoi</div><!--.text-size-mini--></div><!--.media-body--><div class=\"media-right media-middle\"><ul class=\"icons-list\"><li><a ui-sref=\"settings\"><i class=\"glyphicon glyphicon-cog\"></i></a></li></ul></div><!--.sidebar-shop--></div><!--.sidebar-shop--></div></div><!--.sidebar-shop--><div class=\"sidebar-category sidebar-category-visible\"><div class=\"category-content no-padding\"><ul class=\"navigation navigation-main navigation-accordion\"><li ui-sref-active=\"active\"><a ui-sref=\"home\"><i class=\"glyphicon glyphicon-home\"></i>Bản điều kiển</a></li><li ui-sref-active=\"active\"><a ui-sref=\"product\"><i class=\"glyphicon glyphicon-tag\"></i>Sản phẩm</a></li><li ui-sref-active=\"active\"><a ui-sref=\"order\"><i class=\"glyphicon glyphicon-edit\"></i>Đơn đặt hàng</a></li><li ui-sref-active=\"active\"><a ui-sref=\"section\"><i class=\"glyphicon glyphicon-check\"></i>Thành phần</a></li><li ui-sref-active=\"active\"><a ui-sref=\"reports\"><i class=\"glyphicon glyphicon-calendar\"></i>Báo cáo, thống kê</a></li></ul><!--.navigation--></div><!--.category-content--></div><!--.sidebar-category--></div><!--.sidebar-content-->"
  );


  $templateCache.put('/web/order/list.html',
    "Order list"
  );


  $templateCache.put('/web/product/add.html',
    "<form name=\"productAdd\"><div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Đăng sản phẩm mới</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><div ng-include=\"'/web/product/buttons.html'\"></div></div></div><!--.page-header--><div class=\"content\"><h3>Quan trọng</h3><div style=\"max-width:440px\"><div class=\"form-group\"><label for=\"productName\">Tên <strong class=\"color-red\">(*)</strong></label><input type=\"text\" ng-model=\"item.name\" class=\"form-control\" id=\"productName\" placeholder=\"Name\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Nhà cung cấp</label><input ng-model=\"item.branh\" type=\"text\" class=\"form-control\" id=\"productBranh\" placeholder=\"Branh\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Giao diện</label><select class=\"form-control\" ng-model=\"item.template\" ng-change=\"selectTemplate(item.template)\"><option value=\"\">--Không chọn--</option><option ng-repeat=\"(index, value) in templateValues\" value=\"{{index}}\">{{value}}</option></select></div><!--.form-group--></div><div ng-if=\"item.template != null\"><h3>Biến thể</h3><div class=\"form-group\" style=\"max-width:440px\"><div class=\"form-group\" ng-repeat=\"option in item.variant_options\"><label>{{option.label}}</label><tags-input min-length=\"1\" max-length=\"20\" ng-model=\"option.items\"></tags-input></div></div><!--.form-group--><div class=\"form-group\"><button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"generateVariants()\">Cập nhật biến thể</button></div><!--.form-group--><div class=\"form-group\" ng-if=\"item.variants.length > 0\" style=\"max-width:600px\"><div class=\"variant-list\"><table><thead><tr><th>Hành động</th><th>Biến thể</th><th>Sku</th><th>Barcode</th><th>Giá tiền</th><th>Giảm giá</th><th>Số lượng</th></tr></thead><tbody><tr ng-repeat=\"variant in item.variants\"><td width=\"80\"><a href=\"removeVariant(variant)\">Xóa</a></td><td width=\"100\">{{getVariantOptionValues(variant.options)}}</td><td width=\"100\" style=\"padding:5px\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.sku\"></td><td width=\"100\" style=\"padding:5px\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.barcode\"></td><td width=\"100\" style=\"padding:5px\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.price\"></td><td width=\"100\" style=\"padding:5px\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.sale\"></td><td width=\"50\" style=\"padding:5px\"><input class=\"form-control\" type=\"text\" ng-model=\"variant.quantity\"></td></tr></tbody></table></div></div><!--.form-group--></div><div ng-if=\"item.template == null\" style=\"max-width:440px\"><h3>Thông tin sản phẩm</h3><div class=\"form-group\"><ul class=\"media-list\"><li class=\"item\" ng-repeat=\"media in item.current.medias\"><img ng-src=\"media.path\"><ul class=\"media-action\"><li><a href=\"javascript:void(0)\" ng-click=\"fileDelete(media)\">Remove</a></li><li><a href=\"javascript:void(0)\" ng-click=\"setMediaDefault(media)\">Đặt ảnh chính</a></li></ul></li><li class=\"file-upload\"><a ngf-multiple=\"true\" accept=\"image/*\" ngf-select=\"\" ngf-drop=\"\" ng-model=\"files\" href=\"javascript:void(0)\"><i class=\"fa fa-upload fa-4\"></i><div class=\"text-hint\">Tải ảnh lên</div></a></li></ul></div><!--.form-group--><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSku\">Sku</label><input ng-model=\"item.current.sku\" type=\"text\" class=\"form-control\" id=\"productSku\" placeholder=\"Sku\"></div><!--.form-group--></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productBarcode\">Barcode</label><input ng-model=\"item.current.barcode\" type=\"text\" class=\"form-control\" id=\"productBarcode\" placeholder=\"Barcode\"></div><!--.form-group--></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productPrice\">Giá tiền</label><input ng-model=\"item.current.price\" type=\"text\" class=\"form-control\" id=\"productPrice\" placeholder=\"Price\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSalePrice\">Khuyến mãi</label><input ng-model=\"item.current.sale\" type=\"text\" class=\"form-control\" id=\"productSalePrice\" placeholder=\"Sale price\"></div><!--.form-group--></div></div>><div class=\"form-group\"><label for=\"productSalePrice\">Số lượng</label><input ng-model=\"item.current.quantity\" type=\"text\" class=\"form-control\" id=\"productQuantity\" placeholder=\"Quantity\"></div><!--.form-group--></div><div style=\"max-width:600px\"><!-- Nav tabs --><ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a class=\"text-semibold\" href=\"#attributes\" aria-controls=\"attributes\" role=\"tab\" data-toggle=\"tab\">Thuộc tính</a></li><li role=\"presentation\"><a class=\"text-semibold\" href=\"#keywords\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Từ khóa</a></li><li role=\"presentation\"><a class=\"text-semibold\" href=\"#description\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Mô tả</a></li></ul><!-- Tab panes --><div class=\"tab-content\" style=\"padding:20px\"><div role=\"tabpanel\" class=\"tab-pane active\" ng-init=\"item.attrs = [{}]\" id=\"attributes\" style=\"max-width:440px\"><div class=\"form-group\" ng-repeat=\"(index, attr) in item.attrs\"><div class=\"row\"><div class=\"col-md-4\"><input placeholder=\"Tên\" type=\"text\" class=\"form-control\" ng-model=\"attr.name\"></div><div class=\"col-md-7\"><input placeholder=\"Giá trị\" type=\"text\" class=\"form-control\" ng-model=\"attr.value\"></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" style=\"margin-top: 5px;display: block;font-size: 15px;color: #999\" ng-click=\"item.attrs.splice(index, 1)\"><i class=\"fa fa-times\"></i></a></div></div></div><!--.row--><div class=\"form-group\"><button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"item.attrs.push({})\">+ Thêm thuộc tính</button></div><!--.row--></div><!--#attributes--><div role=\"tabpanel\" class=\"tab-pane\" id=\"keywords\"><div class=\"form-group\"><label for=\"productKeywords\">Từ khóa</label><textarea rows=\"5\" ng-model=\"item.keywords\" type=\"text\" class=\"form-control\" id=\"productKeywords\" placeholder=\"Keywords\"></textarea></div><!--.form-group--></div><!--#keywords--><div role=\"tabpanel\" class=\"tab-pane\" id=\"description\"><div class=\"form-group\"><label for=\"productDescriptionList\">Chính</label><div class=\"form-group\"><input ng-model=\"item.description_list[0]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 1\"></div><!--.form-group--><div class=\"form-group\"><input ng-model=\"item.description_list[1]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 2\"></div><!--.form-group--><div class=\"form-group\"><input ng-model=\"item.description_list[2]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 3\"></div><!--.form-group--><div class=\"form-group\"><input ng-model=\"item.description_list[3]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 4\"></div><!--.form-group--></div><!--.form-group--><div class=\"form-group\"><label for=\"productDescription\">Mô tả thêm</label><textarea rows=\"5\" ng-model=\"item.description\" type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Description\"></textarea></div><!--.form-group--></div><!--#description--></div></div><!--Tab--><div class=\"checkbox\"><label><input ng-model=\"item.status\" value=\"1\" type=\"checkbox\"> Cho phép tìm kiếm sản phẩm</label></div><div style=\"padding-top:50px\"><div ng-include=\"'/web/product/buttons.html'\"></div></div></div><!--.content--></form>"
  );


  $templateCache.put('/web/product/buttons.html',
    "<button type=\"button\" class=\"btn btn-danger btn-sm text-semibold\" ng-click=\"cancel()\">Hủy</button> <button type=\"button\" class=\"btn btn-danger btn-sm text-semibold\" ng-click=\"reset()\">Thiết lập lại</button> <button type=\"button\" class=\"btn btn-primary btn-sm text-semibold\" ng-click=\"editSave()\"><i class=\"fa fa-floppy-o\"></i> Lưu</button> <button type=\"button\" class=\"btn btn-primary btn-sm text-semibold\" ng-click=\"editSaveAndFinish()\"><i class=\"fa fa-floppy-o\"></i> Lưu và kết thúc</button>"
  );


  $templateCache.put('/web/product/detail.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>{{$state.current.title}}</h4></div></div><!--.page-header-content--><div class=\"pull-right\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"newProduct()\">Add New Product</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"editCancel()\">Cancel</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"editSave()\">Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"editSaveAndFinish()\">Save and finish</button></div></div><!--.page-header--><div class=\"content\"></div><!--.content-->"
  );


  $templateCache.put('/web/product/list.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Danh sách sản phẩm</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><div class=\"row\"><div class=\"col-md-12 nav-buttons\"><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-primary add-new-item\" ng-click=\"newProduct()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Đăng sản phẩm</button></div></div></div></div></div><!--.page-header--><div class=\"content\"><div class=\"col-md-12\"><div class=\"row\"><div id=\"content-grid\" ui-grid=\"gridOptions\" class=\"content-grid\"></div></div></div><!-- Pagination & collection details --><div class=\"row\"><div class=\"col-md-8\"><pagination ng-if=\"gridOptions.totalItems > 0\" on-select-page=\"load(page)\" items-per-page=\"{{pageLimit}}\" total-items=\"gridOptions.totalItems\" page=\"pageNumber\"></pagination></div><div class=\"col-md-4\"><p class=\"pagination-info pagination\"><strong>Total in collection: {{gridOptions.totalItems}} Current: {{pageNumber}}</strong></p></div></div></div><!--.content-->"
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
