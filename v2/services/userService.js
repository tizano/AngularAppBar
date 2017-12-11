'use strict';
import angular from 'angular';

angular.module('BlablaBarApp').service('userService', ['$http', '$location', function ($http, $location) {

    this.getUser = (id) => {
        return $http({
            method: 'GET',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/user/'+id
        }).then(function(response) {
            return response.data;
        });
    };

    this.saveUser = (id, data) => {

        return $http({
            method: 'PUT',
            url: 'http://localhost/AngularAppBarAPI/barAPI/public/api/user/'+id,
            data: data
        }).then(function(response) {
            $location.path('/account');
            return response.data;
        });
    };

}]);
