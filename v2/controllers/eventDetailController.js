'use strict';
import angular from 'angular';

angular.module('BlablaBarApp').controller('eventDetailController', ['$scope', '$location', '$routeParams', 'eventService',
function ($scope, $location, $routeParams, eventService) {

    const id = $routeParams.id;

    $scope.getEvent = (id) => {

        eventService.getEvent(id)
            .then(function(response) {
                $scope.eventDetail = response;
            })
            .catch(function(errorAPI){
                $scope.errorAPI = "Aucune données trouvées";
            });
    }

    $scope.getEvent(id);

    $scope.saveEvent = (id) => {
        const data = {
            event_name: $scope.eventDetail.event_name,
            event_barname: $scope.eventDetail.event_barname,
            event_picture: $scope.eventDetail.event_picture,
            event_date: $scope.eventDetail.event_date,
            event_address: $scope.eventDetail.event_address,
            event_city: $scope.eventDetail.event_city,
        }
        eventService.saveEvent(id, data)
            .then(function(response){
                $scope.eventDetail = response;
                $location.path('/events');
            })
            .catch(function(errorAPI) {
                $scope.errorAPI = "Aucune données trouvées";
            });
    };

}]);
