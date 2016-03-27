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

	// modal
 	$scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
		console.log("toggleModal()");
  };

}]);

//
//
//
etsyApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {

			      scope.dialogStyle = {};

			      if (attrs.width) {
			        scope.dialogStyle.width = attrs.width;
						}
			      if (attrs.height) {
			        scope.dialogStyle.height = attrs.height;
						}

			      scope.hideModal = function() {
			        scope.show = false;
			      };
    },
    template: "<div class='ng-modal' ng-show='show'>" +
							"  <div class='ng-modal-overlay' ng-click='hideModal()'></div>" +
							"  <div class='ng-modal-dialog' ng-style='dialogStyle'>" +
							"    <div class='ng-modal-close' ng-click='hideModal()'>[ Close ]</div>" +
							"    <div class='ng-modal-dialog-content' ng-transclude></div>" +
							"  </div>" +
							"</div>"
  };
});
