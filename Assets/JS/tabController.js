listingPageApp.controller("tabController", function($scope){
  $scope.thing = "this is a gross overreach of executive power";
  $scope.whichTab = 0;
  $scope.show1 = false;
  $scope.show2 = true;
  $scope.show3 = true;
  console.log("tab controller is up");
  $scope.tabClicker = function(){

    console.log("clickin tabs");

    if(!$scope.show1)//if this is NOT hidden
    {
      $("#itemDetailsTab").addClass("listing-tabSelected");
      $("#shippingPoliciesTab").removeClass("listing-tabSelected");
      $("#reviewsTab").removeClass("listing-tabSelected");
    }
    if(!$scope.show2)//if this is NOT hiddden
    {
      $("#itemDetailsTab").removeClass("listing-tabSelected");
      $("#shippingPoliciesTab").removeClass("listing-tabSelected");
      $("#reviewsTab").addClass("listing-tabSelected");
    }
    if(!$scope.show3)//if this is NOT hiddden
    {
      $("#itemDetailsTab").removeClass("listing-tabSelected");
      $("#shippingPoliciesTab").addClass("listing-tabSelected");
      $("#reviewsTab").removeClass("listing-tabSelected");
    }

  }//end tabclicked
});//end tabcontroller.
