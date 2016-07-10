(function(){
  function StoryNavCtrl($scope, $stateParams, StorySrv, PageSrv, $resource, $rootScope){

    $scope.debugMode = true;

    $scope.setStory = function(id){
      StorySrv.db.show({id: id}).$promise.then(function(data){
        $scope.currentStory = data;
        $scope.initFirstPage();
      });
    }

    $scope.setStory($stateParams.story_id);

    $scope.initFirstPage = function(){
      PageSrv.db.first({story_id: $scope.currentStory.id}).$promise.then(function(data){
        $scope.currentPage = data;
      });
    };

    // Controller methods
    $scope.setPage = function(page_id){
      PageSrv.db.show({story_id: $scope.currentStory.id, id: page_id}).$promise.then(function(data){
        $scope.currentPage = data;
      });

      // TODO simulate mouse click on keyboard input
    }

    angular.element(document).bind('keyup', function (e) {
      if($scope.currentStory){
        if (e.keyCode == 32){
          var story = $scope.currentStory;
          $scope.$apply($scope.initFirstPage());
        }else{
          var choiceIndex = numToIndex(e.keyCode);
          var page = $scope.currentPage;
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

    $rootScope.$on('pageNav', function(){

    });
  }

  angular
    .module('fatebook')
     .controller('StoryNavCtrl', ['$scope', '$stateParams', 'StorySrv', 'PageSrv', '$resource', '$rootScope', StoryNavCtrl]);
})();
