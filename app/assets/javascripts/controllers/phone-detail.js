function PhoneDetailController($scope, $routeParams, $http) {
  $http.get('../data/details/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
  });
}