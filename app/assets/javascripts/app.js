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
      controller: 'StoryNavCtrl',
      templateUrl: 'story.html'
    });
  };

  angular
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies', 'templates', 'ngResource'])
    .config(config)
})();
