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


  $templateCache.put('/web/product/buttons.html',
    "<button type=\"button\" class=\"btn btn-danger btn-sm text-semibold\" ng-click=\"cancel()\"><i class=\"fa fa-times\"></i> Hủy</button> <button type=\"reset\" class=\"btn btn-danger btn-sm text-semibold\">Thiết lập lại</button> <button type=\"button\" ng-if=\"item.id\" class=\"btn btn-danger btn-sm text-semibold\" ng-click=\"remove()\"><i class=\"fa fa-times\"></i> Xóa</button> <button type=\"button\" ng-if=\"item.id\" class=\"btn btn-primary btn-sm text-semibold\" ng-click=\"clone()\"><i class=\"fa fa-clone\"></i> Nhân bản</button> <button type=\"button\" class=\"btn btn-primary btn-sm text-semibold\" ng-disabled=\"!productForm.$valid\" ng-click=\"productForm.$valid && save()\"><i class=\"fa fa-floppy-o\"></i> Lưu</button> <button type=\"button\" class=\"btn btn-primary btn-sm text-semibold\" ng-disabled=\"!productForm.$valid\" ng-click=\"productForm.$valid && saveAndFinish()\"><i class=\"fa fa-floppy-o\"></i> Lưu và kết thúc</button>"
  );


  $templateCache.put('/web/product/detail.html',
    "<form name=\"productForm\"><div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Sản phẩm mới</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><div ng-include=\"'/web/product/buttons.html'\"></div></div></div><!--.page-header--><div class=\"content\"><div style=\"max-width:440px\"><div class=\"form-group\"><label for=\"productName\">Tên <strong class=\"color-red\">*</strong></label><input name=\"name\" type=\"text\" ng-model=\"item.name\" class=\"form-control\" id=\"productName\" required maxlength=\"255\" placeholder=\"Name\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Nhà cung cấp</label><input name=\"branh\" ng-model=\"item.branh\" type=\"text\" class=\"form-control\" id=\"productBranh\" maxlength=\"255\" placeholder=\"Branh\"></div><!--.form-group--><div class=\"form-group\"><label for=\"productBranh\">Giao diện</label><select class=\"form-control\" ng-model=\"item.template\" ng-change=\"selectTemplate(item.template)\"><option value=\"\">--Không chọn--</option><option ng-repeat=\"(index, value) in templateValues\" value=\"{{index}}\">{{value}}</option></select></div><!--.form-group--></div><div ng-if=\"item.template != null\"><div class=\"form-group\" style=\"max-width:440px\"><div class=\"form-group\" ng-repeat=\"option in item.variant_options\"><label>{{option.label}}</label><tags-input min-length=\"1\" max-length=\"20\" placeholder=\"{{option.label}}\" ng-model=\"option.items\"></tags-input></div></div><!--.form-group--><div class=\"form-group\"><button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"generateVariants()\">Cập nhật biến thể</button></div><!--.form-group--><div class=\"form-group\" ng-if=\"item.variants.length > 0\" style=\"max-width:800px\"><div class=\"variant-list\"><table><thead><tr><th width=\"90\">&nbsp;</th><th>Biến thể</th><th width=\"140\">Mã Sku</th><th width=\"140\">Mã Barcode</th><th width=\"140\">Giá tiền</th><th width=\"80\">Khuyến mãi</th><th width=\"80\">Số lượng</th></tr></thead><tbody><tr ng-repeat=\"(index, variant) in item.variants\"><td style=\"text-center\" ng-if=\"!item.id\"><a href=\"javascript:void(0)\" ng-click=\"item.variants.splice(index, 1)\"><i class=\"fa fa-times\"></i> Hủy</a></td><td ng-if=\"item.id\"><div class=\"dropdown\"><a href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"caret\"></span> Hành động</a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"listImage(variant)\"><i class=\"fa fa-file-image-o\"></i> Cập nhật hình ảnh</a></li><li><a href=\"javascript:void(0)\" ng-click=\"changeVariant(variant)\"><i class=\"fa fa-pencil-square-o\"></i> Chỉnh sửa</a></li><li><a href=\"javascript:void(0)\" ng-click=\"removeVariant(variant)\"><i class=\"fa fa-times\"></i> Xóa</a></li></ul></div></td><td>{{getVariantOptionValues(variant.options)}}</td><td style=\"padding:2px\"><input placeholder=\"Mã Sku\" class=\"form-control\" type=\"text\" ng-model=\"variant.sku\"></td><td style=\"padding:2px\"><input class=\"form-control\" type=\"text\" placeholder=\"Mã Barcode\" ng-model=\"variant.barcode\"></td><td style=\"padding:2px\"><div style=\"display:table-row\"><div style=\"display:table-cell\"><input ui-number-mask=\"0\" class=\"form-control text-right\" type=\"text\" ng-model=\"variant.price\"></div><div style=\"display:table-cell; padding-left:5px\"><strong>đ</strong></div></div></td><td style=\"padding:2px\"><div style=\"display:table-row\"><div style=\"display:table-cell\"><input class=\"form-control\" type=\"number\" min=\"0\" max=\"99\" ng-model=\"variant.sale\"></div><div style=\"display:table-cell; padding-left:5px\"><strong>%</strong></div></div></td><td style=\"padding:2px\"><input class=\"form-control\" type=\"number\" min=\"0\" max=\"999\" ng-model=\"variant.quantity\"></td></tr></tbody></table></div></div><!--.form-group--></div><div class=\"form-group\"><ul class=\"media-list\"><li class=\"item\" ng-repeat=\"(index, media) in item.medias\"><div class=\"action\"><div class=\"dropdown\"><a href=\"javascript:void(0)\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\"><span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a href=\"javascript:void(0)\" ng-click=\"deleteFile(index)\"><i class=\"fa fa-times\"></i>Xóa</a></li><li ng-if=\"!media.display\"><a href=\"javascript:void(0)\" ng-click=\"setMediaDefault(index)\"><i class=\"fa fa-file-image-o\"></i>Đặt ảnh hiển thị</a></li></ul></div></div><img ng-src=\"{{media.path}}\"></li><li class=\"file-upload\"><a ngf-multiple=\"true\" accept=\"image/*\" ngf-select=\"upload($files)\" ngf-drop=\"upload($files)\" ng-model=\"files\" href=\"javascript:void(0)\"><i class=\"fa fa-upload fa-4\"></i><div class=\"text-hint\">Tải ảnh lên</div></a></li></ul></div><!--.form-group--><div ng-if=\"item.template == null\" style=\"max-width:440px\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSku\">Mã Sku</label><input ng-model=\"item.current.sku\" type=\"text\" class=\"form-control\" id=\"productSku\" placeholder=\"Mã Sku\"></div><!--.form-group--></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productBarcode\">Mã Barcode</label><input ng-model=\"item.current.barcode\" type=\"text\" class=\"form-control\" id=\"productBarcode\" placeholder=\"Mã Barcode\"></div><!--.form-group--></div></div><div class=\"row\"><div class=\"col-md-9\"><div class=\"form-group\"><label for=\"productPrice\">Giá tiền</label><div style=\"display:table-row\"><div style=\"display:table-cell\"><input ui-number-mask=\"0\" ng-model=\"item.current.price\" type=\"text\" class=\"form-control text-right\" id=\"productPrice\" placeholder=\"Giá tiền\"></div><div style=\"display:table-cell; padding-left: 5px\"><strong>đ</strong></div></div></div></div><div class=\"col-md-3\"><div class=\"form-group\"><label for=\"productSalePrice\">Khuyến mãi</label><div style=\"display:table-row\"><div style=\"display:table-cell\"><input ng-model=\"item.current.sale\" type=\"number\" min=\"0\" max=\"99\" class=\"form-control\" id=\"productSalePrice\" placeholder=\"Giá khuyến mãi\"></div><div style=\"display:table-cell; padding-left: 5px\"><strong>%</strong></div></div></div><!--.form-group--></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSalePrice\">Đơn vị tính</label><input ng-model=\"item.current.unit\" type=\"text\" class=\"form-control\" id=\"productUnit\" placeholder=\"Đơn vị tính: kg, chiếc, đôi...\"></div><!--.form-group--></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productSalePrice\">Số lượng</label><input ng-model=\"item.current.quantity\" type=\"number\" min=\"0\" max=\"999\" class=\"form-control\" id=\"productQuantity\" placeholder=\"Số lượng\"></div><!--.form-group--></div></div></div><div style=\"max-width:600px\"><!-- Nav tabs --><ul class=\"nav nav-tabs\" role=\"tablist\"><li role=\"presentation\" class=\"active\"><a class=\"text-semibold\" href=\"#attributes\" aria-controls=\"attributes\" role=\"tab\" data-toggle=\"tab\">Thuộc tính</a></li><li role=\"presentation\"><a class=\"text-semibold\" href=\"#keywords\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Từ khóa</a></li><li role=\"presentation\"><a class=\"text-semibold\" href=\"#description\" aria-controls=\"keywords\" role=\"tab\" data-toggle=\"tab\">Mô tả</a></li></ul><!-- Tab panes --><div class=\"tab-content\" style=\"padding:10px; border: 1px solid #ddd; border-top:none; background:#fff\"><div role=\"tabpanel\" class=\"tab-pane active\" ng-init=\"item.attrs = [{}]\" id=\"attributes\"><div class=\"form-group\" ng-repeat=\"(index, attr) in item.attrs\"><div class=\"row\"><div class=\"col-md-4\"><input placeholder=\"Tên\" type=\"text\" class=\"form-control\" ng-model=\"attr.name\"></div><div class=\"col-md-7\"><input placeholder=\"Giá trị\" type=\"text\" class=\"form-control\" ng-model=\"attr.value\"></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" style=\"margin-top: 5px;display: block;font-size: 15px;color: #999\" ng-click=\"item.attrs.splice(index, 1)\"><i class=\"fa fa-times\"></i></a></div></div></div><!--.row--><div class=\"form-group\"><button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"item.attrs.push({})\">+ Thêm</button></div><!--.row--></div><!--#attributes--><div role=\"tabpanel\" class=\"tab-pane\" id=\"keywords\"><div class=\"form-group\"><label for=\"productKeywords\">Từ khóa</label><textarea rows=\"5\" ng-model=\"item.keywords\" type=\"text\" class=\"form-control\" id=\"productKeywords\" placeholder=\"Keywords\"></textarea></div><!--.form-group--></div><!--#keywords--><div role=\"tabpanel\" class=\"tab-pane\" id=\"description\"><div class=\"form-group\"><label for=\"productDescriptionList\">Chính</label><div class=\"form-group\"><input ng-model=\"item.description_list[0]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 1\"></div><!--.form-group--><div class=\"form-group\"><input ng-model=\"item.description_list[1]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 2\"></div><!--.form-group--><div class=\"form-group\"><input ng-model=\"item.description_list[2]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 3\"></div><!--.form-group--><div class=\"form-group\"><input ng-model=\"item.description_list[3]\" type=\"text\" class=\"form-control\" placeholder=\"Mô tả số 4\"></div><!--.form-group--></div><!--.form-group--><div class=\"form-group\"><label for=\"productDescription\">Mô tả thêm</label><textarea rows=\"5\" ng-model=\"item.description\" type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Description\"></textarea></div><!--.form-group--></div><!--#description--></div></div><!--Tab--><div class=\"checkbox checkbox-primary\"><input ng-model=\"item.status\" id=\"productStatus\" value=\"1\" type=\"checkbox\"><label for=\"productStatus\">Cho phép tìm kiếm sản phẩm</label></div><div style=\"padding-top:50px\"><div ng-include=\"'/web/product/buttons.html'\"></div></div></div><!--.content--></form>"
  );


  $templateCache.put('/web/product/list.html',
    "<div class=\"page-header\"><div class=\"page-header-content\"><div class=\"page-title\"><h4>Danh sách sản phẩm</h4></div></div><!--.page-header-content--><div class=\"page-header-right\"><div class=\"row\"><div class=\"col-md-12 nav-buttons\"><div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-primary btn-sm\" ng-click=\"newProduct()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Đăng sản phẩm</button></div></div></div></div></div><!--.page-header--><div class=\"content\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"grid\" ui-grid=\"gridOptions\"></div></div></div><!-- Pagination & collection details --><div class=\"row\"><div class=\"col-md-12\"><uib-pagination total-items=\"gridOptions.totalItems\" ng-model=\"currentPage\" ng-select=\"selectPage()\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\" rotate=\"false\" num-pages=\"numPages\"></uib-pagination></div></div></div><!--.content-->"
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
