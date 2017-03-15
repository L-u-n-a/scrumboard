angular
    .module('scrumboard-app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'controller/scrumboard-controller.js'
            })
            .when('/view/scrumboard', {
                templateUrl: '/view/scrumboard.html'
            })
            .otherwise({redirectTo: '/'});
    }]);
