'use strict';
import angular from 'angular';

angular.module('BlablaBarApp').service('eventService', ['$http', function ($http) {

    this.getEventList = () => {
        return $http({
            method: 'GET',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/event'
        }).then(function(response) {
            return response.data;

        });
    };

    this.getEvent = (id) => {
        return $http({
            method: 'GET',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/event/'+id
        }).then(function(response) {
            return response.data;
        });
    };

    this.createEvent = (data) => {
        return $http({
            method: 'POST',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/event',
            data: data
        }).then(function(response) {
            return response.data;
        })
    };

    this.saveEvent = (id, data) => {

        return $http({
            method: 'PUT',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/event/'+id,
            data: data
        }).then(function(response) {
            return response.data;
        });
    };

    this.delEvent = (id) => {

        return $http({
            method: 'DELETE',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/event/'+id,
        }).then(function(response) {
            return response.data;
        });
    };

}]);
