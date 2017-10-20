angular.module('RegisterApp')
.controller('RegisterController', function($scope) {
    $scope.user = {};
      $scope.isSubmit = false;
    $scope.checkpassword = function () {
        console.log('password check');
        if ($scope.user.passwd1 === $scope.user.passwd2) {
            $scope.user.password = $scope.user.passwd1;
        } else {
            console.log('password mismatch');
            alert("Enter matching password");
            $scope.user.passwd1 = '';
            $scope.user.passwd2 = '';
        }
    }
    $scope.submit = function () {
        
        if ($scope.isSubmit) {
            alert("Form Submitted Sucessfully");
            return;
        }
        $scope.isSubmit = true;
        

    }
    $scope.agecheck = function () {
        $scope.ageinvalid = false;
        var year = new Date().getFullYear();
        var minAge = 14;
        var maxAge = 150;
        var age = year - $scope.user.birthday.getFullYear();
        if (age < minAge || age > maxAge) {
            $scope.ageinvalid = true;
        }
    };
    $scope.clear = function () {
        var conf=confirm("Are you sure you want to clear the fields");
        if(conf) {
            $scope.user.email = '';
            $scope.passwd1 = '';
            $scope.passwd2 = '';
            $scope.user.firstname = '';
            $scope.user.lastname = '';
            $scope.user.birthday = '';
             $scope.ageinvalid = false;
            $scope.isSubmit = false;
            $scope.user.interests='';
        }
    }
});