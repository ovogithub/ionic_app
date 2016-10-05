angular.module('result-filter', [])

    .controller('ResultFilterCtrl', function ($scope, $stateParams) {

        //console.dir($stateParams);

        $scope.results = [
            {title: 'Schloß', id: 1},
            {title: 'Königstraße', id: 2},
            {title: 'Fernsehturm', id: 3},
            {title: 'Mercedes Benz Museum', id: 4},
            {title: 'Staatsgalerie', id: 5}
        ];


        console.dir($scope);

    });
