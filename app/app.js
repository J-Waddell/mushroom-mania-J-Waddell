console.log('Taters??')

angular.module('MushroomMania', ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
            .when('/', {
                controller: 'RootCtrl',
                templateUrl: '/partials/mushroom.html'
            })
            .when('/mushroom/:name', {
                controller:'MushroomCtrl',
                templateUrl: '/partials/list.html'
        })
    })

.controller('RootCtrl', function($scope, $location) {
    console.log('I am a RootCtrl')
    $scope.gotoMushroom = () => {

        $scope.gotoMushroom = () => $location.url(`/mushroom/${$scope.mushroom}`)
    }
})

.controller('MushroomCtrl', function($scope, $routeParams, mushroomFactory) {
    console.log('I am a MushroomCtrl')

    mushroomFactory.getMushroom($routeParams.mushroom)
        .then((mushroom) => {
            $scope.name = mushroom
            $scope.edible = mushroom.edible
            $scope.description = mushroom.description
            // $scope.mushroom = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        })
    })

.factory('mushroomFactory', function($http) {
    return {
        getMushroom : () => {
           return $http.get('mushrooms.json')
            .then((value) => {
                console.log(value)
                return value.data
                // name.data.mushrooms,
                // edible.data.mushrooms.edible,
                // description.data.mushrooms.description
            })
          
        },
    }
})