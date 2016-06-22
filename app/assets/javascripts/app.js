//NOTE include "use strict"?

(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });

    // TODO update later
    $stateProvider
      .state('landing',{
        url:'/',
        controller: 'LandingCtrl',
        templateUrl: 'landing.html'
      })
      .state('play',{
        url:'/play/:story_id',
        // url:'/play',
        controller: 'StoryNavCtrl',
        templateUrl: 'play.html'
      })
      .state('create',{
        url:'/create',
        controller: 'StoryCreateCtrl',
        templateUrl: 'create.html'
      });
  };

  angular
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies', 'templates', 'ngResource'])
    .config(config)
})();
