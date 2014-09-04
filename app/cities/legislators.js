'use strict';

/* Controllers */
(function(){

var cities = angular.module('myApp.controllers', ['ngRoute']); 

  cities.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cities', {
      templateUrl: 'cities/cities.html',
      controller: 'CitiesController'
    });
  }]);

  cities.controller('CitiesController', ['$scope', '$http',
   function($scope, $http){
    $http.get('http://openstates.org/api/v1//legislators/?state=ar&chamber=lower&active=true&apikey=d2c7ce04dddf475aac2f50f0a21558a5').success(function(data){
    $scope.legislators = data;
    });
  }]);
      
  cities.directive('State', ['$scope', function($scope){
    angular.forEach($scope.legislators, function(key){
      $scope.state.push(key) 
    })
    $scope.state = $scope.legislators.state
  }]);
})();