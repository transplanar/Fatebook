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
        url:'/',
        templateUrl: 'landing.html'
      })
      .state('preview_story',{
        url:'/preview/:story_id',
        controller: 'StoryPreviewCtrl',
        templateUrl: 'story_preview.html'
      })
      .state('play',{
        url:'/play/story/:story_id/page/:page_id',
        controller: 'StoryNavCtrl',
        templateUrl: 'play.html'
      })
      .state('create_story',{
        url:'/create',
        controller: 'StoryCreateCtrl',
        templateUrl: 'story_form.html'
      })
      .state('edit_story',{
        url:'/edit_story/:story_id',
        controller: 'StoryEditCtrl',
        templateUrl: 'story_form.html'
      })
      .state('edit_page',{
        url:'/edit_story/:story_id/editPage/:page_id',
        controller: 'PageEditCtrl',
        templateUrl: 'page_form.html',
        params: {
          parent_id: null
        }
      })
      .state('user_stories',{
        url:'/my_stories/',
        controller: 'UserStoriesCtrl',
        templateUrl: 'user_stories.html'
      });
  };

  angular
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies', 'templates', 'ngResource', 'ckeditor', 'ngSanitize'])
    .config(config)
})();
