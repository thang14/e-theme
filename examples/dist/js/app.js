"use strict";window.angular.module("app",["ui.router","angular-loading-bar","app.environment","app.kernel","app.media","app.dashboard","app.product","app.section"]).run(["$rootScope","$state","$stateParams","initService",function(a,b,c,d){d.launch(),a.$state=b,a.$stateParams=c}]).config(["cfpLoadingBarProvider",function(a){a.includeSpinner=!1}]),window.angular.module("app").constant("Constants",{ERROR:0,SUCCESS:1}),!function(a,b,c){var d=b.module("app.kernel",[]);d.config(["$provide","$urlRouterProvider",function(a,b){b.otherwise("/")}]),b.module("app.kernel").controller("abstractDetailController",["$controller","$scope","itemService","$stateParams","$state","notify",function(a,d,e,f,g,h){d.detail={id:f.id,name:f.name},d.item=d.item||{};var i=function(a){b.isUndefined(a.message)===!1&&h("Response:"+a.code+" Message:"+a.message),b.isUndefined(a.errors)===!1&&b.forEach(a.errors,function(b,c){h("Response: "+a.code+' "'+c+'": '+b)})};d.detail.id!==c&&e.get(d.detail.id).success(function(a,b){d.item=a}).error(function(a,b){404==a.error.code?(g.transitionTo("home"),console.log(a),h("404 Noting found")):i(a)}),d.editSave=function(a){d.detail.id!==c&&e.save(d.item).success(function(a,b){h(d.route.name+" has been saved"),console.log(a)}).error(function(a,b){i(a)}),d.detail.id===c&&e.create(d.item).success(function(a,b){h(d.route.name+" was added"),g.transitionTo(d.route.edit,{id:a.id})}).error(function(a,b){i(a)}),a&&a()},d.editSaveAndExit=function(){e.save(d.item).success(function(a,b){h(d.route.name+" has been saved"),g.transitionTo(d.route.collection)}).error(function(a,b){i(a)})},d.editCancel=function(){g.transitionTo(d.route.collection)},d.editDelete=function(){e.remove(d.detail.id).success(function(a,b){h(d.route.name+" has been deleted"),g.transitionTo(d.route.collection)}).error(function(a,b){i(a)})}}]),d.service("baseService",["collectionService",function(a){return{collectionName:c,getCollection:function(){return a.getCollection(this.collectionName)},get:function(a,b){return this.getCollection().get(a,b)},create:function(a,b){return this.getCollection().create(a,b)}}}]),d.service("collectionService",["resourceService",function(a){return{collections:{},getCollection:function(b){return this.collections[b]?this.collections[b]:this.collections[b]=new a(b)}}}]),d.service("gridService",[function(){return{load:function(a,b,c){return b.get(c,function(b){a.gridOptions.data=b.data,a.gridOptions.totalItems=b.total})},gridOptions:function(a){return{showGridFooter:!1,enableFiltering:!1,enableSorting:!0,enableCellEdit:!1,enableHorizontalScrollbar:0,enableVerticalScrollbar:0,columnDefs:a.columns,onRegisteApi:function(b){b.rowEdit.on.afterCellEdit(a,function(b,c,d,e){a.onSaveRow(b)})}}},actionTemplate:function(){return"<ng-include src=\"'/web/collection/action.html'\"></ng-include>"}}}]),d.service("initService",["$http","$rootScope","Environment",function(a,b,c){return{launch:function(){b.domain=c.settings.domain}}}]),b.module("app.kernel").factory("resourceService",["Environment","$resource",function(a,b){var c=function(c){var d=this.api=a.settings.api+"/"+c+a.settings.prefix;this.resource=b(d+"/:id",{id:"@id"},{charge:{method:"POST",params:{charge:!0}}})};return c.prototype.create=function(a){return new this.resource(a)},c.prototype.get=function(a,b){return this.resource.get(a,b)},c.prototype.update=function(a,b){return this.resource.update({id:a},b)},c.prototype.remove=function(a){return this.resource.remove({id:a}).$remove()},c}])}(window,window.angular),function(a,b,c){var d=b.module("app.product",["app.variant"]);d.config(["$stateProvider",function(a){a.state("product",{title:"Danh sách sản phẩm",url:"/product",controller:"productController",templateUrl:"/web/product/list.html"}).state("product.new",{title:"Sản phẩm mới",url:"/new",views:{"@":{controller:"productDetailController",templateUrl:"/web/product/detail.html"}}}).state("product.detail",{title:"Chi tiết sản phẩm",url:"/:productId",views:{"@":{controller:"productDetailController",templateUrl:"/web/product/detail.html"}}}).state("product.detail.variant",{title:"Variant list",url:"/variant",views:{"@":{controller:"variantController",templateUrl:"/web/variant/list.html"}}}).state("product.detail.variant.new",{title:"Variant new",url:"/new",views:{"@":{controller:"variantAddController",templateUrl:"/web/variant/add.html"}}}).state("product.detail.variant.detail",{title:"Chi tiết biến thể",url:"/:variantId",views:{"@":{controller:"variantController",templateUrl:"/web/variant/detail.html"}}})}]);var e={name:null,current:{price:0,sale:0,quantity:1},media_display:0,medias:[{path:"/admin-theme/examples/images/1.jpg",display:!0},{path:"/admin-theme/examples/images/2.jpg",display:!1}],description_list:[],description:[],keywords:null,attrs:[{}],variant_options:[],variants:[],status:0,template:null},f=[["color_name"],["size_name"],["style_name"],["configure_name"],["color_name","size_name"],["color_name","stype_name"],["color_name","configure_name"],["color_name","size_name","style_name"],["color_name","size_name","configure_name"],["size_name","style_name"],["size_name","configure_name"],["size_name","style_name","configure_name"],["style_name","configure_name"]],g={color_name:"Màu sắc",size_name:"Kích thước",style_name:"Kiểu dáng",configure_name:"Cấu hình"},h=["Màu sắc","Kích thước","Kiểu dáng","Cấu hình","Màu sắc, Kích thước","Màu sắc, Kiểu dáng","Màu sắc, Cấu hình","Màu sắc, Kích thước, Kiểu dáng","Màu sắc, Kích thước, Cấu hình","Kích thước, Kiểu dáng","Kích thước, Cấu hình","Kích thước, Kiểu dáng, Cấu hình","Kiểu dáng, Cấu hình"],i=function(a,d,i,j,k,l,m,n,o){a.detail={id:i.productId},a.detail.id!==c?k.get(a.detail.id).success(function(b,c){a.item=b.data}).error(function(a,b){404==a.error.code&&j.transitionTo("home")}):a.item=b.copy(e),a.templateValues=h,a.selectTemplate=function(b){if(!f[b])return a.item.template=null,void(a.item.variant_options=[]);a.item.variant_options=[];var c=f[b];c.forEach(function(b,c){a.item.variant_options.push({name:b,label:g[b],items:[]})})},a.generateVariants=function(c,d){c=c||0,0===c&&(a.item.variants=[]);var e=a.item.variant_options;d=d||[],e[c].items.forEach(function(f,g){var h=b.copy(d);return h.push(g),e[c+1]?void a.generateVariants(c+1,h):void a.item.variants.push({options:h,price:0,sale:0,quantity:1})})},a.setMediaDefault=function(b){a.item.media_display!==b&&(a.item.medias[a.item.media_display].display=!1,a.item.media_display=b,a.item.medias[b].display=!0)},a.getVariantOptionValues=function(b){var c=[];return b.forEach(function(b,d){c.push(a.item.variant_options[d].items[b].text)}),c.join(">>")},a.save=function(b){a.item.id||(a.item=k.create(a.item)),a.item.$save()},a.saveAndFinish=function(){a.save(),j.transitionTo("product")},a.cancel=function(){j.transitionTo("product")},a.deleteFile=function(b){a.item.medias[b],a._handleFileDelete(b)},a.upload=function(b){b&&b.forEach(function(b){l.upload(b).success(a._handleUploaded)})},a._handleUploaded=function(b){a.item.medias.push(b.data)},a._handleFileDelete=function(b){a.item.medias.splice(b,1)}};i.$inject=["$scope","$rootScope","$stateParams","$state","productService","mediaService","$controller","variantOption","Constants"],d.controller("productDetailController",i),d.controller("productController",["$scope","productService","gridService","$state",function(a,b,c,d){a.currentPage=1,a.maxSize=5,a.setPage=function(b){a.currentPage=b},a.columns=[{name:"id",width:"75",enableColumnMenu:!1},{name:"photo",displayName:"Ảnh",width:"75",cellTemplate:"/web/ui-grid/image-view.html",enableColumnMenu:!1},{enableColumnMenu:!1,name:"name",displayName:"Tên",enableCellEdit:!0,cellTemplate:'<div class="ngCellText ui-grid-cell-contents"><a href="javascript:void(0)"  ng-click="grid.appScope.viewDetail(row)"><strong>{{MODEL_COL_FIELD}}</strong></a></div>'},{enableColumnMenu:!1,name:"price",displayName:"Giá",width:"100",editableCellTemplate:"/web/ui-grid/editor-price.html",enableCellEdit:!0,cellTemplate:'<div class="ngCellText ui-grid-cell-contents"><strong>{{MODEL_COL_FIELD | currency:"":0}} đ</strong></div>'},{enableColumnMenu:!1,name:"sale",displayName:"Khuyến mãi",width:"80",enableCellEdit:!0,cellTemplate:'<div class="ngCellText ui-grid-cell-contents"><strong>{{MODEL_COL_FIELD}} %</strong></div>'},{enableColumnMenu:!1,displayName:"Số lượng",name:"quantity",enableCellEdit:!0,width:"70",enableCellEdit:!0},{enableColumnMenu:!1,displayName:"Trạng thái",name:"status",type:"boolean",width:"50"},{enableColumnMenu:!1,name:"action",displayName:"",width:"100",cellTemplate:"/web/collection/action.html"}],a.onSaveRow=function(a){b.update(a.id,a)},a.gridOptions=c.gridOptions(a),a.load=function(){console.log(1),c.load(a,b,{page:a.currentPage})},a.load(),a.viewDetail=function(a){d.transitionTo("product.detail",{productId:a.entity.id})},a.newProduct=function(a){d.transitionTo("product.new")}}]),d.service("productService",["baseService",function(a){return b.extend(a,{collectionName:"product"})}])}(window,window.angular),function(a,b,c){var d=b.module("app.auth",[]).run(["$http","$state","$rootScope","authService","Environment",function(a,b,d,e,f){d.$on("$stateChangeStart",function(a,f,g,h,i){d.user===c?e.getUserInfomation().success(function(c,e){c.username?d.user=c:(d.user=!1,a.preventDefault(),b.transitionTo("userLogin"))}):0==d.user&&(a.preventDefault(),b.transitionTo("userLogin"))})}]);d.config(["$stateProvider",function(a){a.state("user",{title:"User",url:"/user",controller:"authController",templateUrl:"/web/auth/detail.html"}).state("user.login",{title:"Login",url:"/login",controller:"authLoginController",templateUrl:"/web/auth/login.html"})}]),d.service("authService",["$http","Environment",function(a,b){return{logout:function(){var c=b.settings.domain+"/user/logout";return a.get(c)},login:function(c,d){var e=b.settings.domain+"/user/login";return a.post(e,{username:c,password:d})},getUserInfomation:function(){var c=b.settings.domain+"/user/infomation";return a.get(c)}}}])}(window,window.angular),function(a,b,c){var d=b.module("app.variant",[]);d.factory("variantOption",[function(){var a={options:[{name:"color_name",value:"Color",items:["Red","Blur","While"]},{name:"size_name",value:"Size",items:[33,34,35]},{name:"style_name",value:"Style",items:["15 inch","13.5 inch","13 inch"]}]};return a}]),d.config(["$stateProvider",function(a){}]),d.controller("variantAddController",["$location","$scope","$rootScope",function(a,b,c){}]),d.controller("variantDetailController",["$location","$scope","$rootScope","variantService","$controller",function(a,c,d,e,f){c.route={name:"variant",collection:e.collectionName},b.extend(this,f("AbstractDetailsNodeCtrl",{$scope:c,itemService:e})),c.fileUploaded=function(a){c.item.medias.push(a),c.editSave()}}]),d.controller("variantController",["$location","$scope","$rootScope",function(a,b,c){}]),d.service("variantService",["baseService",function(a,c){return b.extend(baseService,{collectionName:"variant"})}])}(window,window.angular),function(a,b,c){var d=b.module("app.shop",[]).run(["$http","$state","$rootScope","shopService","Environment",function(a,b,d,e,f){d.$on("$stateChangeStart",function(a,f,g,h,i){d.shop===c?e.getInfomation().success(function(c,e){c.name?d.shop=c:(d.shop=!1,a.preventDefault(),b.transitionTo("404"))}):0==d.shop&&(a.preventDefault(),b.transitionTo("404"))})}]);d.config(["$stateProvider",function(a){a.state("info",{title:"Shop Info",url:"/info",controller:"shopController",templateUrl:"/web/shop/shop.html"})}]),d.controller("shopController",["$scope",function(a){}]),d.service("shopService",["baseService",function(a){return b.extend(a,{collectionName:"infomation",getInfomation:function(){return this.get({})}})}])}(window,window.angular),function(a,b,c){var d=b.module("app.section",[]);d.config(["$stateProvider",function(a){a.state("section",{title:"Section",url:"/section",controller:"sectionController",templateUrl:"/web/section/list.html"}).state("section.new",{title:"Section",url:"/new",views:{"@":{controller:"sectionAddController",templateUrl:"/web/section/add.html"}}}).state("section.detail",{title:"Section detail",url:"/:sectionId",views:{"@":{controller:"sectionDetailController",templateUrl:"/web/section/detail.html"}}})}]),d.controller("sectionAddController",["$scope",function(a){}]),d.controller("sectionDetailController",["$scope",function(a){}]),d.controller("sectionController",["$scope",function(a){}]),d.service("sectionService",["baseService",function(a){return b.extend(a,{collectionName:"section"})}])}(window,window.angular),function(a,b,c){var d=b.module("app.order",[]);d.config(["$stateProvider",function(a){a.state("order",{title:"Order",url:"/order",controller:"orderController",templateUrl:"/web/order/list.html"}).state("order.detail",{title:"Order Detail",url:"/:orderId",controller:"orderDetailController",templateUrl:"/web/order/detail.html"})}]),d.controller("orderAddController",["$scope","orderService",function(a,b){}]),d.controller("orderDetailController",["$scope","orderService",function(a,b){}]),d.controller("orderController",["$scope","orderService",function(a,b){a.columns=[{name:"id",displayName:"Order code",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"75"},{name:"fullname",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"200"},{name:"phone",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"200"},{name:"price",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"200"},{name:"payments",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"200"},{name:"created_at",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"80"},{name:"status",enableColumnMenu:!1,enableSorting:!1,enableFiltering:!1,width:"80"}]}]),d.service("orderService",["baseService",function(a){return b.extend(a,{collectionName:"order"})}])}(window,window.angular),function(a,b,c){var d=b.module("app.reports",[]);d.config(["$stateProvider",function(a){a.state("reports",{title:"Reports",url:"/reports",controller:"reportsController",templateUrl:"/web/reports/reports.html"})}]),d.controller("reportsController",["$scope","reportsService",function(a,b){}]),d.service("reportsService",["baseService",function(a){return b.extend(a,{collectionName:"reports"})}])}(window,window.angular),function(a,b,c){var d=b.module("app.settings",[]);d.config(["$stateProvider",function(a){a.state("settings",{title:"Settings",url:"/settings",controller:"settingsController",templateUrl:"/web/settings/settings.html"})}]),d.controller("settingsController",["$scope",function(a){}]),d.service("settingsService",["baseService",function(a){return b.extend(a,{collectionName:"settings"})}])}(window,window.angular),function(a,b,c){var d=b.module("app.dashboard",[]);d.config(["$stateProvider",function(a){a.state("home",{title:"Dashboard",url:"/",controller:"dashboardController",templateUrl:"/web/dashboard/dashboard.html"})}]),d.controller("dashboardController",["$location","$scope","$rootScope",function(a,b,c){}])}(window,window.angular),function(a,b,c){var d=b.module("app.media",[]);d.service("mediaService",["Upload","Environment","$http",function(a,b,c){return{upload:function(c,d){var e=b.settings.domain+"/media";return a.upload({url:e,data:{file:c}}).success(d)},remove:function(a){var d=b.settings.domain+"/media";c["delete"](d,{id:a})}}}])}(window,window.angular),jQuery(document).ready(function(){window.angular.bootstrap(document,["app"])});
//# sourceMappingURL=app.js.map