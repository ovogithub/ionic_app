angular.module('home', [])

    .controller('HomeCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })



    .controller('DetailCtrl', function ($scope, $stateParams) {
        var poiItem = $stateParams.poiItem;

        var detail = [];
        detail[1] = 'lorem1';
        detail[2] = 'lorem2';

        $scope.detail = detail[poiItem];
    })

    .controller('BookmarkCtrl', function ($scope, $stateParams) {
        $scope.bookmarks = [
            {title: 'Schloß', id: 1},
            {title: 'Königstraße', id: 2}
        ];
    })

    .controller('HomeCtrl', function ($scope, $stateParams, $state) {

        $scope.citys = [
            {title: 'Bitte auswählen', id: 0},
            {title: 'Amsterdam', id: '1'},
            {title: 'Berlin', id: 2},
            {title: 'Karlsruhe', id: 3},
            {title: 'Stuttgart', id: 4}
        ];

        console.dir($scope);
        $scope.result_filter;
        //$scope.result_filter.city = $scope.citys[0].id;

        $scope.times = [
            {title: 'Bitte auswählen', id: 0},
            {title: 'Vormittag', id: 1},
            {title: 'Mittag', id: 2},
            {title: 'Abend', id: 3}
        ];

        $scope.categories = [
            {title: 'Bitte auswählen', id: 0},
            {title: 'Essen und Trinken', id: 1},
            {title: 'Sehenswert', id: 2},
            {title: 'Shopping', id: 3},
            {title: 'Erholung', id: 3},
            {title: 'Übernachten', id: 3},
            {title: 'Parken', id: 3}
        ];


    });
