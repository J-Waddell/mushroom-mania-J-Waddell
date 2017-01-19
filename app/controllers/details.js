// app.controller('DetailCtrl', function($routeParams, $scope, $http) {
//     console.log("DetailCtrl")

//     $scope.listVar = $routeParams.listVar

//     $http.get('mushrooms.json')
//     .then((value)=>{
//         console.log("details", details)
//         let details = value.data.list
//         $scope.selectedItem = details[$scope.listVar]
//     })
// })