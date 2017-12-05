angular
  .module("devmtnTravel")
  .controller("locationsCtrl", function($scope, mainSrvc) {
    mainSrvc.getTravelInfo().then(response => {
      $scope.locations = response.data;
    });
  });
