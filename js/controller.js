angular.module("businessApp.controller", [])

    .controller('homeCtrl', function ($scope, $state, $rootScope, $location, $anchorScroll) {

        //hash linking
        $scope.scrollTo = function (id) {
            $location.hash(id);
            $anchorScroll();
        }


        $scope.about = function () {
            console.log("i have arrived");
            $state.go("about");
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

        $scope.home = function () {
            console.log("i am home");
            $state.go("home");
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

        $scope.services = function () {
            console.log("i am services");
            $state.go("services");
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

        $scope.team = function () {
            console.log("i am team");
            $state.go("team");
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }


    })

