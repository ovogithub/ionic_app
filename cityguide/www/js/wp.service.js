angular
    .module('wp',[])
    .factory('wp', [ function () {

        var wp = {};

        wp.getCategories = function (data) {

            var categories = [];

            angular.forEach(data, function(element){

                var obj = {};

                obj.title = element.name;
                obj.id = element.id;
                categories.push(obj);

            });

            return categories;
        };


        return wp;
    }]);
