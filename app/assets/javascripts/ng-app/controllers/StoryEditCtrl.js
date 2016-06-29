// TODO finish this
(function(){
  function StoryEditCtrl($scope, $stateParams, StorySrv){
    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.currentStory = data;
      $scope.title = $scope.currentStory.title;
      $scope.description = $scope.currentStory.description;
      $scope.summary = $scope.currentStory.summary;
      console.log($scope.currentStory);
    });

    $scope.submit = function(){
      StorySrv.update(
        {
          title: $scope.title,
          description: $scope.description,
          summary: $scope.summary
        }
      ).$promise.then(function(data){
        // TODO display page nesting
        $scope.currentStory = data;
      });
    }
  }

  angular
    .module('fatebook')
    .controller('StoryEditCtrl', ['$scope', '$stateParams','StorySrv', StoryEditCtrl]);
})();
