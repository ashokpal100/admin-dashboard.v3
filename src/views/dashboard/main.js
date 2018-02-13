'use strict';
/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
 
(function(){
  angular.module('adminApp').controller('MainCtrl',['$scope','$mdSidenav', function($scope,$mdSidenav) {
  console.log("came here MainCtrl");
  
  $scope.toggleSidenav = function() {
    console.log('----');
    $mdSidenav('left').toggle();
  };
    
    
  }]);
})();