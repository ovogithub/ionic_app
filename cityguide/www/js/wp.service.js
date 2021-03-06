angular
    .module('wp',[])
    .factory('wp', ['$q', function ($q) {

        var wp = {};


        // $q liefert einen Promisse in Form des resolve oder reject
        wp.getCategories = function (data) {
            return $q(function (resolve, reject) {
                var categories = [];

                angular.forEach(data, function(element){

                    var obj = {};

                    obj.title = element.name;
                    obj.id = element.id;
                    categories.push(obj);

                });
                resolve(categories);

                reject('error wp.getCategories');

            });

        };


        return wp;
    }]);
