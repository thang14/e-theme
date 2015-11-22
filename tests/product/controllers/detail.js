describe('productDetailController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.save', function() {
    it('save', function() {
      var $scope = {};
      var controller = $controller('productDetailController', { $scope: $scope });
      $scope.name = 'abc';
      $scope.variant_options = [{
        name: "size_name", 
        label : "Size",
        items: ['Red']
      }];
      
      $scope.variant_variants = [{
        option: '0',
        price: 1000,
        sale: 5,
        quantity: 1
      }]
      
      $scope.save();
      expect($scope.strength).toEqual('strong');
    });
  });
});
