
var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.html'
    })
    .when('/product', {
      templateUrl: 'productPage.html'
    })
    .when('/Category', {
      templateUrl: 'Views/category.html',
      controller: 'CategoryViewController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
