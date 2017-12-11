'use strict';
import angular from 'angular';

angular.module('BlablaBarApp').controller('userController', ['$scope', 'userService', function ($scope, userService) {

    userService.getUser(1)
        .then(function(response) {
            $scope.user = response;
            $scope.header_name = response.user_firstname;
        })
        .catch(function(errorAPI){
            $scope.errorAPI = "Aucune données trouvées";
        });

    $scope.saveProfil = (id) => {
        const data = {
            user_name: $scope.user.user_name,
            user_firstname: $scope.user.user_firstname,
            user_email: $scope.user.user_email
        }
        userService.saveUser(id, data)
            .then(function(response){
                $scope.user = response;
                $scope.header_name = response.user_firstname;
            })
            .catch(function(errorAPI) {
                $scope.errorAPI = "Aucune données trouvées";
            });
    };

}]);
