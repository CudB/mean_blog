'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostAddCtrl
 * @description
 * # PostAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostAddCtrl', function ($scope, Post, $location) {
    $scope.post = {};
    $scope.savePost = function() {
      Post.post($scope.post).then(function() {
        $location.path('/posts');
      });
    };
  });
