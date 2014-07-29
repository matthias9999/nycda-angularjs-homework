'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
    .controller('SearchCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {

        var clearError = function(result) {
            $scope.error = "";
            return result;
        };

        var applyData = function(result) {
            $scope.articles = {};
            $scope.articles = result.data.response.docs;
        };

        $scope.getArticles = function() {
            $http({
                method: 'GET',
                url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+$scope.term+"&api-key=052861d142cf4eb7fa12bb79781fdbe1:11:69591426",
            }).then(clearError).then(applyData);
        };



    }]);



