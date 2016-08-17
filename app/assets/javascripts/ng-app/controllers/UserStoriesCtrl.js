(function(){
  function UserStoriesCtrl($scope, $rootScope, StorySrv, UserSrv){
    $scope.getStories = function(){
      if(UserSrv.currentUser){
        StorySrv.owned({user_id: UserSrv.currentUser.id}).$promise.then(function(data){
          $scope.ownedStories = data;
        });
      }
    };

    $scope.getStories();

    $rootScope.$on('updateCurrentUser', function(){
      $scope.getStories();
    });
  };

  angular
    .module('fatebook')
    .controller('UserStoriesCtrl',['$scope', '$rootScope', 'StorySrv', 'UserSrv', UserStoriesCtrl])
})();
