angular.module('app.kernel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/web/auth/login.html',
    "<div class=\"row\"></div>"
  );


  $templateCache.put('/web/collection/action.html',
    "<div class=\"ngCellText ui-grid-cell-contents\"><a href=\"javascript:void(0)\" ng-click=\"grid.appScope.viewDetail(row)\"><i class=\"fa fa-database\"></i> Chi tiết</a></div>"
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


  $templateCache.put('/web/product/detail.html',
    "<form name=\"productForm\" crud-edit=\"product\"><div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4 ng-if=\"!product.id\">Sản phẩm mới</h4><h4 ng-if=\"product.id\">{{product.name}}</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><crud-buttons></crud-buttons></div></div><!--.page-header--><div class=\"content\"><div style=\"max-width:440px\"><div class=\"form-group\"><label for=\"productName\">Tên <strong class=\"color-red\">*</strong></label><input name=\"name\" type=\"text\" ng-model=\"product.name\" class=\"form-control\" id=\"productName\" required maxlength=\"255\" placeholder=\"Name\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Thành phần</label><ui-select ng-model=\"product.section\" theme=\"bootstrap\"><ui-select-match placeholder=\"Chọn hoặc tìm kiếm\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"section in sections | filter: $select.search\"><span ng-bind-html=\"section.name | highlight: $select.search | html\"></span> <small ng-bind-html=\"section.code | highlight: $select.search | html\"></small></ui-select-choices></ui-select></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Nhà cung cấp</label><input name=\"branh\" ng-model=\"product.branh\" type=\"text\" class=\"form-control\" id=\"productBranh\" maxlength=\"255\" placeholder=\"Branh\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Giao diện</label><select class=\"form-control\" ng-model=\"product.template\" ng-change=\"product.selectTemplate(product.theme)\"><option value=\"\">--Không chọn--</option><option ng-repeat=\"(index, value) in product.getTemplateDropdownList()\" value=\"{{index}}\">{{value}}</option></select></div><!--.form-group--></div><div ng-if=\"product.template != null\"><div class=\"form-group\" style=\"max-width:440px\"><div class=\"form-group\" ng-repeat=\"option in product.variant_options\"><label>{{option.label}}</label><tags-input min-length=\"1\" max-length=\"20\" placeholder=\"{{option.label}}\" ng-model=\"option.items\"></tags-input></div></div><!--.form-group--><div class=\"form-group\"><button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"generateVariant()\">Cập nhật biến thể</button></div><!--.form-group--><div class=\"form-group\" ng-if=\"product.variants.length > 0\" style=\"max-width:800px\"><div ng-include=\"'/web/product/variant/list.html'\"></div></div><!--.form-group--></div><div class=\"form-group\"><ul class=\"media-list\"><li class=\"item\" ng-repeat=\"(index, media) in product.getVariantDefault()\"><div class=\"action\"><div class=\"dropdown\"><a href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"product.removeMedia(media)\"><i class=\"fa fa-times\"></i>Xóa</a></li></ul></div></div><img ng-src=\"{{media.path}}\"></li><li class=\"file-upload\"><a ngf-multiple=\"true\" accept=\"image/*\" ngf-select=\"product.upload($files)\" ngf-drop=\"product.upload($files)\" ng-model=\"files\" href=\"javascript:void(0)\"><i class=\"fa fa-upload fa-4\"></i><div class=\"text-hint\">Tải ảnh lên</div></a></li></ul></div><!--.form-group--><div ng-if=\"product.template == null\" style=\"max-width:440px\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSku\">Mã Sku</label><input ng-model=\"product.variant.sku\" type=\"text\" class=\"form-control\" id=\"productSku\" placeholder=\"Mã Sku\"></div><!--.form-group--></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productBarcode\">Mã Barcode</label><input ng-model=\"product.current.barcode\" type=\"text\" class=\"form-control\" id=\"productBarcode\" placeholder=\"Mã Barcode\"></div><!--.form-group--></div></div><div class=\"row\"><div class=\"col-md-9\"><div class=\"form-group\"><label for=\"productPrice\">Giá tiền</label><div style=\"display:table-row\"><div style=\"display:table-cell\"><input ui-number-mask=\"0\" ng-model=\"product.variant.price\" type=\"text\" class=\"form-control text-right\" id=\"productPrice\" placeholder=\"Giá tiền\"></div><div style=\"display:table-cell; padding-left: 5px\"><strong>đ</strong></div></div></div></div><div class=\"col-md-3\"><div class=\"form-group\"><label for=\"productSalePrice\">Khuyến mãi</label><div style=\"display:table-row\"><div style=\"display:table-cell\"><input ng-model=\"product.variant.sale\" type=\"number\" min=\"0\" max=\"99\" class=\"form-control\" id=\"productSalePrice\" placeholder=\"Giá khuyến mãi\"></div><div style=\"display:table-cell; padding-left: 5px\"><strong>%</strong></div></div></div><!--.form-group--></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSalePrice\">Đơn vị tính</label><input ng-model=\"product.variant.unit\" type=\"text\" class=\"form-control\" id=\"productUnit\" placeholder=\"Đơn vị tính: kg, chiếc, đôi...\"></div><!--.form-group--></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSalePrice\">Số lượng</label><input ng-model=\"product.current.quantity\" type=\"number\" min=\"0\" max=\"999\" class=\"form-control\" id=\"productQuantity\" placeholder=\"Số lượng\"></div><!--.form-group--></div></div></div><div style=\"max-width:600px\"><!-- Nav tabs --><ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a class=\"text-semibold\" href=\"#attributes\" aria-controls=\"attributes\" role=\"tab\" data-toggle=\"tab\">Thuộc tính</a></li><li role=\"presentation\"><a class=\"text-semibold\" href=\"#keywords\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Từ khóa</a></li><li role=\"presentation\"><a class=\"text-semibold\" href=\"#description\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Mô tả</a></li></ul><!-- Tab panes --><div class=\"tab-content\" style=\"padding:10px; border: 1px solid #ddd; border-top:none; background:#fff\"><div role=\"tabpanel\" class=\"tab-pane active\" ng-init=\"product.attrs = [{}]\" id=\"attributes\"><div class=\"form-group\" ng-repeat=\"(index, attr) in product.attrs\"><div class=\"row\"><div class=\"col-md-4\"><input placeholder=\"Tên\" type=\"text\" class=\"form-control\" ng-model=\"attr.name\"></div><div class=\"col-md-7\"><input placeholder=\"Giá trị\" type=\"text\" class=\"form-control\" ng-model=\"attr.value\"></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" style=\"margin-top: 5px;display: block;font-size: 15px;color: #999\" ng-click=\"product.attrs.splice(index, 1)\"><i class=\"fa fa-times\"></i></a></div></div></div><!--.row--><div class=\"form-group\"><button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"product.attrs.push({})\">+ Thêm</button></div><!--.row--></div><!--#attributes--><div role=\"tabpanel\" class=\"tab-pane\" id=\"keywords\"><div class=\"form-group\"><label for=\"productKeywords\">Từ khóa</label><textarea rows=\"5\" ng-model=\"product.keywords\" type=\"text\" class=\"form-control\" id=\"productKeywords\" placeholder=\"Keywords\"></textarea></div><!--.form-group--></div><!--#keywords--><div role=\"tabpanel\" class=\"tab-pane\" id=\"description\"><div class=\"form-group\"><label for=\"productDescriptionList\">Chính</label><div class=\"form-group\" ng-repeat=\"desc in [0, 1, 2, 3, 4]\"><input ng-model=\"product.description_list[desc]\" type=\"text\" class=\"form-control\" placeholder=\"Nhập mô tả\"></div><!--.form-group--></div><!--.form-group--><div class=\"form-group\"><label for=\"productDescription\">Mô tả thêm</label><textarea rows=\"5\" ng-model=\"product.description\" type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Description\"></textarea></div><!--.form-group--></div><!--#description--></div></div><!--Tab--><div class=\"checkbox checkbox-primary\"><input ng-model=\"product.status\" id=\"productStatus\" value=\"1\" type=\"checkbox\"><label for=\"productStatus\">Cho phép tìm kiếm sản phẩm</label></div><div style=\"padding-top:50px\"><crud-buttons></crud-buttons></div></div><!--.content--></form>"
  );


  $templateCache.put('/web/product/list.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Danh sách sản phẩm</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><div class=\"row\"><div class=\"col-md-12 nav-buttons\"><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-primary btn-sm\" ng-click=\"newProduct()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Đăng sản phẩm</button></div></div></div></div></div><!--.page-header--><div class=\"content\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"grid\" style=\"max-height:500px\" ui-grid=\"gridOptions\" ui-grid-edit></div></div></div><!-- Pagination & collection details --><div class=\"row\"><div class=\"col-md-12\"><uib-pagination total-items=\"gridOptions.totalItems\" ng-model=\"currentPage\" ng-change=\"load()\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\" rotate=\"false\" num-pages=\"numPages\"></uib-pagination></div></div></div><!--.content-->"
  );


  $templateCache.put('/web/product/modal/media-list.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">Ảnh</h3></div><div class=\"modal-body\"><div class=\"form-group\"><ul class=\"media-list\"><li class=\"item\" ng-repeat=\"item in items\"><div class=\"action\"><div class=\"dropdown\"><a href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"resource.removeMedia(item)\"><i class=\"fa fa-times\"></i>Xóa</a></li></ul></div></div><img ng-src=\"{{media.path}}\"></li><li class=\"file-upload\"><a ngf-multiple=\"true\" accept=\"image/*\" ngf-select=\"resource.upload($files)\" ngf-drop=\"resource.upload($files)\" ng-model=\"files\" href=\"javascript:void(0)\"><i class=\"fa fa-upload fa-4\"></i><div class=\"text-hint\">Tải ảnh lên</div></a></li></ul></div><!--.form-group--></div><div class=\"modal-footer\"><button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Đóng</button></div>"
  );


  $templateCache.put('/web/product/variant/detail.html',
    "<form name=\"productForm\" crud-edit=\"variant\"><div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4 ng-if=\"!variant.id\">Biển thể mới</h4><h4 ng-if=\"variant.id\">Chỉnh sửa</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><crud-buttons></crud-buttons></div></div><!--.page-header--><div class=\"content\"><div class=\"form-group\"><ul class=\"media-list\"><li class=\"item\" ng-repeat=\"item in variant.medias\"><div class=\"action\"><div class=\"dropdown\"><a href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"variant.removeMedia(item)\"><i class=\"fa fa-times\"></i>Xóa</a></li></ul></div></div><img ng-src=\"{{media.path}}\"></li><li class=\"file-upload\"><a ngf-multiple=\"true\" accept=\"image/*\" ngf-select=\"variant.upload($files)\" ngf-drop=\"variant.upload($files)\" ng-model=\"files\" href=\"javascript:void(0)\"><i class=\"fa fa-upload fa-4\"></i><div class=\"text-hint\">Tải ảnh lên</div></a></li></ul></div><!--.form-group--><div style=\"max-width:300px\"><div class=\"form-group\"><label for=\"productBranh\">Mã SKU</label><input name=\"sku\" type=\"text\" ng-model=\"variant.sku\" class=\"form-control\" placeholder=\"Mã SKU\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Mã Barcode</label><input name=\"barcode\" type=\"text\" ng-model=\"variant.barcode\" class=\"form-control\" placeholder=\"Mã Barcode\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Số lượng</label><input name=\"quantity\" type=\"text\" ng-model=\"variant.quantity\" class=\"form-control\" placeholder=\"Số lượng \"></div><!--.form-group--><div class=\"form-group\" ng-repeat=\"(index, opt) in options\"><label for=\"productName\">{{opt.label}}</label><input type=\"text\" ng-model=\"option[index]\" class=\"form-control\" placeholder=\"{{opt.label}}\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Giá tiền</label><input name=\"price\" type=\"text\" ng-model=\"variant.price\" class=\"form-control\" placeholder=\"Tiền \"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Khuyến mãi</label><input name=\"sale\" type=\"text\" ng-model=\"variant.sale\" class=\"form-control\" placeholder=\"Khuyến mãi \"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Số lượng</label><input name=\"quantity\" type=\"text\" ng-model=\"variant.quantity\" class=\"form-control\" placeholder=\"Số lượng \"></div><!--.form-group--></div><div style=\"padding-top:50px\"><crud-buttons></crud-buttons></div></div></form>"
  );


  $templateCache.put('/web/product/variant/list.html',
    "<div class=\"variant-list\"><table><thead><tr><th width=\"90\">&nbsp;</th><th>Biến thể</th><th width=\"140\">Mã Sku</th><th width=\"140\">Mã Barcode</th><th width=\"140\">Giá tiền</th><th width=\"80\">Khuyến mãi</th><th width=\"80\">Số lượng</th></tr></thead><tbody><tr ng-repeat=\"(index, variant) in product.variants\"><td style=\"text-center\" ng-if=\"!product.id\"><a href=\"javascript:void(0)\" ng-click=\"product.variants.splice(index, 1)\"><i class=\"fa fa-times\"></i> Hủy</a></td><td ng-if=\"product.id\"><div class=\"dropdown\"><a href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"caret\"></span> Hành động</a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"listImage(variant)\"><i class=\"fa fa-file-image-o\"></i> Cập nhật hình ảnh</a></li><li><a href=\"javascript:void(0)\" ng-click=\"changeVariant(variant)\"><i class=\"fa fa-pencil-square-o\"></i> Chỉnh sửa</a></li><li><a href=\"javascript:void(0)\" ng-click=\"removeVariant(variant)\"><i class=\"fa fa-times\"></i> Xóa</a></li></ul></div></td><td>{{getVariantOptionValues(variant.options)}}</td><td style=\"padding:2px\"><input placeholder=\"Mã Sku\" class=\"form-control\" type=\"text\" ng-model=\"variant.sku\"></td><td style=\"padding:2px\"><input class=\"form-control\" type=\"text\" placeholder=\"Mã Barcode\" ng-model=\"variant.barcode\"></td><td style=\"padding:2px\"><div style=\"display:table-row\"><div style=\"display:table-cell\"><input ui-number-mask=\"0\" class=\"form-control text-right\" type=\"text\" ng-model=\"variant.price\"></div><div style=\"display:table-cell; padding-left:5px\"><strong>đ</strong></div></div></td><td style=\"padding:2px\"><div style=\"display:table-row\"><div style=\"display:table-cell\"><input class=\"form-control\" type=\"number\" min=\"0\" max=\"99\" ng-model=\"variant.sale\"></div><div style=\"display:table-cell; padding-left:5px\"><strong>%</strong></div></div></td><td style=\"padding:2px\"><input class=\"form-control\" type=\"number\" min=\"0\" max=\"999\" ng-model=\"variant.quantity\"></td></tr></tbody></table></div>"
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
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Danh sách sản phẩm</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><div class=\"row\"><div class=\"col-md-12 nav-buttons\"><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-primary btn-sm\" ng-click=\"new()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> New</button></div></div></div></div></div><!--.page-header--><div class=\"content\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"grid\" style=\"max-height:500px\" ui-grid=\"gridOptions\" ui-grid-edit></div></div></div><!-- Pagination & collection details --><div class=\"row\"><div class=\"col-md-12\"><uib-pagination total-items=\"gridOptions.totalItems\" ng-model=\"currentPage\" ng-change=\"load()\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\" rotate=\"false\" num-pages=\"numPages\"></uib-pagination></div></div></div><!--.content-->"
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
