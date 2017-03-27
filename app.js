/* global angular */
var app = angular.module('scrumboard-app', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/view/home.html',
      controller: ['$scope', function ($scope) {
        $scope.page = 'home'
      }]
    })

    .when('/scrumboard', {
      templateUrl: '/view/scrumboard.html',
      controller: 'scrumboardController'
    })
    .when('/login', {
      templateUrl: '/view/login.html',
      controller: 'loginController'
    })
    .when('/register', {
      templateUrl: '/view/register.html',
      controller: 'registerController'
    })
    .otherwise({redirectTo: '/'})
})
