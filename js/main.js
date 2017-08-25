// MODULE

var app = angular.module("computer", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider.
    when('/main', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
      when('/about', {
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    }).
      when('/services', {
      templateUrl: 'services.html',
      controller: 'ServicesCtrl'
    }).
      when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    }).
  	otherwise({redirectTo: '/main'})

}]);

app.controller("MainCtrl", ['$scope', function($scope){

}]);

app.controller("ServicesCtrl", ['$scope', function($scope){

}]);

app.controller("ContactCtrl", ['$scope', function($scope){

}]);