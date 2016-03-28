listingPageApp.controller("tabController", ['$scope', '$http', function($scope, $http){
  $scope.thing = "this is a gross overreach of executive power";
  $scope.whichTab = 0;
  $scope.show1 = false;
  $scope.show2 = true;
  $scope.show3 = true;
  console.log("tab controller is up");

  $http.get('https://openapi.etsy.com/v2/listings/'+ listingID +'?api_key=727eaf1mpfdwq2u4m3lep2sa').success(function(data){
  console.log(data);
    $scope.userID = data.results[0].user_id;//grab the user id.
    $scope.listing = data.results[0]; //we'll need the listing info too.

    //then use the user id to get overall feedback info.
    $http.get('https://openapi.etsy.com/v2/users/'+ $scope.userID + '?api_key=727eaf1mpfdwq2u4m3lep2sa').success(function(data){
      $scope.revNum = data.results[0].feedback_info.count;
      $scope.overallScore = data.results[0].feedback_info.score;
      console.log(data);
      });//end user get

      $http.get('https://openapi.etsy.com/v2/users/'+ $scope.userID + '/shops?api_key=727eaf1mpfdwq2u4m3lep2sa').success(function(data){
        $scope.shopID = data.results[0].shop_id;
        $scope.policyPayment = data.results[0].policy_payment;
        $scope.policyShipping = data.results[0].policy_shipping;
        $scope.policyRefunds = data.results[0].policy_refunds;
        $scope.policyAdditional = data.results[0].policy_additional;
      });//end shop get

      //this gets the feedback for this user.
      $http.get('https://openapi.etsy.com/v2/users/'+ $scope.userID +'/feedback/from-buyers?api_key=727eaf1mpfdwq2u4m3lep2sa').success(function(data){
        $scope.feedback = data.results; //this is the feedback itself.


      });//end the feedback get

  });//end listing get


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
}]);//end tabcontroller.
