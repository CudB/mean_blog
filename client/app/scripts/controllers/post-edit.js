'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostEditCtrl
 * @description
 * # PostEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostEditCtrl', function ($scope, $location, $routeParams, Post) {
    $scope.post = {};
    Post.one($routeParams.id).get().then(function(post) {
      $scope.post = post;
      $scope.post.tags = $scope.post.tags.join();
      $scope.savePost = function() {
        $scope.post.tags = $scope.post.tags.replace(/[\s]/g, '').split(',');
        $scope.post.save().then(function() {
          $location.path('/post/' + $routeParams.id);
        });
      };
    });
  });
