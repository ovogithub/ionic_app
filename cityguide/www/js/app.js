// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [

    /* ionic-Modul */
    'ionic',

    /* app-controler-Module */
    'home',
    'result-filter',

    /* service-Modul */
    'rest',
    'wp'

    ])

    .constant('API_ENDPOINT', {
        url: 'http://www.stadtbegehung.de/wp-json/wp/v2'
        //  For a simulator use: url: 'http://127.0.0.1:8080/api'
    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('app.result-filter', {
                url: '/result-filter',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/result-filter.html',
                        controller: 'ResultFilterCtrl'
                    }
                },
                params: {
                    data: [{filters: null}, {results: null}]
                }
            })

            .state('app.bookmarks', {
                url: '/bookmarks',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/bookmarks.html',
                        controller: 'BookmarkCtrl'
                    }
                }
            })

            .state('app.detail', {
                url: '/detail/:poiItem',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/detail.html',
                        controller: 'DetailCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
