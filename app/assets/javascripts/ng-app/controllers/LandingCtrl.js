(function(){
  function LandingCtrl($scope, $rootScope, StorySrv,UserSrv){
    $scope.displayStories = function(){
      if(UserSrv.currentUser){
        StorySrv.db.query().$promise.then(function(data){
          $scope.stories = data;
        });

        StorySrv.db.published().$promise.then(function(data){
          $scope.publishedStories = data;
        });

        StorySrv.db.owned({user_id: UserSrv.currentUser.id}).$promise.then(function(data){
          $scope.ownedStories = data;
        });
      }else{
        StorySrv.db.published().$promise.then(function(data){
          $scope.publishedStories = data;
        });

        $scope.stories = null;
        $scope.ownedStories = null;
      }
    }

    $scope.deleteStory = function(story_id){
      StorySrv.db.delete({id: story_id}).$promise.then(function(data){
        $scope.stories = data;
        $scope.displayStories();
      });
    }

    $scope.displayStories();

    // REVIEW is this the best way to update story listings?
    // TODO move this to separate controller (reusable template)
    $rootScope.$on('updateCurrentUser', function(){
      console.log('user logged in');
      $scope.displayStories();
    });
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope','$rootScope', 'StorySrv', 'UserSrv', LandingCtrl]);
})();
