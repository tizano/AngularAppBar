import angular from 'angular';

angular.module('BlablaBarApp').controller('eventController', ['$scope', '$location', '$route', '$routeParams', 'NgMap', 'eventService',
function ($scope, $location, $route, $routeParams, NgMap, eventService) {

    const id = $routeParams.id;
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjuhsGG8jj9MnNhbE5qVr9nq_wXF3rvHg";

    eventService.getEventList()
        .then(function(response) {
            $scope.eventList = response;
        })
        .catch(function(errorAPI){
            $scope.errorAPI = "Aucune données trouvées";
        });

    $scope.getEvent = (id) => {

        eventService.getEvent(id)
            .then(function(response) {
                $scope.event = response;
            })
            .catch(function(errorAPI){
                $scope.errorAPI = "Aucune données trouvées";
            });
    }


    $scope.addEvent = () => {
        const data = {
            event_name: $scope.createEvent.event_name,
            event_barname: $scope.createEvent.event_barname,
            event_picture: $scope.createEvent.event_picture,
            event_date: $scope.createEvent.event_date,
            event_address: $scope.createEvent.event_address,
            event_city: $scope.createEvent.event_city,
            created_at: $scope.createEvent.event_date,
            updated_at: $scope.createEvent.event_date,
            fk_event_user_owner: 1,

        }
        eventService.createEvent(data)
            .then(function(response) {
                $scope.event = response;
                $location.path('/events');

            })
            .catch(function(errorAPI){
                $scope.errorAPI = "Aucune données trouvées";
            });
    };

    $scope.delEvent = (id) => {
        eventService.delEvent(id)
            .then(function(response){
                $scope.event = response;
                $route.reload();
            })
            .catch(function(errorAPI) {
                $scope.errorAPI = "Aucune données trouvées";
            });
    };

}]);
