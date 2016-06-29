(function(){
  function StoryCreateCtrl($scope, $state, StoriesSrv, PagesSrv){
    $scope.submit = function(){
      StoriesSrv.create(
        {
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
    .controller('StoryCreateCtrl', ['$scope', '$state', 'StoriesSrv', 'PagesSrv', StoryCreateCtrl]);
})();
