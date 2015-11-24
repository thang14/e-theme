
<form name="productForm">
    <div class="page-header">
        <div class="page-header-content">
            <div class="page-title">
                <h4 ng-if="!resource.id">Sản phẩm mới</h4>
                <h4 ng-if="resource.id">{{resource.name}}</h4>
            </div>
        </div><!--.page-header-content-->
        <div class="page-header-right">
            <div ng-include="'/web/product/buttons.html'"></div>
        </div>
    </div><!--.page-header-->


    <div class="content">
        <div style="max-width:440px">
            <div class="form-group">
                <label for="productName">
                    Tên <strong class="color-red">*</strong>
                </label>
                <input
                    name="name"
                    type="text"
                    ng-model="resource.name"
                    class="form-control"
                    id="productName"
                    required
                    maxlength="255"
                    placeholder="Name">
            </div><!--.form-group-->
            
            <div class="form-group">
                <label for="productBranh">Thành phần</label>
                <ui-select ng-model="resource.section" theme="bootstrap">
                    <ui-select-match placeholder="Chọn hoặc tìm kiếm">{{$select.selected.name}}</ui-select-match>
                        <ui-select-choices repeat="section in sections | filter: $select.search">
                            <div ng-bind-html="section.name | highlight: $select.search"></div>
                        </ui-select-choices>
                </ui-select>
            </div><!--.form-group-->
        </div>
    </div>
</form>
  
