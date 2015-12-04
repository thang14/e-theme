"use strict";window.angular.module("app",["ngResource","ui.router","ui.select","app.crud","chart.js","angular-loading-bar","app.environment","app.kernel","app.dashboard","app.product","app.section","app.order","app.reports","app.settings"]).run(["$rootScope","$state","$stateParams","initService",function(a,b,c,d){d.launch(),a.$state=b,a.$stateParams=c}]).config(["cfpLoadingBarProvider",function(a){a.includeSpinner=!1}]),window.angular.module("app").constant("Constants",{ERROR:0,SUCCESS:1}),window.angular.module("app.environment",[]).service("Environment",function(){function a(){return"data"}var b="https://raw.githubusercontent.com/onhanh/admin-theme/master/examples/";return{settings:{namespace:a(),api:b+a(),prefix:".json",domain:b,pageTitle:"Onhanh - open source project | Admin Dasboard",locale:"vi",currency:"$"}}}),!function(a,b,c,d){var e=c.module("app.kernel",["ngResource","ui.bootstrap","ui.grid","ui.grid.edit","ui.grid.selection"]);e.directive("dateInterval",["$interval","$filter",function(a,b){var c=6e4,d=function(){var a=(new Date).getTime();return Math.round(a/1e3)},e=function(a){var b=d();return b-a},f=function(a){return 60*a>30},g=function(a,c){var d,f=e();d=60>f?"The few seconds ago":60>60*f?60*f+" last minute":60>60*f*60?60*f*60+" hours ago":b("date")(1e3*c,"HH:mm, dd/MM/yyyy"),a.text(d)},h=function(b,d,h){var i=null;b.$watch(h.dateInterval,function(b){g(d,b),f(e(b))&&(i=a(function(){g(d,b)},c))}),d.on("$destroy",function(){null!=i&&a.cancel(i)})};return{link:h}}]),e.directive("siderbar",["$interval","$filter",function(a,b){var c=null,d=function(a,b){var d=b;null!==c&&($(a).removeClass("next-nav--is-expanded"),c.hide()),c=d.find("ul"),0==c.length?c=null:($(a).addClass("next-nav--is-expanded"),c.show())},e=function(a,b,c){var e=$(b).find("li.item.active");d(b,e),$(b).find("li.item").click(function(a){d(b,$(this))})};return{link:e}}]),e.config(["$provide","$urlRouterProvider",function(a,b){b.otherwise("/")}]),e.factory("grid",[function(){var a={selectionRowHeaderWidth:35,rowHeight:35,showGridFooter:!1,enableFiltering:!1,enableSorting:!0,exporterMenuCsv:!1,enableGridMenu:!1,useExternalFiltering:!1,enableColumnMenus:!1,enableScrollbars:!1,enableHorizontalScrollbar:0,enableVerticalScrollbar:0},b=function(b,d){this.resource=b,this.options=c.extend(c.copy(a),d)};return b.prototype.load=function(a){var b=this.resource.get(a,function(){this.options.data=b.data,this.options.totalItems=b.total}.bind(this))},b.prototype.gridOptions=function(){return this.options},b}]),e.service("initService",["$http","$rootScope","Environment",function(a,b,c){return{launch:function(){b.domain=c.settings.domain,b.locale=c.settings.locale,b.currency=c.settings.currency}}}]),c.module("app.kernel").factory("resourceService",["Environment","$resource",function(a,b){var d=function(d){var e=a.settings.api+"/"+d+a.settings.prefix,f=b(e+"/:id",{id:"@id"},{charge:{method:"POST",params:{charge:!0}}});return f.all=function(a,b){return this.query({},a,b)},f.prototype.$id=function(){return c.isUndefined(this.id)?!1:this.id},f};return d}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.product",["ui.router","app.media","app.section","ui.utils.masks","ngTagsInput","cgNotify"]);e.config(["$stateProvider",function(a){var b=["Sections",function(a){return a.all()}],c=["$stateParams",function(a){return a.id}];a.state("product",{title:"List Product",url:"/product",controller:"productController",templateUrl:"/web/product/list.html"}).state("product.new",{title:"Add Product",url:"/new",views:{"@":{resolve:{sections:b,product:["Products",function(a){return new a}]},controller:"productDetailController",templateUrl:"/web/product/detail.html"}}}).state("product.detail",{title:"Detail",url:"/:id",views:{"@":{resolve:{sections:b,productId:c,product:["Products","productId",function(a,b){return a.get({id:b})}]},controller:"productDetailController",templateUrl:"/web/product/detail.html"}}})}]),e.filter("html",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]),e.controller("productDetailController",["$scope","$state","product","sections","$uibModal",function(a,b,d,e,f){a.product=d,a.sections=e,a.templates=d.getTemplateDropdownList(),a.variant=d.getVariant();var g=function(){b.go("product")};a.onDelete=a.onSaveAndFinish=a.onCancel=g,a.variantMedias=function(a){return h({templateUrl:"/web/product/modal/media-list.html",controller:"mediaListController",resolve:{variant:function(){return a}}})},a.variantDetail=function(a){return h({templateUrl:"/web/product/modal/variant-detail.html",controller:"variantDetailController",resolve:{variant:function(){return a},product:function(){return d}}})},a.variantNew=function(){return h({templateUrl:"/web/product/modal/variant-detail.html",controller:"variantDetailController",resolve:{variant:["product","Variants",function(a,b){return new b({product_id:a.$id()})}],product:function(){return d}}})};var h=function(a){return a=a||{},{open:function(b){var d={animation:!0,size:b};return f.open(c.extend(d,a))}}}}]).controller("variantDetailController",["$scope","$state","variant","product",function(a,b,c,d){a.variant=c,a.product=d;var e=a.options=d.variant_options;a.$watch("option",function(a){a.forEach(function(a,b){var d=e[b].indexOf(a);-1===d&&(e[b].push(a),d=e[b].length-1,c.option[b]=d)})});var f=function(){b.go("product",{id:d.id})};a.onSave=function(a){d.variants.push(resource),d.$save(a)},a.onSaveAndFinish=function(){scope.onSave(f)},a.onDelete=f,a.onCancel=f}]).controller("mediaListController",["$scope","variant","$uibModalInstance",function(a,b,c){a.resource=b,a.items=b.medias,a.cancel=function(){c.dismiss("cancel")}}]),e.controller("productController",["$scope","$state","productGrid",function(a,b,c){a.currentPage=1,a.maxSize=10,a.search={page:a.currentPage,maxSize:a.maxSize},a.gridOptions=c.gridOptions(a),a.load=function(){c.load(a.search)},a.load(),a.viewDetail=function(a){b.transitionTo("product.detail",{id:a.entity.id})},a.newProduct=function(a){b.transitionTo("product.new")}}]),e.factory("Products",["resourceService","Variants","productTemplates",function(a,b,e){var f=a("product");return f.forSection=function(a){return this.query({section_id:a})},f.prototype.selectTemplate=function(a){var b=e.templates[a];if(!c.isUndefined(b)&&this.isNew()){this.variants=[];var d=[];c.forEach(b,function(a){d.push({name:a,label:e.labels[a],values:[]})}),this.variant_options=d}},f.prototype.getPriceSale=function(){return this.price-this.price*(this.sale/100)},f.prototype.getTemplateDropdownList=function(){return e.getDropdownList()},f.prototype.generateVariants=function(){function a(d,e){var f=this.variant_options;c.forEach(f[d].values,function(g,h){var i=c.copy(e);i.push(h),c.isUndefined(f[d+1])?this.variants.push(new b({price:0,sale:0,quantity:0,option:i})):a.call(this,d+1,i)},this)}return this.isNew()?(this.variants=[],void a.call(this,0,[])):!1},f.prototype.removeVariant=function(a){var b=this.variants.indexOf(a);a.id&&a.$remove(),this.variant.splice(b,1)},f.prototype.getVariantLabel=function(a){return a.getOptionLabel(this)},f.prototype.removeVariantOption=function(a,b){this.variants.forEach(function(d){"Array"==typeof d.option&&(a&&c.isUndefined(b)&&(d.option.splice(a,1),0===d.option.length?this.removeVariant(d):d.$save()),a&&b&&(d.option[a].splice(b,1),d.$save()))},this)},f.prototype.getVariant=function(){var a=this.variants;return!c.isUndefined(a)&&a.length>0?a[0]:this.variant},f.prototype.upload=function(a){return this.getVariant().upload(a)},f.prototype.removeFile=function(a){return this.getVariant().removeFile(a)},f.prototype.isNew=function(){return this.id==d},f}]),e.factory("Variants",["resourceService","Medias","$q","productTemplates",function(a,b,d){var e=a("variant");return e.forProduct=function(a,b,c){return e.query({product_id:a},b,c)},e.prototype.getOptionLabel=function(a){var b=[];return c.forEach(this.option,function(c,d){b.push(a.variant_options[d].values[c].text)}),b.join(", ")},e.prototype.upload=function(a){if(a&&a.length>0){var c=[];this.medias=this.medias||[],a.forEach(function(a){var d=b.defer();this.medias.push(a),a.upload=Medias.upload(a),a.upload.success(function(b,c,e,f){a=b,d.resolve(b)}.bind(this)),a.upload.error(function(a){d.reject()}),a.upload.progress(function(b){a.progress=Math.min(100,parseInt(100*b.loaded/b.total))}),c.push(d.promise)},this),b.all(c).then(function(){this.id&&this.$save()}.bind(this))}},e.prototype.removeMedia=function(a){var b=this.medias.splice(a);b>=0&&(a.$remove(),this.id&&this.$save(),this.medias.splice(b,1))},e}]),e.service("productGrid",["grid","Products",function(a,b){return new a(b,{columnDefs:[{name:"name",displayName:"Name",cellTemplate:'<div class="ui-grid-cell-contents text-semibold" title="TOOLTIP">{{COL_FIELD}}</div>'},{name:"branh",displayName:"Branh",width:"120"},{name:"price",displayName:"Price",width:"120",cellTemplate:'<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:$rootScope.currency:0}} </div>'},{name:"sale",displayName:"Sale",width:"150",cellTemplate:'<div class="ui-grid-cell-contents" title="TOOLTIP">{{row.entity.getPriceSale() | currency:$rootScope.currency:0}} ({{COL_FIELD}}%)</div>'},{name:"quantity",displayName:"Quantity",width:"80"},{name:"edit",width:"23",displayName:"",enableCellEdit:!1,enableSorting:!1,cellTemplate:['<div class="ui-grid-cell-contents" title="TOOLTIP"> ','<a ui-sref="product.detail({id: row.entity.id})"><i class="fa fa-pencil-square-o"></i></a>',"</div>"].join("")}]})}]),e.service("productTemplates",function(){return{templates:[["color_name"],["size_name"],["style_name"],["configure_name"],["weight_name"],["cover_type_name"],["color_name","size_name"],["color_name","style_name"],["color_name","configure_name"],["color_name","size_name","style_name"],["color_name","size_name","configure_name"],["color_name","style_name","configure_name"],["color_name","size_name","style_name","configure_name"],["size_name","style_name"],["size_name","configure_name"],["size_name","style_name","configure_name"],["style_name","configure_name"]],labels:{color_name:"Màu sắc",size_name:"Kích thước",style_name:"Kiểu dáng",configure_name:"Cấu hình",weight_name:"Trọng lượng",cover_type_name:"Loại bìa"},getDropdownList:function(){var a=[];return c.forEach(this.templates,function(b,d){var e=[];c.forEach(b,function(a){e.push(this.labels[a])},this),a[d]=e.join(", ")},this),a}}})}(window,_,window.angular),function(a,b,c,d){c.module("app.auth",[]).run(["$http","$state","$rootScope","Auth","Environment",function(a,b,c,e,f){c.$on("$stateChangeStart",function(a,f,g,h,i){c.auth===d?c.auth=e.get({},function(){c.auth||(c.auth=!1,a.preventDefault(),b.transitionTo("userLogin"))}):0==c.auth&&(a.preventDefault(),b.transitionTo("userLogin"))})}])}(window,_,window.angular),function(a,b,c,d){c.module("app.shop",[]).run(["$http","$state","$rootScope","Shop","Environment",function(a,b,c,e,f){c.$on("$stateChangeStart",function(a,g,h,i,j){c.shop===d?c.shop=e.get({slug:f.settings.namespace},function(){c.shop||(a.preventDefault(),b.transitionTo("404"))}):0==c.shop&&(a.preventDefault(),b.transitionTo("404"))})}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.section",["ui.router","app.category"]);e.config(["$stateProvider",function(a){var b=["Categories",function(a){return a.query()}],c=["$stateParams",function(a){return a.id}];a.state("section",{title:"Mục",url:"/section",controller:"sectionController",templateUrl:"/web/section/list.html"}).state("section.new",{title:"New Section",url:"/new",views:{"@":{resolve:{categories:b,sectionId:c,section:["Sections",function(a){return new a}]},controller:"sectionDetailController",templateUrl:"/web/section/detail.html"}}}).state("section.detail",{title:"Detail",url:"/:id",views:{"@":{resolve:{categories:b,sectionId:c,section:["Sections","sectionId",function(a,b){return a.get({id:b})}]},controller:"sectionDetailController",templateUrl:"/web/section/detail.html"}}})}]),e.factory("Sections",["resourceService",function(a){var b=a("section");return b}]),e.controller("sectionDetailController",["$scope","$state","section","categories",function(a,b,c,d){a.resource=c,a.categories=d;var e=function(){b.go("section")};a.onDelete=a.onSaveAndFinish=a.onCancel=e}]),e.controller("sectionController",["$scope","$state","sectionGrid",function(a,b,c){a.gridOptions=c.gridOptions(a),a.viewDetail=function(a){b.transitionTo("section.detail",{id:a.id})},a.newRow=function(){b.transitionTo("section.new")},a.gridOptions.load()}]),e.service("sectionGrid",["Sections",function(a){return{columns:[{name:"action",width:"23",displayName:"",enableCellEdit:!1,enableSorting:!1,cellTemplate:['<div class="ngCellText ui-grid-cell-contents" title="TOOLTIP"> ','<a href="javascript:void(0)"  ng-click="grid.appScope.viewDetail(row.entity)"><i class="fa fa-pencil-square-o"></i></a>',"</div>"].join("")},{name:"name",displayName:"Name"}],gridOptions:function(b){var d=b.options||{},e={selectionRowHeaderWidth:35,rowHeight:35,showGridFooter:!1,enableFiltering:!1,enableSorting:!0,exporterMenuCsv:!1,enableGridMenu:!1,useExternalFiltering:!1,columnDefs:this.columns,enableColumnMenus:!1,enableScrollbars:!1,enableHorizontalScrollbar:0,enableVerticalScrollbar:0,load:function(b,c){var d=a.query(function(){this.data=d,this.totalItems=d.length}.bind(this))},onRegisterApi:function(a){this.api=a,b.saveRow&&a.rowEdit.on.saveRow(b,b.saveRow)}};return c.extend(e,d)}}}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.order",[]);e.config(["$stateProvider",function(a){a.state("order",{title:"Order",url:"/order",controller:"orderController",templateUrl:"/web/order/list.html"}).state("order.detail",{title:"Order Detail",url:"/:id",controller:"orderDetailController",templateUrl:"/web/order/detail.html"})}]),e.service("Orders",["resourceService",function(a){return a("order")}]),e.controller("orderDetailController",["$scope","order",function(a,b){a.resource=b}]),e.controller("orderController",["$scope","orderGrid",function(a,b){a.gridOptions=b.gridOptions(a),a.load=function(){a.gridOptions.load()},a.load()}]),e.service("orderGrid",["Orders",function(a){return{columns:[{name:"action",width:"23",displayName:"",enableSorting:!1,cellTemplate:['<div class="ui-grid-cell-contents" title="TOOLTIP"> ','<a ui-sref="order.detail({id: row.entity.id})"><i class="fa fa-pencil-square-o"></i></a>',"</div>"].join("")},{name:"id",width:"150",displayName:"Order ID",cellTemplate:'<div class="ui-grid-cell-contents" title="TOOLTIP"><a ui-sref="order.detail({id: row.entity.id})">{{COL_FIELD}}</a> </div>'},,{name:"created_at",displayName:"Date",cellTemplate:'<div class="ui-grid-cell-contents" title="TOOLTIP"><span date-interval="{{COL_FIELD}}"></span></div>'},{name:"payment_status",displayName:"Payment status"},{name:"fulfillment_status",displayName:"Fulfillment status"},{name:"price",displayName:"Total",cellTemplate:'<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD | currency:"đ ":0}}</div>'}],gridOptions:function(b){var d=b.options||{},e={selectionRowHeaderWidth:35,rowHeight:35,showGridFooter:!1,enableFiltering:!1,enableSorting:!0,exporterMenuCsv:!1,enableGridMenu:!1,useExternalFiltering:!1,columnDefs:this.columns,enableCellEdit:!1,enableColumnMenus:!1,enableScrollbars:!1,enableHorizontalScrollbar:1,enableVerticalScrollbar:0,load:function(b,c){var d=a.get(b,function(){this.data=d.data,this.totalItems=d.total}.bind(this))},onRegisterApi:function(a){this.api=a,b.saveRow&&a.rowEdit.on.saveRow(b,b.saveRow)}};return c.extend(e,d)}}}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.reports",[]);e.config(["$stateProvider",function(a){a.state("reports",{title:"Reports",url:"/reports",controller:"reportsController",templateUrl:"/web/reports/reports.html"})}]),e.controller("reportsController",["$scope",function(a){!function(a){var b={};b.labels=[];for(var c=0;12>c;c++)b.labels.push(c+":00");b.series=["Views"],b.data=[[]];for(var c=0;12>c;c++)b.data[0].push(c);b.onClick=function(a,b){console.log(a,b)},a.views=b}(a)}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.settings",[]);e.config(["$stateProvider",function(a){a.state("settings",{title:"Settings",url:"/settings",controller:"settingsController",templateUrl:"/web/settings/settings.html"}).state("settings.page",{title:"Setting Page",url:"/page",views:{setting:{controller:"settingPageController",templateUrl:"/web/settings/page.html"}}}).state("settings.manager",{title:"Setting manager",url:"/managers",views:{"@":{controller:"settingManagerController",templateUrl:"/web/settings/manager.html"}}}).state("settings.payment",{title:"Setting Payment",url:"/payment",views:{"@":{controller:"settingPaymentController",templateUrl:"/web/settings/payment.html"}}}).state("settings.shipping",{title:"Setting shipping",url:"/shipping",views:{"@":{controller:"settingShippingController",templateUrl:"/web/settings/shipping.html"}}}).state("settings.social",{title:"Setting social",url:"/social",views:{"@":{controller:"settingSocialController",templateUrl:"/web/settings/social.html"}}}).state("settings.notifications",{title:"Setting notifications",url:"/notifications",views:{"@":{controller:"settingNotificationsController",templateUrl:"/web/settings/notifications.html"}}})}]),e.controller("settingManagerController",["$scope",function(a){}]),e.controller("settingNotificationsController",["$scope",function(a){}]),e.controller("settingPageController",["$scope",function(a){}]),e.controller("settingPaymentController",["$scope",function(a){}]),e.controller("settingsController",["$scope","$state",function(a,b){b.transitionTo("settings.page")}]),e.controller("settingShippingController",["$scope",function(a){}]),e.controller("settingSocialController",["$scope",function(a){}]),e.service("settingsService",["baseService",function(a){return c.extend(a,{collectionName:"settings"})}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.dashboard",[]);e.config(["$stateProvider",function(a){a.state("home",{title:"Dashboard",url:"/",controller:"dashboardController",templateUrl:"/web/dashboard/dashboard.html"})}]),e.controller("dashboardController",["$location","$scope","$rootScope",function(a,b,c){!function(){var a={};a.labels=[];for(var c=0;12>c;c++)a.labels.push(c+":00");a.series=["Views"],a.data=[[]];for(var c=0;12>c;c++)a.data[0].push(c);a.onClick=function(a,b){console.log(a,b)},b.views=a}(b)}]),e.service("dashboardService",["$http","Environment",function(a,b){return{getRole:function(){var c=b.settings.api+"/role";return a.get(c)}}}])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.media",["ngFileUpload"]);e.factory("Medias",["Upload","Environment","$resource",function(a,b,c){var d=b.settings.domain+"/media",e=c(d+"/:id",{id:"@id"});return e.upload=function(b,c){return a.upload({url:d,data:{file:b}}).success(function(a){a=new e(a),c?c(a):null})},e}])}(window,_,window.angular),function(a,b,c,d){c.module("app.base",[])}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.crud",[]);e.directive("crudButtons",function(){return{restrict:"E",replace:!0,template:'<div>  <button type="button" class="btn btn-primary btn-sm save" ng-disabled="!canSave()" ng-click="save()">Save</button>  <button type="button" class="btn btn-warning btn-sm revert" ng-click="revertChanges()" ng-disabled="!canRevert()">Revert changes</button>  <button type="button" class="btn btn-warning btn-sm cancel" ng-click="cancel()">Cancel</button>  <button type="button" class="btn btn-danger  btn-sm remove" ng-click="remove()" ng-show="canRemove()">Remove</button></div>'}}),e.directive("crudEdit",["$parse",function(a){return{scope:!0,require:"^form",link:function(b,d,e,f){var g=a(e.crudEdit),h=g.assign,i=g(b),j=c.copy(i),k=function(a){if(!c.isFunction(i[a]))throw new Error("crudEdit directive: The resource must expose the "+a+"() instance method")};k("$save"),k("$id"),k("$remove");var l=function(a){var d=b.$eval(e[a]);if(!c.isFunction(d))throw new Error('crudEdit directive: The attribute "'+a+'" must evaluate to a function');return d},m=e.onSave?l("onSave"):b.onSave||c.noop,n=e.onSaveAndFinish?l("onSaveAndFinish"):b.onSave||c.noop,o=function(a,b,c,d){j=a,m(a,b,c,d)},p=e.onRemove?l("onRemove"):b.onRemove||o,q=e.onError?l("onError"):b.onError||c.noop,r=e.onCancel?l("onCancel"):b.onCancel||c.noop;b.save=function(){i.$save(o,q)},b.saveAndFinish=function(){i.$save(n,q)},b.cancel=function(){b.revertChanges(),r()},b.revertChanges=function(){i=c.copy(j),h(b,i),f.$setPristine()},b.remove=function(){i.$id()?i.$remove(p,q):p()},b.canSave=function(){return f.$valid&&!c.equals(i,j)},b.canRevert=function(){return!c.equals(i,j)},b.canRemove=function(){return i.$id()},b.getCssClasses=function(a){var b=f[a];return{error:b.$invalid&&!c.equals(i,j),success:b.$valid&&!c.equals(i,j)}},b.showError=function(a,b){return f[a].$error[b]}}}}]),e.factory("crudEditMethods",function(){return function(a,b,d,e,f){var g={};return g[a]=b,g[a+"Copy"]=c.copy(b),g.save=function(){this[a].$saveOrUpdate(e,e,f,f)},g.canSave=function(){return this[d].$valid&&!c.equals(this[a],this[a+"Copy"])},g.revertChanges=function(){this[a]=c.copy(this[a+"Copy"])},g.canRevert=function(){return!c.equals(this[a],this[a+"Copy"])},g.remove=function(){this[a].$id()?this[a].$remove(e,f):e()},g.canRemove=function(){return b.$id()},g.getCssClasses=function(a){var b=this[d][a];return{error:b.$invalid&&b.$dirty,success:b.$valid&&b.$dirty}},g.showError=function(a,b){return this[d][a].$error[b]},g}}).factory("crudListMethods",["$location",function(a){return function(b){var c={};return c["new"]=function(){a.path(b+"/new")},c.edit=function(c){a.path(b+"/"+c)},c}}]),function(){function a(a){this.$get=c.noop,this.routesFor=function(b,c,e){var f="/web",g="/"+b.toLowerCase();e=e||c,null!==e&&e!==d&&""!==e&&(g="/"+e+g);var h=function(a){return f+"/"+b.toLowerCase()+"/"+a.toLowerCase()+".html"},i=function(a){return b+a+"Ctrl"},j={stateList:function(a){return j.when(b.toLowerCase(),{url:g,templateUrl:h("List"),controller:i("List"),resolve:a}),j},stateNew:function(a){return j.when(b.toLowerCase()+".new",{url:g+"/new",templateUrl:h("Edit"),controller:i("Edit"),resolve:a}),j},stateEdit:function(a){return j.state(b.toLowerCase()+".edit",{url:g+"/:id",templateUrl:h("Edit"),controller:i("Edit"),resolve:a}),j},state:function(b,c){return a.state(b,c),j},otherwise:function(b){return a.otherwise(b),j},$stateProvider:a};return j}}a.$inject=["$stateProvider"],e.provider("crudRoute",a)}()}(window,_,window.angular),function(a,b,c,d){var e=c.module("app.category",[]);e.factory("Categories",["resourceService",function(a){var b=a("category");return b}])}(window,_,window.angular),jQuery(document).ready(function(){window.angular.bootstrap(document,["app"])});
//# sourceMappingURL=app.js.map