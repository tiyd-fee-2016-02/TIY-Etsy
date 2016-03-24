// moreTrending();


etsyApp.controller('etsyController', ['$scope', '$http', function($scope, $http){
 $scope.message = "hello world";

 $http.get("https://openapi.etsy.com/v2/listings/trending/?api_key=xkpd25inafnxzw5h0dmyo8ko&includes=MainImage,Shop&limit=100&offset=50").then(function(response){
   $scope.trending = response.data;


   // var card = response.data;
   console.log(response.data);
   console.log($scope.trending.results[1]);
   console.log($scope.trending.results[2]);
   console.log($scope.trending.results[3]);
   // var Image = trending.results['+i+'].MainImage.url_170x135

   var start = 0;
   var end = 15;
   // function counter(){
   // }
   $scope.moreTrending = function(){
     for(var i = start; i <= end; i+=4){
       var image = $scope.trending.results[i].MainImage.url_570xN;
       var title = $scope.trending.results[i].title;
       var shopName = $scope.trending.results[i].Shop.shop_name;
       var price = $scope.trending.results[i].price;
       console.log(image);
     $("#trending-grid-col-one").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="'+image+'"></img></div><div class = "trending-card-title">'+title+'</div><div class = "trending-card-seller">'+shopName+'</div><div class = "trending-card-price">$'+price+'</div>');
     }
      for(var i = start+1; i <= end; i+=4){
        var image = $scope.trending.results[i].MainImage.url_570xN;
        var title = $scope.trending.results[i].title;
        var shopName = $scope.trending.results[i].Shop.shop_name;
        var price = $scope.trending.results[i].price;
     $("#trending-grid-col-two").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="'+image+'"></img></div><div class = "trending-card-title">'+title+'</div><div class = "trending-card-seller">'+shopName+'</div><div class = "trending-card-price">$'+price+'</div>');
     }
      for(var i = start+2; i <= end; i+=4){
        var image = $scope.trending.results[i].MainImage.url_570xN;
        var title = $scope.trending.results[i].title;
        var shopName = $scope.trending.results[i].Shop.shop_name;
        var price = $scope.trending.results[i].price;
     $("#trending-grid-col-three").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="'+image+'"></img></div><div class = "trending-card-title">'+title+'</div><div class = "trending-card-seller">'+shopName+'</div><div class = "trending-card-price">$'+price+'</div>');      }
      for(var i = start+3; i <= end; i+=4){
        var image = $scope.trending.results[i].MainImage.url_570xN;
        var title = $scope.trending.results[i].title;
        var shopName = $scope.trending.results[i].Shop.shop_name;
        var price = $scope.trending.results[i].price;
     $("#trending-grid-col-four").append('<div class = "trending-card-container"><div class = "trending-card-image"> <img src="'+image+'"></img></div><div class = "trending-card-title">'+title+'</div><div class = "trending-card-seller">'+shopName+'</div><div class = "trending-card-price">$'+price+'</div>');
     }
     start= start + 16;
     end= end + 16;
     console.log(start);
     console.log(end);
     };//closes moreTrending
   }) //closes $http.get

 }]); //closes controller
