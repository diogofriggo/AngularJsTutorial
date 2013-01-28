angular.module('phone-catalog', []).config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/phones', {
    templateUrl: '/partials/phone-list.html',
    controller: PhoneListController
  }).when('/phones/:phoneId', {
      templateUrl: '/partials/phone-detail.html',
      controller: PhoneDetailController
  }).otherwise({
      redirectTo: '/phones'
  });
}])