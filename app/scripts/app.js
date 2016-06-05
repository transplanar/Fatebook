//(function(){
//  function config($stateProvider, $locationProvider){
//    $locationProvider
//      .html5mode({
//        enabled: true,
//        requireBase: false
//      });
//    
//    $stateProvider
//      .state('landing', {
//        url:'/',
//        controller: 'StoryNavCtrl',
//        templateUrl: '/templates/story.html'
//    });
//  };
//  
//  angular
//    .module('fatebook', ['ui.router'])
//    .config(config)
//})();

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
      templateUrl: '/templates/story.html'
    });
  };

  angular
//    .module('chatterBox', ['ui.bootstrap', 'ui.router', 'firebase', 'formatTime', 'ngCookies'])
    .module('fatebook', ['ui.bootstrap', 'ui.router', 'ngCookies'])
    .config(config)
})();