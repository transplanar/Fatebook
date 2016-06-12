//= require angular
//= require angular-resource

//NOTE include "use strict"?

(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state('landing',{
      url:'/stories',
      controller: 'StoryNavCtrl',
      templateUrl: 'templates/story.html'
      // templateUrl: '/views/stories/index.html.erb'
    });
  };

  console.log('ng-app loaded');

  angular
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies'])
    .config(config)
})();
