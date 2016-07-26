(function(){
  function LandingCtrl($scope, $rootScope, StorySrv,UserSrv){
    $scope.displayStories = function(){
      if(UserSrv.currentUser){
        StorySrv.query().$promise.then(function(data){
          $scope.stories = data;
        });

        StorySrv.published().$promise.then(function(data){
          $scope.publishedStories = data;
        });

        StorySrv.owned({user_id: UserSrv.currentUser.id}).$promise.then(function(data){
          $scope.ownedStories = data;
        });
      }else{
        StorySrv.published().$promise.then(function(data){
          $scope.publishedStories = data;
        });

        $scope.stories = null;
        $scope.ownedStories = null;
      }
    }

    $scope.deleteStory = function(story_id){
      StorySrv.delete({id: story_id}).$promise.then(function(data){
        $scope.stories = data;
        $scope.displayStories();
      });
    }

    $scope.displayStories();

    // REVIEW is this the best way to update story listings?
    // TODO move this to separate controller (reusable template)
    $rootScope.$on('updateCurrentUser', function(){
      $scope.displayStories();
    });
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope','$rootScope', 'StorySrv', 'UserSrv', LandingCtrl]);
})();
