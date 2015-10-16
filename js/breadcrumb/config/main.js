breadcrumbModule.config(['$breadcrumbProvider',
  function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'Home',
      template: 'bootstrap3'
    });
  }
])
