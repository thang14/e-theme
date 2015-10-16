angular.module('app.kernel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/web/auth/login.html',
    "<div class=\"row\"></div>"
  );


  $templateCache.put('/web/dashboard/dashboard.html',
    "Dashboard"
  );


  $templateCache.put('/web/layouts/footer.html',
    "<div></div>"
  );


  $templateCache.put('/web/layouts/header.html',
    "<div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"index.html\"><img src=\"images/logo.png\" alt=\"\"></a></div><!--.navbar-header--><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown dropdown-user\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" href=\"#\"><img src=\"images/face11.jpg\" alt=\"\"> <span>Thắng</span> <i class=\"caret\"></i></a><ul class=\"dropdown-menu dropdown-menu-right\"><li><a href=\"#\"><i class=\"glyphicon glyphicon-user\"></i> My profile</a></li></ul></li></ul><!--.navbar-right--></div><!--.navbar-collapse collapse-->"
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
    "<div class=\"row product-form\"><div class=\"col-md-8\"><div class=\"panel panel-flat\"><div class=\"panel-heading\"><h4>Product</h4></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-md-7\"><div class=\"form-group\"><label for=\"productName\">Name <span class=\"text-red\">*</span></label><input ng-model=\"product.name\" type=\"text\" class=\"form-control\" id=\"productName\" placeholder=\"Product name\"></div><div class=\"form-group\"><label for=\"productName\">Description more</label><textarea ng-model=\"product.description\" rows=\"4\" class=\"form-control\" id=\"productDescription\" placeholder=\"Product description\"></textarea></div></div><div class=\"col-md-5\"><div class=\"panel panel-flat\"><div class=\"panel-heading\"><h4>Descriptions</h4></div><div class=\"panel-body\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" ng-model=\"product.attributes[0]\" placeholder=\"Description 1\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" ng-model=\"product.attributes[1]\" id=\"productName\" placeholder=\"Description 2\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" ng-model=\"product.attributes[2]\" id=\"productName\" placeholder=\"Description 3\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" ng-model=\"product.attributes[3]\" id=\"productName\" placeholder=\"Description 4\"></div></div></div></div></div></div><!--.panel-body--></div><!--.panel--><div class=\"panel panel-flat\"><div class=\"panel-heading\"><h4>Images</h4><div class=\"pull-right\"><a href=\"#\" ngf-select=\"product.upload($files)\" ng-model=\"files\" ngf-multiple=\"true\" accept=\"image/*,audio/*,video/*\">Upload images</a></div></div><div class=\"panel-body\"><div ngf-select=\"product.upload($files)\" ngf-drop=\"\" ng-model=\"files\" ngf-multiple=\"true\" accept=\"image/*,audio/*,video/*\" class=\"filedrag\"><i class=\"fa fa-picture-o fa-2\"></i><div class=\"\">Drop files to upload</div></div></div><!--.panel-body--></div><!--.panel--><div class=\"panel panel-flat\"><div class=\"panel-heading\"><h4>Pricing</h4></div><div class=\"panel-body\"><div class=\"form-group form-inline\"><label for=\"productPrice\">Price <span class=\"text-red\">*</span></label><div class=\"form-price\"><span>đ</span> <input type=\"text\" ui-number-mask=\"0\" ng-model=\"product.default.price\" name=\"productDefaultPrice\" class=\"form-control\" value=\"0\"></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group\"><label for=\"productPrice\">Sale price</label><div class=\"form-price\"><span>đ</span> <input type=\"text\" ui-number-mask=\"0\" ng-model=\"product.default.sale_price\" name=\"productSalePrice\" class=\"form-control\" value=\"0\"></div></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label for=\"productSaleStartDate\">Sale start date</label><input class=\"form-control\" id=\"productSaleStartDate\" type=\"text\"></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label for=\"productSaleEndDate\">Sale end date</label><input class=\"form-control\" id=\"productSaleEndDate\" type=\"text\"></div></div></div></div><!--.panel-body--><div class=\"panel-heading\" style=\"border-top:1px solid #ddd\"><h4>Inventory</h4></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productPrice\">Sku <span class=\"note\">(Stock Keeping Unit)</span></label><input class=\"form-control\" id=\"productSku\" type=\"text\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"productPrice\">Barcode <span class=\"note\">(ISBN, UPC, etc.)</span></label><input class=\"form-control\" id=\"productBarcode\" type=\"text\"></div></div></div><div class=\"row\"><div class=\"col-md-3\"><label for=\"productQuantity\">Quantity</label><input class=\"form-control\" id=\"productQuantity\" type=\"text\" value=\"1\"></div></div></div><!--.panel-body--><div class=\"panel-heading\" style=\"border-top:1px solid #ddd\"><div class=\"clearfix\"><div class=\"pull-left\"><h4>Variants</h4><p>Does this product come in multiple variations like size or color?</p></div><div class=\"pull-right\"><button type=\"button\" class=\"btn btn-primary\">Add variants</button></div></div><table class=\"table\"><thead><tr><th>Variants</th><th>Price</th><th>Sku</th><th>Quantity</th></tr></thead><tbody><tr><td scope=\"row\">Red>35</td><td><div class=\"form-price\"><span>đ</span> <input type=\"text\" ui-number-mask=\"0\" ng-model=\"product.default.sale_price\" name=\"productSalePrice\" class=\"form-control\" value=\"0\"></div></td><td><input class=\"form-control\" id=\"productBarcode\" type=\"text\" placeholder=\"---\"></td><td><input class=\"form-control\" id=\"productBarcode\" type=\"text\" placeholder=\"---\" value=\"0\"></td></tr><tr><td scope=\"row\">Red>35</td><td><div class=\"form-price\"><span>đ</span> <input type=\"text\" ui-number-mask=\"0\" ng-model=\"product.default.sale_price\" name=\"productSalePrice\" class=\"form-control\" value=\"0\"></div></td><td><input class=\"form-control\" id=\"productBarcode\" type=\"text\" placeholder=\"---\"></td><td><input class=\"form-control\" id=\"productBarcode\" type=\"text\" value=\"0\" placeholder=\"---\"></td></tr></tbody></table></div></div><!--.panel--></div><!--.row--><div class=\"col-md-4\"><div class=\"panel panel-flat\"><div class=\"panel-heading\"><h4>Visibility</h4></div><div class=\"panel-body\"><div class=\"checkbox\"><label><input type=\"checkbox\"> Onsite</label></div></div><!--.panel-body--></div><!--.panel--><div class=\"panel panel-flat\"><div class=\"panel-heading\"><h4>Shipping</h4></div><div class=\"panel-body\"></div><!--.panel-body--></div><!--.panel--></div></div><!--.row--><div style=\"padding:20px; margin: 0px -20px; border-top:1px solid #ddd\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"pull-right\"><button class=\"btn btn-default\" type=\"submit\">Cancel</button> <button class=\"btn btn-primary\" type=\"submit\">Save and finish</button></div></div></div></div>"
  );


  $templateCache.put('/web/product/detail.html',
    ""
  );


  $templateCache.put('/web/product/list.html',
    "List Product <a ui-sref=\"product.new\">+Add Product</a>"
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
