describe('productDetailController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.save', function() {
    it('select theme', function() {
      var $scope = {};
      var controller = $controller('productDetailController', { $scope: $scope });
      $scope.save();
      expect($scope.strength).toEqual('strong');
    });
  });
});
