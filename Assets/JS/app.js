var etsyApp = angular.module("etsyApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/trending', {
      templateUrl: 'trending.html'
    })
  }); //closes angular module
