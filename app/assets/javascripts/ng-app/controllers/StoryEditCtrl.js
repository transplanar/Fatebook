(function(){
  function StoryEditCtrl($scope, $stateParams, PagesSrv, StorySrv){
    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.currentStory = data;
      $scope.title = $scope.currentStory.title;
      $scope.description = $scope.currentStory.description;
      $scope.summary = $scope.currentStory.summary;
    });

    PagesSrv.query({story_id: $stateParams.story_id}).$promise.then(function(data){
      var pages = data;
      // console.log(pages);
      // console.log(pages.length);
      //
      // $scope.incompletePages = _.filter(pages,function(page){
      //   return !page.complete;
      // });
      $scope.completePages = [];
      $scope.incompletePages = [];

      _.each(pages, function(page){
        if(page.complete){
          $scope.completePages.push(page);
        }else{
          $scope.incompletePages.push(page);
        }
      })

      // console.log('pages',pages);
      // console.log('incomplete', $scope.incompletePages);
    });

    $scope.submit = function(){
      if(!_.isEmpty($scope.title)){
        var storyDataHash =
          {
            id: $scope.currentStory.id,
            title: $scope.title,
            description: $scope.description,
            summary: $scope.summary
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
    .controller('StoryEditCtrl', ['$scope', '$stateParams','PagesSrv', 'StorySrv', StoryEditCtrl]);
})();
