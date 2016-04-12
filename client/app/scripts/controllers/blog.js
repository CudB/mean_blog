'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('BlogCtrl', function ($scope, Post) {
    $scope.blog = true;
    $scope.posts = Post.getList().$object;
  });
