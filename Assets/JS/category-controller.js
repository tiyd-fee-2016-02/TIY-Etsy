// global variable for the product details team
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

	// function for the product detais team
	// takes a listing ID and assigns to the global variable listingID
	// this method is called by an ng-click in catergory.html
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

	// modal window boolean and toggle modal visibility function
	// source: http://adamalbrecht.com/2013/12/12/creating-a-simple-modal-dialog-directive-in-angular-js/
 	$scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
		console.log("toggleModal()");
  };

}]);

// we used code from the source below with slight modifications in lines 48-79,
// some extra comments were added
// source: http://adamalbrecht.com/2013/12/12/creating-a-simple-modal-dialog-directive-in-angular-js/
etsyApp.directive('modalDialog', function() {
  return {
    restrict: 'E', 	// creates the directive as a tag  <modal-dialog></modal-dialog>
    scope: {				// creates and isolated scope
      show: '='			// shorthand for 2 way binding btn show attr in <modal-dialog show=""> and scope.show
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
