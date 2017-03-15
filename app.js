angular
    .module('scrumboard-app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'scrumboard-controller',
                templateUrl: '/view/scrumboard.html'
            })
            .when('/scrumboard', {
                templateUrl: '#/view/scrumboard.html',
                controller: 'scrumboard-controller'
            })
            .otherwise({redirectTo: '/'});
    }]);
