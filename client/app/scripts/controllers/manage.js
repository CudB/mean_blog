'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ManageCtrl', function ($scope, Post) {
    $scope.posts = Post.getList().$object;
  });
