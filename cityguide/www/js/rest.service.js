angular
    .module('rest',[])
    .factory('rest', ['$http', 'API_ENDPOINT', function ($http, API_ENDPOINT) {

        var rest = {};

        rest.getPages = function () {
             return $http.get(API_ENDPOINT.url + '/pages');
        };

        return rest;
    }]);