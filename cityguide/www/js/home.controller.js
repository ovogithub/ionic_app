angular.module('home', [])

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

        $scope.processFilters = function () {
            processFilters();
        };

        $scope.city = {
            availableOptions: [
                {id: 0, title: 'Bitte auswählen'},
                {id: 1, title: 'Amsterdam'},
                {id: 2, title: 'Berlin'},
                {id: 3, title: 'Karlsruhe'},
                {id: 4, title: 'Stuttgart'}
            ],
            selectedOption: {id: 0, title: 'Bitte auswählen'}
        }
        ;

        $scope.daytime = {
            availableOptions: [
                {id: 0, title: 'Bitte auswählen'},
                {id: 1, title: 'Vormittag'},
                {id: 2, title: 'Mittag'},
                {id: 3, title: 'Abend'}
            ],
            selectedOption: {id: 0, title: 'Bitte auswählen'}
        };

        $scope.category = {
            availableOptions: [
                {id: 0, title: 'Bitte auswählen'},
                {id: 1, title: 'Essen und Trinken'},
                {id: 2, title: 'Sehenswert'},
                {id: 3, title: 'Shopping'},
                {id: 5, title: 'Erholung'},
                {id: 6, title: 'Übernachten'},
                {id: 7, title: 'Parken'}

            ], selectedOption: {id: 0, title: 'Bitte auswählen'}
        };

        function processFilters(){
            console.log('HomeCtrl::processFilters');
        }




    });
