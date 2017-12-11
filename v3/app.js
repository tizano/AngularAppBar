import angular from 'angular';
import ngRoute from 'angular-route';
import ngMap from 'ngmap';


const barApp = angular.module('BlablaBarApp', ['ngRoute', 'ngMap']);

barApp.config(['$routeProvider', '$locationProvider',

    function($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        // Système de routage
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mapController'
        })
        .when('/account', {
            templateUrl: 'views/account.html',
            controller: 'userController'
        })
        .when('/edit-account', {
            templateUrl: 'views/edit-account.html',
            controller: 'userController'
        })
        .when('/events', {
            templateUrl: 'views/events.html',
            controller: 'eventController'
        })
        .when('/edit-event/:id', {
            templateUrl: 'views/edit-event.html',
            controller: 'eventDetailController'
        })
        .when('/create-event', {
            templateUrl: 'views/create-event.html',
            controller: 'eventController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);

//directive pour afficher dans le header
//directive pour creer une map
