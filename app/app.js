console.log('Taters??')

angular.module('MushroomMania', ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
            .when('/', {
                controller: 'RootCtrl',
                templateUrl: '/partials/mushroom.html'
            })
            .when('/mushroom/:name', {
                controller:'BtnCtrl',
                templateUrl: '/partials/list.html'
        })
    })

.controller('RootCtrl', function($scope, $location, $http) {
    console.log('I am a RootCtrl')
    $scope.gotoMushroom = () => {

        $scope.gotoMushroom = () => $location.url(`/mushroom/${$scope.mushrooms}`)
    }
})
.factory('mushroomFactory', ($http) => {
    return {
        getMushroom : function() {
           return $http
           .get('mushrooms.json')
            .then((mushrooms) => {

                console.log("json", mushrooms.data)
                // return value.data
                return mushrooms.data;
                // edible:mushrooms.edible,
                // description:mushrooms.description
            })
          
        }
    }
})

.controller('RootCtrl', function($scope, $routeParams, mushroomFactory) {
    console.log('I am a RootCtrl also')

    mushroomFactory.getMushroom()
        .then((value) => {
            $scope.name = value.mushrooms
            // $scope.key = mushrooms.edible
            // $scope.value = mushrooms.description
            // $scope.mushroom = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        })
    })

.controller('BtnCtrl', function($scope) {
    console.log('I am BtnCtrl')
    
})