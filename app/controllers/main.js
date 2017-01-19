app.controller('MainCtrl', function($scope, varFactory) {

    $scope.thingFromFactory = varFactory.getThatVar()

    $scope.setter = (newVal) => {
        console.log("newVal", newVal)
        varFactory.setThatVar(newVal)
    }

})