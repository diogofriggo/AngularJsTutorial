function PhoneListController($scope, $http) {
  $http.get('../data/phones.json').success(function(data) {
    $scope.phones = data.splice(0, 5);
  });
  $scope.orderProp = 'age';
}
PhoneListController.$inject = ['$scope', '$http'];
