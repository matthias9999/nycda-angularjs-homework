'use strict';

/**
 * @ngdoc function
 * @name newyoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newyoApp
 */
angular.module('newyoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
