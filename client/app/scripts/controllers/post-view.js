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
      // add appropriate error page
      console.log("Error with status code", response.status);
    });
    $scope.form = {};
    $scope.comment = {};
    $scope.saveComment = function() {
      $scope.comment.date = new Date();
      $scope.post.comments.push($scope.comment);
      $scope.post.put().then(function() {
        $scope.showSuccessAlert = true;
        $scope.comment = {};
        $scope.form.addComment.$setPristine();
      }, function(response) {
        // add appropriate error banner
        console.log("Error with status code", response.status);
      });
    };
  });