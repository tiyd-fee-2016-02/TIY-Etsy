app.controller('homepageController', ['$http', '$scope', function($http, $scope) {

  $scope.message = "hello Angular!";
  console.log('control!');

  $http.get('http://localhost:3000/db/').success(function(data){
    console.log("we are talking to homepage.json!");
    $scope.stuff = data;
  });

  // this page helped me figure out how to pass the json data to giveProdID() on line 25 of home.html
  // http://stackoverflow.com/questions/17039926/adding-parameter-to-ng-click-function-inside-ng-repeat-doesnt-seem-to-work

  var listingID;

  $scope.giveProdID = function(listingNUM){
    listingID = listingNUM;
    console.log("listingID equals " + listingID);
  };

}]);
