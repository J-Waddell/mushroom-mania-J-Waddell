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

.controller('RootCtrl', function($scope) {
    console.log('I am a RootCtrl')
    $scope.gotoMushroom = () => {

        $scope.gotoMushroom = () => $location.url(`/mushroom/${$scope.mushroom}`)
    }
})

.controller('MushroomCtrl', function($scope, $routeParams, mushroomFactory) {
    console.log('I am a MushroomCtrl')

    mushroomFactory.getMushroom($routeParams.mushroom)
        .then((mushroom) => {
            $scope.name = mushroom.name
            $scope.edible = mushroom.edible
        })
    })

// .factory('mushroomFactory', ($http) => {
//     return {
//         getMushroom (name) {
//             return $http
//             .get(`mushrooms.json`)
//             .then((response) => ({
//                 edible:mushrooms.json.edible,
//                 description:mushrooms.json.description,

.factory('mushroomFactory', function($http) {
    return {
        getMushroom : () => {
           return $http.get('mushrooms.json')
            .then((value) => {
                console.log(value)
                return value.data
            })
        }
    }
})