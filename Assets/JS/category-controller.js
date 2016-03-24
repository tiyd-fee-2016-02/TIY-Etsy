
etsyApp.controller('CategoryViewController', ['$http', '$scope', function($http, $scope) {

  $scope.message = 'This is the category content';

	$http.get('Assets/apis/etsy/category.json')
		.success(function (data) {
			console.log("Success! => CategoryViewController", data);
			$scope.categories = data;
		})
   .error(function (data) {
      console.log('There was an error!', data);
		});
}]);
