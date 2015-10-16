<ol class="breadcrumb">
  <li ng-repeat="breadcrumb in $state.current.breadcrumbs">
    <a ui-sref="{{breadcrumb.module}}">breadcrumb.label</a>
  </li>
  <li class="active">{{$state.current.title}}</li>
</ol>
