/* global angular */
var app = angular.module('scrumboard-app', ['ngRoute', 'ngCookies'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/login.html',
      controller: 'loginController'
    })
    .when('/scrumboard', {
      templateUrl: 'view/scrumboard.html',
      controller: 'scrumboardController'
    })
    .when('/login', {
      templateUrl: 'view/login.html',
      controller: 'loginController'
    })
    .when('/register', {
      templateUrl: 'view/register.html',
      controller: 'registerController'
    })
    .when('/home', {
      templateUrl: 'view/home.html',
      controller: 'homeController'
    })
    .otherwise({redirectTo: '/'})
})
