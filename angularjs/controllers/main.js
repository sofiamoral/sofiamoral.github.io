
var app = angular.module("myApp",[]);

app.controller("mainController", function ($scope, $http) {
    $http.get("json/frameworks.json")
            .success(function (response) {
                $scope.frameworks = response;
            });   
    $http.get("json/languages.json")
            .success(function (response) {
                $scope.languages = response;
            });   
    $http.get("json/projects.json")
            .success(function (response) {
                $scope.projects = response;
            }); 
    $http.get("json/platforms.json")
            .success(function (response) {
                $scope.platforms = response;
            }); 
                      
});


