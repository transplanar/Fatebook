

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

  console.log('ng-app loaded');

  angular
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies', 'templates'])
    .config(config)
})();
