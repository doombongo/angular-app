'use strict';
(function(){

  var app = angular.module('myApp', [
    'ngRoute',
    'myApp.controllers',
    'mm.foundation'
  ]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/cities'});
  }]);

})();