(function(){
  function StoryNavCtrl($scope, $stateParams, StoryNavSrv, StorySrv, StoriesSrv, PageSrv, PagesSrv, $resource){
    // $scope.

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

    // TODO sync $scope with Service
    // $scope.$watch(
    //   'StoryNavSrv.currentPage',
    //   function(newVal, oldVal){
    //     // console.log('page from',oldVal,'to',newVal);
    //     // console.log('raw',StoryNavSrv.currentPage)
    //     $scope.currentPage = StoryNavSrv.currentPage;
    //   }
    // );
    //
    // $scope.$watch(
    //   'StoryNavSrv.currentStory',
    //   function(newVal, oldVal){
    //     // console.log('page from',oldVal,'to',newVal);
    //     // console.log('raw',StoryNavSrv.currentStory)
    //     $scope.currentStory = StoryNavSrv.currentStory;
    //   }
    // );

    // StorySrv.show({id: 1}).$promise.then(function(data){
    //   // TODO sync $scope with Service
    //   StoryNavSrv.currentStory = data;
    //   $scope.currentStory = StoryNavSrv.currentStory;
    //   $scope.initFirstPage();
    // });

    $scope.initFirstPage = function(){
      // TODO sync $scope with Service
      // $scope.setPage($scope.currentStory.pages[0]);
      $scope.setPage(StoryNavSrv.currentStory.pages[0]);
    };

    // Controller methods
    $scope.setPage = function(page){
      PageSrv.show({story_id: StoryNavSrv.currentStory.id, id: page.id}).$promise.then(function(data){
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
     .controller('StoryNavCtrl', ['$scope', '$stateParams', 'StoryNavSrv', 'StorySrv', 'StoriesSrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
})();
