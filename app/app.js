console.log('Taters??')

angular.module('MushroomMania', ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
            .when('/', {
                controller: 'RootCtrl',
                templateUrl: '/partials/mushroom.html'
            })
    })

.controller('RootCtrl', function($scope) {
    console.log('I am a RootCtrl')
    $scope.gotoMushroom = () => {

        $scope.gotoMushroom = () => $location.url(`/mushroom/${$scope.name}`)
    }
})