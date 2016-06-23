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
        controller: 'StoryNavCtrl',
        templateUrl: 'play.html'
      })
      .state('create_story',{
        url:'/create',
        controller: 'StoryCreateCtrl',
        templateUrl: 'story_form.html'
      })
      .state('edit_page',{
        url:'/story/:story_id/editPage/:page_id',
        // url:'/story/editPage/:page_id',
        controller: 'PageEditCtrl',
        templateUrl: 'page_form.html'
      });;
  };

  angular
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies', 'templates', 'ngResource'])
    .config(config)
})();
