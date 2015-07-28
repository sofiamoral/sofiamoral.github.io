
var app = angular.module("myApp",[]);

app.controller("mainController", function ($scope, $http) {

    $http.get("json/skills.json")
            .success(function (response) {
                $scope.skills = response;
            });   
});


