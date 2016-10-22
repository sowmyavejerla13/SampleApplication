var myApp = angular.module("myModule", []).controller("myLoginController", function ($scope, $http, $window,$log) {
    var userInfo = {};
    $scope.message = "Login";
    $scope.loginSubmitInfo = function (info) {
        $scope.errMsg ="";
        var jsonData = JSON.stringify({username: info.username, password: info.password});

        $http({
            method: "POST",
            url: 'databaseFiles/loginPage.php',
            data: jsonData


        }).success(function (response, status, headers) {

            if (response == true) {
                $window.location.href = "Templates/Dashboard.html"
            }else{
                $scope.errMsg = "Invalid Credentials";
            }
        }).error(function (error) {
            $scope.errMsg = "Unable to submit form";

        });

    }

})