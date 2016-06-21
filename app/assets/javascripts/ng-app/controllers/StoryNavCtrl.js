(function(){
  function StoryNavCtrl($scope, StoryNavSrv, StorySrv, StoriesSrv, PageSrv, PagesSrv, $resource){
    $scope.debugMode = true;

    $scope.setPage = function(id){
      PageSrv.show({parent_id: $scope.currentPage.id, id: id}).$promise.then(function(data){
        $scope.currentPage = data;
        StoryNavSrv.currentPage = data;
      });

      return null;
    }
    
    // TODO refactor to use setPage *********************
    $scope.setPage()

    StorySrv.show({id: 1}).$promise.then(function(data){
      StoryNavSrv.currentStory = data;
      $scope.currentStory = StoryNavSrv.currentStory;
      $scope.initFirstPage();
    });

    $scope.initFirstPage = function(){
      PageSrv.show({story_id: StoryNavSrv.currentStory.id, id: 1}).$promise.then(function(data){
        StoryNavSrv.currentPage = data;
        $scope.currentPage = StoryNavSrv.currentPage;

        $scope.enableKeyboardListener();
      });
    };

    // TODO refactor to work with new relations
    $scope.enableKeyboardListener = function(){
      angular.element(document).bind('keyup', function (e) {
        if(StoryNavSrv.currentPage && StoryNavSrv.currentPage.choices){
          var choiceIndex = e.keyCode - 49;
          var page = StoryNavSrv.currentPage;

          if(choice){
            $scope.$apply($scope.setPage(page.branches[choiceIndex]));
          }
        }
      });
    }
  }

  angular
    .module('fatebook')
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', 'StorySrv', 'StoriesSrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
})();
