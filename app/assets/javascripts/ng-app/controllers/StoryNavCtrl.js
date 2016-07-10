(function(){
  function StoryNavCtrl($scope, $stateParams, StoryNavSrv, StorySrv, PageSrv, $resource){

    $scope.debugMode = true;

    //TODO move these to service

    // TODO allow different stories to be set

    $scope.setStory = function(id){
      StorySrv.show({id: id}).$promise.then(function(data){
        $scope.currentStory = data;
        StoryNavSrv.currentStory = data;
        $scope.initFirstPage();
      });
    }

    $scope.setStory($stateParams.story_id);

    $scope.initFirstPage = function(){
      // TODO sync $scope with Service
      $scope.setPage(StoryNavSrv.currentStory.pages[0].id);
    };

    // Controller methods
    $scope.setPage = function(page_id){
      PageSrv.show({story_id: StoryNavSrv.currentStory.id, id: page_id}).$promise.then(function(data){
        // TODO sync $scope with Service
        $scope.currentPage = data;
        StoryNavSrv.currentPage = data;
      });

      // TODO simulate mouse click on keyboard input
    }

    angular.element(document).bind('keyup', function (e) {
      if(StoryNavSrv.currentPage){
        if (e.keyCode == 32){
          var story = StoryNavSrv.currentStory;
          $scope.$apply($scope.setPage(story.pages[0].id));
        }else{
          var choiceIndex = numToIndex(e.keyCode);
          var page = StoryNavSrv.currentPage;
          var branches = page.branches;

          if(choiceIndex >= 0 && choiceIndex < branches.length ){
            $scope.$apply($scope.setPage(page.branches[choiceIndex].destination_id));
          }
        }
      }

      function numToIndex(num){
        return num - 49;
      }
    });
  }

  angular
    .module('fatebook')
     .controller('StoryNavCtrl', ['$scope', '$stateParams', 'StoryNavSrv', 'StorySrv', 'StorySrv', 'PageSrv', 'PageSrv', '$resource', StoryNavCtrl]);
})();
