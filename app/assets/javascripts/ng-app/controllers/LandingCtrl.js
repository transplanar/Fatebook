(function(){
  function LandingCtrl($scope, $rootScope, StorySrv, StoriesSrv,UserSessionSrv){
    // TODO update landing controller later
    // StoriesSrv.query().$promise.then(function(data){

    $scope.displayStories = function(){
      if(UserSessionSrv.currentUser){
        StoriesSrv.many.query().$promise.then(function(data){
          $scope.stories = data;
        });

        StoriesSrv.published.query().$promise.then(function(data){
          $scope.publishedStories = data;
        });

        StoriesSrv.owned.query({user_id: UserSessionSrv.currentUser.id}).$promise.then(function(data){
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
    })
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope','$rootScope', 'StorySrv', 'StoriesSrv', 'UserSessionSrv', LandingCtrl]);
})();
