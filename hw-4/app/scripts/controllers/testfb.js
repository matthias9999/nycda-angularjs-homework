'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:TestfbCtrl
 * @description
 * # TestfbCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')

/*
  .controller('TestfbCtrl',
  ['$scope','firebaseRef','syncData',
        function($scope, firebaseRef, syncData) {
*/
    .controller('TestfbCtrl',
    ['$scope', 'firebaseRef', 'syncData',
        function ($scope, firebaseRef, syncData) {
            syncData('/articles').$bind($scope, 'addedArticles');

            var articlesRef = firebaseRef('/articles');
            $scope.articleName = "";
            $scope.articleCount = articlesRef.length;
            $scope.onAddArticle = function (r) {
                articlesRef.push({title: r.headline.main, url: r.web_url});
            };

            $scope.deleteArticle = function (id) {
                var itemRef = new Firebase('https://crackling-fire-6084.firebaseio.com/articles/' + id);
                itemRef.remove();
                }
    }]);
/*
            //Adding an article by name
            $scope.articleName = "";
            $scope.onAddArticle2 = function () {
                articlesRef.push({title: $scope.articleName});
            };
        }]);
*/