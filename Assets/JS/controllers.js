etsyApp.controller('etsyController', ['$scope', '$http', function($scope, $http){
  $scope.message = "hello world";

  $http.get("https://openapi.etsy.com/v2/listings/trending/?api_key=xkpd25inafnxzw5h0dmyo8ko&includes=MainImage,Shop").then(function(response){
    $scope.trending = response.data;

    console.log(response.data);

    })



  }]); //closes controller
