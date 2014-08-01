'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
    .controller('SearchCtrl', ['$scope', '$http', '$q', 'newYorkTimes', 'articles', function ($scope, $http, $q, newYorkTimes, articles) {

        var clearError = function(result) {
            $scope.error = "";
            return result;
        };

        var applyData = function(result) {
            $scope.articles = articles.list = result.data.response.docs;
        };

        $scope.getArticles = _.debounce(function() {
            $http({
                method: 'GET',
                url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+$scope.term+"&api-key=052861d142cf4eb7fa12bb79781fdbe1:11:69591426",
            }).then(clearError).then(applyData);
        },500);
    }]);