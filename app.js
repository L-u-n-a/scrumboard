/* global angular */
angular
    .module('scrumboard-app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/view/home.html',
          controller: ['$scope', function ($scope) {
            $scope.page = 'home'
          }]
        })

        .when('/scrumboard', {
          controller: 'scrumboard-controller',
          templateUrl: '/view/scrumboard.html'
        })
        .otherwise({redirectTo: '/'})
    }])
