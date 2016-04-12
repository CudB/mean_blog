'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PostViewCtrl
 * @description
 * # PostViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PostViewCtrl', function ($scope, $routeParams, Post) {
    $scope.viewPost = true;
    $scope.post = Post.one($routeParams.id).get().$object;
  });
