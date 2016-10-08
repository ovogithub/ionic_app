angular.module('result-filter', [])

    .controller('ResultFilterCtrl', function ($scope, $stateParams) {

        $scope.results = $stateParams.data.results;
        $scope.filters = $stateParams.data.filters;
    });
