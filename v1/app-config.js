barApp.config(['$routeProvider', '$locationProvider',

    function($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        // Système de routage
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'eventController'
        })
        .when('/account', {
            templateUrl: 'views/account.html',
            controller: 'userController'
        })
        .when('/edit-account', {
            templateUrl: 'views/edit-account.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);
