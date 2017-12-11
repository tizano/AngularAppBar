import angular from 'angular';
import angular from 'angular-route';

const barApp = angular.module('BlablaBarApp', ['ngRoute']);

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

barApp.service('eventService', ['$http', function ($http) {

    this.getEventList = () => {
        return $http({
            method: 'GET',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/user'
        }).then(function(response) {
            return response.data;

        });
    };
}]);

barApp.controller('eventController', ['$scope', 'eventService', function ($scope, eventService) {

    eventService.getEventList()
        .then(function(response) {
            $scope.eventList = response;
        })
        .catch(function(errorAPI){
            $scope.errorAPI = "Aucune données trouvées";
        });

}]);

barApp.service('userService', ['$http', function ($http) {

    this.getUser = (id) => {
        return $http({
            method: 'GET',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/user/'+id
        }).then(function(response) {
            return response.data;

        });
    };
}]);

barApp.controller('userController', ['$scope', 'userService', function ($scope, userService) {

    userService.getUser(1)
        .then(function(response) {
            $scope.user = response;
        })
        .catch(function(errorAPI){
            $scope.errorAPI = "Aucune données trouvées";
        });

}]);

//directive pour afficher dans le header
