var listingPageApp = angular.module('listingPageApp', ['ngRoute']);

    var listingID = 219798694;
    var userID
    var gListing;
    var gImages;

listingPageApp.controller('listingPageController', ['$http', '$scope', function($http, $scope) {
    console.log("this works?")


    $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
      // console.log(data);
      $scope.listing = data.results[0];//just display the first one for now
      $scope.tags = data.results[0].tags
      // $scope.userID = data.results[0].user_id
      gListing = $scope.listing
    })

    //based on previous get, find user information (based on listing)
    // $http.get('https://openapi.etsy.com/v2/users/'+ userID + '/shops?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
    //   $scope.shopName = data.results[0].shop_name
    //
    // })

    //acquire all images associated with the listing
    $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
      $scope.images = data.results;//just display the first one for now
      // console.log(data);
      gImages = $scope.images

    })
}]);//end listing controller


    listingPageApp.controller("carouselCtrl", function($scope){
      $scope.carouselClick = 0;
      console.log("carousel ctroller is up")

      $scope.carouselClicker = function(carouselClick){

        var tempClick = (carouselClick % $scope.images.length)

        if (tempClick < 0){
          tempClick = (tempClick + $scope.images.length)
        }
        return tempClick;
      }
    });
