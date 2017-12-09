angular.module("businessApp", ['ui.router','businessApp.controller', 'businessApp.service'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider

            .when("", "/home");

        $stateProvider

            //State for about page

            .state("about", {
                cache: false,
                url: "/about",
                templateUrl: "Views/about.html",
                controller: "homeCtrl"
            })

            .state("home", {
                cache: false,
                url: "/home",
                templateUrl: "Views/home.html",
                controller: "homeCtrl"
            })

            .state("services", {
                cache: false,
                url: "/services",
                templateUrl: "Views/services.html",
                controller: "homeCtrl"
            })

            .state("team", {
                cache: false,
                url: "/team",
                templateUrl: "Views/team.html",
                controller: "homeCtrl"
            })
            
    })
    