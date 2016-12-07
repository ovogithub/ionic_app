angular.module('result-filter', [])

    .controller('ResultFilterCtrl', function ($scope, $stateParams) {

        console.log('CTRL2');

        $scope.results = $stateParams.data.results;
        $scope.filters = $stateParams.data.filters;
    });
