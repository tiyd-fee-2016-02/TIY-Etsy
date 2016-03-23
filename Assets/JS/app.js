var etsyApp = angular.module("etsyApp", ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'trending.html'
    })
  }); //closes angular module
