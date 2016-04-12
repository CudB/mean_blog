'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostDeleteCtrl
 * @description
 * # PostDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostDeleteCtrl', function ($scope, $location, $routeParams, Post) {
    $scope.post = Post.one($routeParams.id).get().$object;
    $scope.deletePost = function() {
      $scope.post.remove().then(function() {
        $location.path('/blog');
      });
    };
    $scope.back = function() {
      $location.path('/post/' + $routeParams.id);
    };
  });
