'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location, Post) {
    $scope.posts = Post.getList().$object;
    $scope.viewPost = function (id) {
      $location.path('/post/' + id);
    };
  });
