(function(){
  function StoryNavCtrl($scope, StoryNavSrv, StorySrv, StoriesSrv, PageSrv, PagesSrv, $resource){
    $scope.debugMode = true;

    $scope.setPage = function(page){
      PageSrv.show({story_id: StoryNavSrv.currentStory.id, id: page.id}).$promise.then(function(data){
        $scope.currentPage = data;
        StoryNavSrv.currentPage = data;
      });
    }

    // $scope.setStory = function(story){
    //   StorySrv.show({id: story.id}).$promise.then(function(data){
    //     $scope.currentStory = data;
    //     StoryNavSrv.currentStory = data;
    //   });
    // }

    // $scope.setStory()

    StorySrv.show({id: 1}).$promise.then(function(data){
      StoryNavSrv.currentStory = data;
      $scope.currentStory = StoryNavSrv.currentStory;
      $scope.initFirstPage();
    });

    $scope.initFirstPage = function(){
      $scope.setPage($scope.currentStory.pages[0]);
    };

    angular.element(document).bind('keyup', function (e) {
      if(StoryNavSrv.currentPage){
        if (e.keyCode == 32){
          var story = StoryNavSrv.currentStory;
          $scope.$apply($scope.setPage(story.pages[0]));
        }else{
          var choiceIndex = numToIndex(e.keyCode);
          var page = StoryNavSrv.currentPage;
          var branches = page.branches;

          if(choiceIndex >= 0 && choiceIndex < branches.length ){
            $scope.$apply($scope.setPage(page.branches[choiceIndex]));
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
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', 'StorySrv', 'StoriesSrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
})();
