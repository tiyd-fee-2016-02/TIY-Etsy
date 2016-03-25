// moreTrending();

var listingID;

etsyApp.controller('etsyController', ['$scope', '$http', function($scope, $http){
 $scope.message = "hello world";

 $http.get("https://openapi.etsy.com/v2/listings/trending/?api_key=xkpd25inafnxzw5h0dmyo8ko&includes=MainImage,Shop&limit=100&offset=50").then(function(response){
   $scope.trending = response.data;

  //  var card = response.data;
   console.log(response.data);
   console.log($scope.trending.results[1]);
   console.log($scope.trending.results[2]);
   console.log($scope.trending.results[3]);
  //  var Image = trending.results['+i+'].MainImage.url_170x135

   var start = 0;
   var end = 15;

   // function counter(){
   // }
   $scope.moreTrending = function(){
     var max_chars = 32;
     function truncate(title, max_chars){
       return (title.length > max_chars) ? title.substring(0, max_chars) + '...' : title;
     };

    //  SOURCE: http://stackoverflow.com/questions/5074759/how-do-i-limit-the-length-of-an-link

     for(var i = start; i <= end; i+=4){
       var image = $scope.trending.results[i].MainImage.url_570xN;
       var title = truncate($scope.trending.results[i].title, max_chars);
       var shopName = $scope.trending.results[i].Shop.shop_name;
       var price = $scope.trending.results[i].price;
       var listID = $scope.trending.results[i].listing_id;
       listingID = listID;
       console.log(image);
       console.log(truncate(title,max_chars));
       console.log(listingID);

     $("#trending-grid-col-one").append('<div class = "trending-card-container"><a href = "" class = "trending-card-image"> <img src="'+image+'"></img></a><a href = "" class = "trending-card-title">'+title+'</a><a href = "" class = "trending-card-seller">'+shopName+'</a><div class = "trending-card-price">$'+price+'</div>');
     }
      for(var i = start+1; i <= end; i+=4){
        var image = $scope.trending.results[i].MainImage.url_570xN;
        var title = truncate($scope.trending.results[i].title, max_chars);
        var shopName = $scope.trending.results[i].Shop.shop_name;
        var price = $scope.trending.results[i].price;
        var listID = $scope.trending.results[i].listing_id;
        listingID = listID;
        console.log(listingID);

     $("#trending-grid-col-two").append('<div class = "trending-card-container"><a href = "" class = "trending-card-image"> <img src="'+image+'"></img></a><a href = "" class = "trending-card-title">'+title+'</a><a href = "" class = "trending-card-seller">'+shopName+'</a><div class = "trending-card-price">$'+price+'</div>');
     }
      for(var i = start+2; i <= end; i+=4){
        var image = $scope.trending.results[i].MainImage.url_570xN;
        var title = truncate($scope.trending.results[i].title, max_chars);
        var shopName = $scope.trending.results[i].Shop.shop_name;
        var price = $scope.trending.results[i].price;
        var listID = $scope.trending.results[i].listing_id;
        listingID = listID;
        console.log(listingID);

     $("#trending-grid-col-three").append('<div class = "trending-card-container"><a href = "" class = "trending-card-image"> <img src="'+image+'"></img></a><a href = "" class = "trending-card-title">'+title+'</a><a href = "" class = "trending-card-seller">'+shopName+'</a><div class = "trending-card-price">$'+price+'</div>');      }
      for(var i = start+3; i <= end; i+=4){
        var image = $scope.trending.results[i].MainImage.url_570xN;
        var title = truncate($scope.trending.results[i].title, max_chars);
        var shopName = $scope.trending.results[i].Shop.shop_name;
        var price = $scope.trending.results[i].price;
        var listID = $scope.trending.results[i].listing_id;
        listingID = listID;
        console.log(listingID);

     $("#trending-grid-col-four").append('<div class = "trending-card-container"><a href = "" class = "trending-card-image"> <img src="'+image+'"></img></a><a href = "" class = "trending-card-title">'+title+'</a><a href = "" class = "trending-card-seller">'+shopName+'</a><div class = "trending-card-price">$'+price+'</div>');
     }
     start = start + 16;
     end = end + 16;
     console.log(start);
     console.log(end);
     };//closes moreTrending


     $scope.moreTrending();

   }) //closes $http.get

 }]); //closes controller
