(function(){
  function StoryCreateCtrl($scope, $state, StoriesSrv, PagesSrv){
    $scope.submit = function(){
      StoriesSrv.create(
        {
          title: $scope.title,
          description: $scope.description,
          summary: $scope.summary
        }
      ).$promise.then(function(story){
        $state.go('edit_page',{story_id: story.id, page_id: story.pages[0].id});
      });
    }
  }

  angular
    .module('fatebook')
    .controller('StoryCreateCtrl', ['$scope', '$state', 'StoriesSrv', 'PagesSrv', StoryCreateCtrl]);
})();
