'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostViewCtrl
 * @description
 * # PostViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostViewCtrl', function ($scope, $routeParams, $location, Post) {
    Post.one($routeParams.id).get().then(function(post) {
      $scope.post = post;
    }, function(response) {
      // 404 page
    });
    $scope.form = {};
    $scope.comment = {};
    $scope.saveComment = function() {
      $scope.comment.date = new Date();
      $scope.post.comments.push($scope.comment);
      $scope.post.put().then(function() {
        $scope.comment = {};
        $scope.form.addComment.$setPristine();
      });
    };
  });