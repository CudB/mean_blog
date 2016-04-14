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
    $scope.editPost = true;
    $scope.post = {};
    Post.one($routeParams.id).get().then(function(post) {
      $scope.post = post;
      $scope.tags = $scope.post.tags.join();
      $scope.savePost = function() {
        $scope.post.tags = $scope.tags.replace(/[\s]/g, '').split(',');
        console.log($scope.tags);
        $scope.post.save().then(function() {
          $location.path('/post/' + $routeParams.id);
        });
      };
    });
  });
