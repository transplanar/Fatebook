(function(){
  function StoryPreviewCtrl($scope, $state, $stateParams, StorySrv){
    $scope.setStory = function(id){
      StorySrv.show({id: id}).$promise.then(function(data){
        $scope.currentStory = data;
      });
    }

    $scope.setStory($stateParams.story_id);

    $scope.startAdventure = function(){
      console.log('done');
      $state.go('play',{story_id: $scope.currentStory.id})
    }
  };

  angular
    .module('fatebook')
    .controller('StoryPreviewCtrl',['$scope', '$state', '$stateParams', 'StorySrv', StoryPreviewCtrl])
})();
