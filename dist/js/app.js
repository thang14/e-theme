"use strict";window.angular.module("app",["ngResource","ui.router","ui.select","angular-loading-bar","app.environment","app.kernel","app.dashboard","app.product","app.section"]).run(["$rootScope","$state","$stateParams","initService",function(a,b,c,d){d.launch(),a.$state=b,a.$stateParams=c}]).config(["cfpLoadingBarProvider",function(a){a.includeSpinner=!1}]),window.angular.module("app").constant("Constants",{ERROR:0,SUCCESS:1}),window.angular.module("app.environment",[]).service("Environment",function(){function a(){return"data"}return{settings:{namespace:a(),api:"https://raw.githubusercontent.com/onhanh/admin-theme/master/examples/"+a(),prefix:".json",domain:"http://",pageTitle:"Onhanh - open source project | Admin Dasboard"}}}),!function(a,b,c,d){var e=c.module("app.kernel",["ngResource","ui.bootstrap","ui.grid","ui.grid.edit"]);e.config(["$provide","$urlRouterProvider",function(a,b){b.otherwise("/")}]),e.service("initService",["$http","$rootScope","Environment",function(a,b,c){return{launch:function(){b.domain=c.settings.domain}}}]),c.module("app.kernel").factory("resourceService",["Environment","$resource",function(a,b){var d=function(d){var e=a.settings.api+"/"+d+a.settings.prefix,f=b(e+"/:id",{id:"@id"},{charge:{method:"POST",params:{charge:!0}}});return f.all=function(a,b){return this.query({},a,b)},f.prototype.$id=function(){return c.isUndefined(this.id)?!1:this.id},f};return d}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.product",["ui.router","app.media","app.section","ui.utils.masks","ngTagsInput","cgNotify"]);e.config(["$stateProvider",function(a){var b=["Sections",function(a){return a.all()}];a.state("product",{title:"List Product",url:"/product",controller:"productController",templateUrl:"/web/product/list.html"}).state("product.new",{title:"Add Product",url:"/new",views:{"@":{resolve:{sections:b,product:["Products",function(a){return new a}]},controller:"productDetailController",templateUrl:"/web/product/detail.html"}}})}]),e.filter("html",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]),e.controller("productDetailController",["$scope","$state","product","sections","$uibModal",function(a,b,d,e,f){a.product=d,a.sections=e,a.templates=d.getTemplateDropdownList(),a.variant=d.getVariant();var g=function(){b.go("product")};a.onDelete=g,a.onSaveAndFinish=g,a.newVariant=function(){b.go("product.detail.variant.new")},a.viewVariant=function(a){b.go("product.detail.variant.detail",{variantId:a})},a.variantMedias=function(a){return h({templateUrl:"/web/product/modal/media-list.html",controller:"mediaListController",resolve:{variant:function(){return a}}})},a.variantDetail=function(a){return h({templateUrl:"/web/product/modal/variant-detail.html",controller:"variantDetailController",resolve:{variant:function(){return a},product:function(){return d}}})},a.variantNew=function(){return h({templateUrl:"/web/product/modal/variant-detail.html",controller:"variantDetailController",resolve:{variant:["product","Variants",function(a,b){return new b({product_id:a.$id()})}],product:function(){return d}}})};var h=function(a){return a=a||{},{open:function(b){var d={animation:!0,size:b};return f.open(c.extend(d,a))}}}}]).controller("variantDetailController",["$scope","$state","variant","product",function(a,b,c,d){a.variant=c,a.product=d;var e=a.options=d.variant_options;a.$watch("option",function(a){a.forEach(function(a,b){var d=e[b].indexOf(a);-1===d&&(e[b].push(a),d=e[b].length-1,c.option[b]=d)})});var f=function(){b.go("product",{id:d.id})};a.onSave=function(a){d.variants.push(resource),d.$save(a)},a.onSaveAndFinish=function(){scope.onSave(f)},a.onDelete=f,a.onCancel=f}]).controller("mediaListController",["$scope","variant","$uibModalInstance",function(a,b,c){a.resource=b,a.items=b.medias,a.cancel=function(){c.dismiss("cancel")}}]),e.controller("productController",["$scope","$state","productGrid",function(a,b,c){a.currentPage=1,a.maxSize=5,a.gridOptions=c.gridOptions(a),a.load=function(){a.gridOptions.load({page:a.currentPage})},a.load(),a.viewDetail=function(a){b.transitionTo("product.detail",{id:a.entity.id})},a.newProduct=function(a){b.transitionTo("product.new")}}]),e.factory("Products",["resourceService","Variants","productTemplates",function(a,b,e){var f=a("product");return f.forSection=function(a){return this.query({section_id:a})},f.prototype.selectTemplate=function(a){var b=e.templates[a];if(!c.isUndefined(b)&&this.isNew()){this.variants=[];var d=[];c.forEach(b,function(a){d.push({name:a,label:e.labels[a],values:[]})}),this.variant_options=d}},f.prototype.getTemplateDropdownList=function(){return e.getDropdownList()},f.prototype.generateVariants=function(){function a(d,e){var f=this.variant_options;c.forEach(f[d].values,function(g,h){var i=c.copy(e);i.push(h),c.isUndefined(f[d+1])?this.variants.push(new b({price:0,sale:0,quantity:0,option:i})):a.call(this,d+1,i)},this)}return this.isNew()?(this.variants=[],void a.call(this,0,[])):!1},f.prototype.removeVariant=function(a){var b=this.variants.indexOf(a);a.id&&a.$remove(),this.variant.splice(b,1)},f.prototype.getVariantLabel=function(a){return a.getOptionLabel(this)},f.prototype.removeVariantOption=function(a,b){this.variants.forEach(function(d){"Array"==typeof d.option&&(a&&c.isUndefined(b)&&(d.option.splice(a,1),0===d.option.length?this.removeVariant(d):d.$save()),a&&b&&(d.option[a].splice(b,1),d.$save()))},this)},f.prototype.getVariant=function(){var a=this.variants;return!c.isUndefined(a)&&a.length>0?a[0]:this.variant},f.prototype.upload=function(a){return this.getVariant().upload(a)},f.prototype.removeFile=function(a){return this.getVariant().removeFile(a)},f.prototype.isNew=function(){return this.id==d},f}]),e.factory("Variants",["resourceService","Medias","$q","productTemplates",function(a,b,d){var e=a("variant");return e.forProduct=function(a,b,c){return e.query({product_id:a},b,c)},e.prototype.getOptionLabel=function(a){var b=[];return c.forEach(this.option,function(c,d){b.push(a.variant_options[d].values[c].text)}),b.join(" >> ")},e.prototype.upload=function(a){if(a&&a.length>0){var c=[];this.medias=this.medias||[],a.forEach(function(a){var d=b.defer();this.medias.push(a),a.upload=Medias.upload(a),a.upload.success(function(b,c,e,f){a=b,d.resolve(b)}.bind(this)),a.upload.error(function(a){d.reject()}),a.upload.progress(function(b){a.progress=Math.min(100,parseInt(100*b.loaded/b.total))}),c.push(d.promise)},this),b.all(c).then(function(){this.id&&this.$save()}.bind(this))}},e.prototype.removeMedia=function(a){var b=this.medias.splice(a);b>=0&&(a.$remove(),this.id&&this.$save(),this.medias.splice(b,1))},e}]),e.service("productGrid",["Products",function(a){return{columns:[{name:"action",width:"100",displayName:"",enableCellEdit:!1,enableSorting:!1,cellTemplate:['<div class="ui-grid-cell-contents" title="TOOLTIP"> ','<a href="#"><i class="fa-pencil-square-o"></i> {{Constants.EDIT}}</a>',"</div>"].join("")},{name:"name",displayName:"Tên"},{name:"price",displayName:"Giá tiền",width:"120",cellTemplate:'<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:"đ "}} </div>'},{name:"sale",displayName:"Khuyến mãi",width:"80"},{name:"quantity",displayName:"Số lượng",width:"80"}],gridOptions:function(b){var d=b.options||{},e={selectionRowHeaderWidth:35,rowHeight:35,showGridFooter:!1,enableFiltering:!1,enableSorting:!0,exporterMenuCsv:!1,enableGridMenu:!1,useExternalFiltering:!1,columnDefs:this.columns,load:function(b,c){var d=a.get(b,function(){this.data=d.data,this.totalItems=d.total}.bind(this))},onRegisterApi:function(a){this.api=a,b.saveRow&&a.rowEdit.on.saveRow(b,b.saveRow)}};return c.extend(e,d)}}}]),e.service("productTemplates",function(){return{templates:[["color_name"],["size_name"],["style_name"],["configure_name"],["weight_name"],["cover_type_name"],["color_name","size_name"],["color_name","style_name"],["color_name","configure_name"],["color_name","size_name","style_name"],["color_name","size_name","configure_name"],["color_name","style_name","configure_name"],["color_name","size_name","style_name","configure_name"],["size_name","style_name"],["size_name","configure_name"],["size_name","style_name","configure_name"],["style_name","configure_name"]],labels:{color_name:"Màu sắc",size_name:"Kích thước",style_name:"Kiểu dáng",configure_name:"Cấu hình",weight_name:"Trọng lượng",cover_type_name:"Loại bìa"},getDropdownList:function(){var a=[];return c.forEach(this.templates,function(b,d){var e=[];c.forEach(b,function(a){e.push(this.labels[a])},this),a[d]=e.join(", ")},this),a}}})}(window,_,window.angular),function(a,b,c,d){c.module("app.auth",[]).run(["$http","$state","$rootScope","Auth","Environment",function(a,b,c,e,f){c.$on("$stateChangeStart",function(a,f,g,h,i){c.auth===d?c.auth=e.get({},function(){c.auth||(c.auth=!1,a.preventDefault(),b.transitionTo("userLogin"))}):0==c.auth&&(a.preventDefault(),b.transitionTo("userLogin"))})}])}(window,_,window.angular),function(a,b,c,d){c.module("app.shop",[]).run(["$http","$state","$rootScope","Shop","Environment",function(a,b,c,e,f){c.$on("$stateChangeStart",function(a,g,h,i,j){c.shop===d?c.shop=e.get({slug:f.settings.namespace},function(){c.shop||(a.preventDefault(),b.transitionTo("404"))}):0==c.shop&&(a.preventDefault(),b.transitionTo("404"))})}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.section",[]);e.config(["$stateProvider",function(a){a.state("section",{title:"Mục",url:"/section",resolve:{sections:["Sections",function(a){return a.query()}]},controller:"sectionController",templateUrl:"/web/section/list.html"})}]),e.factory("Sections",["resourceService",function(a){var b=a("section");return b}]),e.controller("sectionDetailController",["$scope","$state","sectionItem","categories",function(a,b,c){a.resource=c,a.categories=categories,a.onDelete=function(){b.go("section")},a.onSaveAndFinish=function(){b.go("section")}}]),e.controller("sectionController",["$scope","sectionGrid",function(a,b){a.gridOptions=b.gridOptions(a),a["new"]=function(){$state.go("section.new")},a.gridOptions.load()}]),e.service("sectionGrid",["Sections",function(a){return{columns:[{name:"action",width:"100",displayName:"",enableCellEdit:!1,enableSorting:!1,cellTemplate:['<div class="ui-grid-cell-contents" title="TOOLTIP"> ','<a href="#"><i class="fa-pencil-square-o"></i> {{Constants.EDIT}}</a>',"</div>"].join("")},{name:"name",displayName:"Tên"}],gridOptions:function(b){var d=b.options||{},e={selectionRowHeaderWidth:35,rowHeight:35,showGridFooter:!1,enableFiltering:!1,enableSorting:!0,exporterMenuCsv:!1,enableGridMenu:!1,useExternalFiltering:!1,columnDefs:this.columns,load:function(b,c){var d=a.query(function(){this.data=d,this.totalItems=d.length}.bind(this))},onRegisterApi:function(a){this.api=a,b.saveRow&&a.rowEdit.on.saveRow(b,b.saveRow)}};return c.extend(e,d)}}}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.order",[]);e.config(["$stateProvider",function(a){a.state("order",{title:"Order",url:"/order",controller:"orderController",templateUrl:"/web/order/list.html"}).state("order.detail",{title:"Order Detail",url:"/:orderId",controller:"orderDetailController",templateUrl:"/web/order/detail.html"})}]),e.controller("orderDetailController",["$scope","orderItem",function(a,b){this.resource=b}]),e.controller("orderController",["$scope","gridOptions",function(a,b){a.gridOptions=b}]),e.service("orderService",["baseService",function(a){return c.extend(a,{collectionName:"order"})}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.reports",[]);e.config(["$stateProvider",function(a){a.state("reports",{title:"Reports",url:"/reports",controller:"reportsController",templateUrl:"/web/reports/reports.html"})}]),e.controller("reportsController",["$scope","reportsService",function(a,b){}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.settings",[]);e.config(["$stateProvider",function(a){a.state("settings",{title:"Settings",url:"/settings",controller:"settingsController",templateUrl:"/web/settings/settings.html"})}]),e.controller("settingInfoController",["$scope",function(a){}]),e.controller("settingManagerController",["$scope",function(a){}]),e.controller("settingPaymentsController",["$scope",function(a){}]),e.controller("settingsController",["$scope",function(a){}]),e.service("settingsService",["baseService",function(a){return c.extend(a,{collectionName:"settings"})}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.dashboard",[]);e.config(["$stateProvider",function(a){a.state("home",{title:"Dashboard",url:"/",controller:"dashboardController",templateUrl:"/web/dashboard/dashboard.html"})}]),e.controller("dashboardController",["$location","$scope","$rootScope",function(a,b,c){}]),e.service("dashboardService",["$http","Environment",function(a,b){return{getRole:function(){var c=b.settings.api+"/role";return a.get(c)}}}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.media",["ngFileUpload"]);e.factory("Medias",["Upload","Environment","$resource",function(a,b,c){var d=b.settings.domain+"/media",e=c(d+"/:id",{id:"@id"});return e.upload=function(b,c){return a.upload({url:d,data:{file:b}}).success(function(a){a=new e(a),c?c(a):null})},e}])}(window,_,window.angular),function(a,b,c,d){c.module("app.base",[])}(window,_,window.angular),jQuery(document).ready(function(){window.angular.bootstrap(document,["app"])});
//# sourceMappingURL=app.js.map