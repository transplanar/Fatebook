(function(){
  function LandingCtrl($scope, $rootScope, StorySrv,UserSessionSrv){
    // TODO update landing controller later
    // StorySrv.query().$promise.then(function(data){

    $scope.displayStories = function(){
      if(UserSessionSrv.currentUser){
        StorySrv.query().$promise.then(function(data){
          $scope.stories = data;
        });

        StorySrv.published().$promise.then(function(data){
          $scope.publishedStories = data;
        });

        StorySrv.owned({user_id: UserSessionSrv.currentUser.id}).$promise.then(function(data){
          $scope.ownedStories = data;
        });
      }
    }

    // $scope.$watch('UserSessionSrv.currentUser', function(newVal,oldVal){
    //   console.log('changed');
    // });

    // angular.element($('#login')).scope().test();

    $scope.deleteStory = function(story_id){
      // index instead
      StorySrv.delete({id: story_id}).$promise.then(function(data){
        $scope.stories = data;
        console.log('story deleted');
      });
    }

    $scope.displayStories();

    // REVIEW is this the best way to update story listings?
    // TODO move this to separate controller (reusable template)
    $rootScope.$on('userLogin', function(){
      $scope.displayStories();
    });
    //TODO create logout event listener
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope','$rootScope', 'StorySrv', 'UserSessionSrv', LandingCtrl]);
})();
