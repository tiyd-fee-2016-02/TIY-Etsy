app.controller('homepageController', ['$http', '$scope', function($http, $scope) {

  $scope.message = "hello Angular!";
  console.log('control!');

  $http.get('http://localhost:3000/db/').success(function(data){
    console.log("we are talking to homepage.json!");
    $scope.stuff = data;
  });




}]);
