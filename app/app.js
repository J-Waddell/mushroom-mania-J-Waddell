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

        $scope.gotoMushroom = () => $location.url(`/mushroom/${$scope.mushrooms}`)
    }
})

.controller('MushroomCtrl', function($scope, $routeParams, mushroomFactory) {
    console.log('I am a MushroomCtrl')

    mushroomFactory.getMushroom($routeParams.mushrooms)
        .then((mushrooms) => {
            $scope.name = mushrooms
            $scope.edible = mushrooms.edible
            $scope.description = mushrooms.description
            // $scope.mushroom = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        })
    })

.factory('mushroomFactory', ($http) => {
    return {
        getMushroom (mushroom) {
           return $http
           .get(`mushrooms.json`)
            .then((mushrooms) => ({

                // console.log(mushroom)
                // return value.data
                name:mushrooms,
                edible:mushrooms.edible,
                description:mushrooms.description
            })
          )
        },
    }
})