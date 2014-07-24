'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:TestfbCtrl
 * @description
 * # TestfbCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
  .controller('TestfbCtrl',
  ['$scope','firebaseRef','syncData',
        function($scope, firebaseRef, syncData) {
            syncData('/articles').$bind($scope, 'addedArticles');

            var articlesRef = firebaseRef('/articles');

            $scope.articleName = "";
            $scope.onAddArticle = function (r) {
                articlesRef.push({title: r.headline.main, url: r.web_url});
            };
    }]);