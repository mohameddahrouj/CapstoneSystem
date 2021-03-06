angular.module('CapstoneSystem')
    .controller('LoginController', function ($scope, Auth, $location, User) {
        $scope.programs = [];

        User.getPrograms().then(function (programs) {
            if(programs) {
                $scope.programs = programs;
            }
        });
        
        $scope.unitChanged = function () {
            console.log("here")
        }

        $('#userRole').change(function () {
            $(this).css("color", "black");
            if ($(this).val()== "STUDENT") {
                $("#studentProgram").show();
            }
            else{
                $("#studentProgram").hide();
            }
            }
        );
        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#noaccount-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $('#register-form-link').addClass('active');
            e.preventDefault();
        });

        $('.programList').select2({
            placeholder: 'Program'
        });

        $scope.login = function () {
            Auth.login($scope.loginUser).then(function (res) {
                console.log(res);
                if (res.status == 200) {
                    swal('Welcome to CapstoneSystem!', 'Login successful!', 'success');
                    $location.path("/welcome");
                } else {
                    swal('Oops..!', res.data.message, 'error');
                }
            });
        }

        $scope.register = function () {
            console.log($scope.registerUser);
            Auth.register($scope.registerUser).then(function (res) {
                console.log(res);
                if (res.status == 200) {
                    $scope.loginUser = angular.copy($scope.registerUser);
                    //$scope.registerUser = {};
                    $scope.login();
                } else {
                    swal('Oops..!', res.data.message, 'error');
                }
            });
        }

    });
