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
      $scope.post.date = new Date(); 
      $scope.post.status = 'draft';
      Post.post($scope.post).then(function() {
        $location.path('/blog');
      });
    };
  });
