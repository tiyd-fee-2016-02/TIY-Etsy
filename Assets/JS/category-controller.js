var listingID;

etsyApp.controller('CategoryViewController', ['$http', '$scope', function($http, $scope) {

  // $scope.message = 'This is the category content';

	$http.get('Assets/apis/etsy/category.json')
		.success(function (data) {
			console.log("Success! => CategoryViewController", data);
			$scope.categories = data;
		})
   .error(function (data) {
      console.log('There was an error!', data);
		});

	$scope.assignListingID = function(myListingID) {
		listingID = myListingID;
		console.log("assignListingID() => " + listingID);
	};

// Mouseover function to show the heart and menu on 'shop all items cards.'
	var hoverEdit = false;

	$scope.hoverIn = function(){
		this.hoverEdit = true;
	};

	$scope.hoverOut = function(){
		this.hoverEdit = false;
	};

}]);
