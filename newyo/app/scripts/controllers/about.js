'use strict';

/**
 * @ngdoc function
 * @name newyoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newyoApp
 */
angular.module('newyoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
