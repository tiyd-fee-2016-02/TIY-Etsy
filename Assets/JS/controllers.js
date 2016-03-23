// moreTrending();


etsyApp.controller('etsyController', ['$scope', '$http', function($scope, $http){
  $scope.message = "hello world";

  $http.get("https://openapi.etsy.com/v2/listings/trending/?api_key=xkpd25inafnxzw5h0dmyo8ko&includes=MainImage,Shop").then(function(response){
    $scope.trending = response.data;


    // var card = response.data;
    console.log(response.data);

    // var Image = trending.results['+i+'].MainImage.url_170x135

    var start = 0;
    var end = 15;
    // function counter(){
    // }
    $scope.moreTrending = function(){
      for(var i = start; i <= end; i+=4){
      $("#trending-grid-col-one").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="{{trending.results['+i+'].MainImage.url_170x135}}"></img></div><div class = "trending-card-title"> {{trending.results['+i+'].title}}</div><div class = "trending-card-seller"> {{trending.results['+i+'].Shop.shop_name}}</div><div class = "trending-card-price"> ${{trending.results['+i+'].price}}</div>');
      }
       for(var i = start+1; i <= end; i+=4){
      $("#trending-grid-col-two").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="{{trending.results['+i+'].MainImage.url_170x135}}"></img></div><div class = "trending-card-title"> {{trending.results['+i+'].title}}</div><div class = "trending-card-seller"> {{trending.results['+i+'].Shop.shop_name}}</div><div class = "trending-card-price"> ${{trending.results['+i+'].price}}</div>');
      }
       for(var i = start+2; i <= end; i+=4){
      $("#trending-grid-col-three").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="{{trending.results['+i+'].MainImage.url_170x135}}"></img></div><div class = "trending-card-title"> {{trending.results['+i+'].title}}</div><div class = "trending-card-seller"> {{trending.results['+i+'].Shop.shop_name}}</div><div class = "trending-card-price"> ${{trending.results['+i+'].price}}</div>');
      }
       for(var i = start+3; i <= end; i+=4){
      $("#trending-grid-col-four").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="{{trending.results['+i+'].MainImage.url_170x135}}"></img></div><div class = "trending-card-title"> {{trending.results['+i+'].title}}</div><div class = "trending-card-seller"> {{trending.results['+i+'].Shop.shop_name}}</div><div class = "trending-card-price"> ${{trending.results['+i+'].price}}</div>');
      }
      start= start + 15;
      end= end + 15;
      console.log(start);
      console.log(end);
      };
    }) //closes moreTrending

  }]); //closes controller
