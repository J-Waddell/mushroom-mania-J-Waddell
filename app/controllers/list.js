app.controller('ListCtrl', function($scope, $http, varFactory) {
    console.log('here is the list controller')

    $scope.factoryThing = varFactory.getThatVar()

    $http.get(`mushrooms.json`)
        .then((mushroom) => {
            console.log('mushroom')
            $scope.list = mushroom.list
        })
})