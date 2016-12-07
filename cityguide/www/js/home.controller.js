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

    .controller('HomeCtrl', ['$scope', '$state', 'rest', 'wp', function ($scope, $state, rest, wp) {

        rest.getCategories()
            .success(function (data) {
                categories = wp.getCategories(data);

                // TODO: categories lässt sich nicht in scope packen
            })
            .error(function (error) {
                //console.dir(data);
                $scope.error = 'Unable to get pages ' + error.message;
            });

        $scope.processFilters = function (form) {
            processFilters(form);
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
        };

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

        function processFilters(form) {
            console.log('HomeCtrl::processFilters');
            console.log('sending request to backend ....');
            console.log('there are two possible ways to retrieve data');
            console.log('city = ' + $scope.city.selectedOption.title);
            console.log('city = ' + form.city.$modelValue.title);
            console.log('daytime = ' + $scope.daytime.selectedOption.title);
            console.log('daytime = ' + form.daytime.$modelValue.title);
            console.log('category = ' + $scope.category.selectedOption.title);
            console.log('category = ' + form.category.$modelValue.title);

            var values = [];
            if (0 !== $scope.city.selectedOption.id) {
                values.push($scope.city.selectedOption.title);
            }
            if (0 !== $scope.daytime.selectedOption.id) {
                values.push($scope.daytime.selectedOption.title);
            }
            if (0 !== $scope.category.selectedOption.id) {
                values.push($scope.category.selectedOption.title);
            }


            // use a rest service here to get data from backend ...
            // but for now we fake it ...
            var data = {
                results: [
                    {title: 'Schloß', id: 1},
                    {title: 'Königstraße', id: 2},
                    {title: 'Fernsehturm', id: 3},
                    {title: 'Mercedes Benz Museum', id: 4},
                    {title: 'Staatsgalerie', id: 5}
                ],
                filters: values
            };

            $state.go('app.result-filter', {data: data});

        }


    }]);
