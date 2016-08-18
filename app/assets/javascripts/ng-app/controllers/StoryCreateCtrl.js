(function(){
  function StoryCreateCtrl($scope, $state, StorySrv, PageSrv, UserSrv){
    // console.log($state);
    // console.log($state.includes('create_story'));
    $scope.submit = function(){
      StorySrv.create(
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
