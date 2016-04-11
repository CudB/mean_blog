'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/create/post', {
        templateUrl: 'views/post-add.html',
        controller: 'PostAddCtrl',
        controllerAs: 'postAdd'
      })
      .when('/post/:id', {
        templateUrl: 'views/post-view.html',
        controller: 'PostViewCtrl',
        controllerAs: 'postView'
      })
      .when('/post/:id/delete', {
        templateUrl: 'views/post-delete.html',
        controller: 'PostDeleteCtrl',
        controllerAs: 'postDelete'
      })
      .when('/post/:id/edit', {
        templateUrl: 'views/post-edit.html',
        controller: 'PostEditCtrl',
        controllerAs: 'postEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('BlogRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Post', function(BlogRestangular) {
    return BlogRestangular.service('post');
  });
