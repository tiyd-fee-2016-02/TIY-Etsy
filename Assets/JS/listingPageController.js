var listingPageApp = angular.module('listingPageApp', ['ngRoute']);

    var listingID = 272177332;//this will be passed to us via other pages' routing

    // shop id is 5652817. only here for reference

    // var gUserID = 7637157;//hard-coding for now so I can test
    // var gListing;
    // var gImages;

listingPageApp.controller('listingPageController', ['$http', '$scope', function($http, $scope) {
    console.log("this works?")

    $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
      // console.log(data);
      $scope.listing = data.results[0];
      $scope.tags = data.results[0].tags;
      $scope.userID = data.results[0].user_id;
      $scope.timeStamp = data.results[0].creation_tsz;
      $scope.currencyCode = data.results[0].currency_code

        //based on previous get, find user information (based on listing)
        $http.get('https://openapi.etsy.com/v2/users/'+ $scope.userID + '/shops?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
          $scope.shopName = data.results[0].shop_name;
          $scope.shopID = data.results[0].shop_id

            $http.get('https://openapi.etsy.com/v2/shops/'+ $scope.shopID +'?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
              $scope.shopAvatar = data.results[0].icon_url_fullxfull
            })

            $http.get('https://openapi.etsy.com/v2/shops/' + $scope.shopID + '/listings/active?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){

              $scope.listingCount = data.count;
              $scope.shopListings = data.results;
              $scope.listing1 = data.results[0].listing_id;
              $scope.listing2 = data.results[1].listing_id;
              $scope.listing3 = data.results[2].listing_id;
              $scope.listing4 = data.results[3].listing_id;
              $scope.listing5 = data.results[4].listing_id;
              $scope.listing6 = data.results[5].listing_id;
              $scope.listing7 = data.results[6].listing_id;
              $scope.listing8 = data.results[7].listing_id;



              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing1 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image1src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing2 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image2src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing3 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image3src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing4 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image4src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing5 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image5src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing6 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image6src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing7 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image7src = data.results[0]
              })

              $http.get('https://openapi.etsy.com/v2/listings/'+ $scope.listing8 +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
                $scope.image8src = data.results[0]
              })

            })

        })

    })

    //acquire all images associated with the main listing for this product page
    $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'/images?api_key=s0og6fu8wnro0qfl4roi1muj').success(function(data){
      $scope.images = data.results;
    })

}]);//end listing controller


    listingPageApp.controller("carouselCtrl", function($scope){
      $scope.carouselClick = 0;
      console.log("carousel ctroller is up");

      $scope.carouselClicker = function(carouselClick){

        var tempClick = (carouselClick % $scope.images.length);

        if (tempClick < 0){
          tempClick = (tempClick + $scope.images.length);
        }
        return tempClick;
      }
    });
