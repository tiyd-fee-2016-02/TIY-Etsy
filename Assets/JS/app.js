
// Define an angular module
var etsyApp = angular.module('etsyApp', ['ngRoute']);

etsyApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/Category', {
      templateUrl: 'Views/category.html',
      controller: 'CategoryViewController'
    })
    .otherwise({
      redirectTo: '/Category'
    });
}]);
