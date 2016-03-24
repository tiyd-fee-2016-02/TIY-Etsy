var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.html'
      // controller: 'homepageController'
    })
    // .when('/product', {
    //   templateUrl: 'product.html'
    // })
    .otherwise({
      redirectTo: '/home'
    });
});
