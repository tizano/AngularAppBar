'use strict';
import angular from 'angular';

angular.module('BlablaBarApp').controller('mapController', ['$scope', 'eventService',
function ($scope, eventService) {

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjuhsGG8jj9MnNhbE5qVr9nq_wXF3rvHg";

    eventService.getEventList()
        .then(function(response) {
            $scope.eventList = response;
        })
        .catch(function(errorAPI){
            $scope.errorAPI = "Aucune données trouvées";
        });
  }]);
