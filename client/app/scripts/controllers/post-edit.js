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
      $scope.savePost = function() {
        $scope.post.save().then(function() {
          $location.path('/post/' + $routeParams.id);
        });
      };
    });
  });
