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
    .otherwise({redirectTo: '/'})
})
