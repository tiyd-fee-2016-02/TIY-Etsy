var listingPageApp = angular.module('listingPageApp', ['ngRoute']);

    var listingID = 272177332;

listingPageApp.controller('listingPageController', ['$http', '$scope', function($http, $scope) {
    console.log("this works?")
    // create a message to display in our view
    $scope.message = 'THIS WORKS, I HOPE';



    $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
      // console.log(data);
      $scope.listing = data.results[0];//just display the first one for now

    })

    $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
      $scope.images = data.results;//just display the first one for now
      console.log(data);

    })


    // $http.get('https://openapi.etsy.com/v2/shops/6509277/listings/active?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
    //   console.log(data);
    //   $scope.store = data.results[0];//just display the first one for now
    // })


  }]);//end controller
