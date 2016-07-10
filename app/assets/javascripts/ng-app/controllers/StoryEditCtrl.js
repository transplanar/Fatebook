(function(){
  function StoryEditCtrl($scope, $stateParams, PageSrv, StorySrv){
    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.currentStory = data;
      $scope.title = $scope.currentStory.title;
      $scope.description = $scope.currentStory.description;
      $scope.summary = $scope.currentStory.summary;
    });

    PageSrv.query({story_id: $stateParams.story_id}).$promise.then(function(data){
      var pages = data;
      $scope.completePages = [];
      $scope.incompletePages = [];

      _.each(pages, function(page){
        if(page.complete){
          $scope.completePages.push(page);
        }else{
          $scope.incompletePages.push(page);
        }
      })
    });

    // TODO allow for draft changes to remain saved but not published?
    $scope.saveDraft = function(){
      update(false);
    }

    $scope.publish = function(){
      update(true);
    }

    // $scope.submit = function(){
    var update = function(readyToPublish){
      if(!_.isEmpty($scope.title)){
        var storyDataHash =
          {
            id: $scope.currentStory.id,
            title: $scope.title,
            description: $scope.description,
            summary: $scope.summary,
            published: readyToPublish
          }

        StorySrv.update(storyDataHash).$promise.then(function(data){
          // TODO display page nesting
          $scope.currentStory = data;
        });
      }
    }
  }

  angular
    .module('fatebook')
    .controller('StoryEditCtrl', ['$scope', '$stateParams','PageSrv', 'StorySrv', StoryEditCtrl]);
})();
