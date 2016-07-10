(function(){
  function StoryCreateCtrl($scope, $state, StorySrv, PageSrv, UserSrv){
    $scope.submit = function(){
      StorySrv.db.create(
        {
          user_id: UserSrv.currentUser.id,
          title: $scope.title,
          description: $scope.description,
          summary: $scope.summary
        }
      ).$promise.then(function(data){
        $state.go('edit_page',{story_id: data.id, page_id: data.pages[0].id});
      });
    }
  }

  angular
    .module('fatebook')
    .controller('StoryCreateCtrl', ['$scope', '$state', 'StorySrv', 'PageSrv', 'UserSrv', StoryCreateCtrl]);
})();
