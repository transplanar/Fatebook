(function(){
  function StoryNavCtrl($scope, $stateParams, StorySrv, PageSrv, UserSrv, $resource, $rootScope){
    $scope.setStory = function(id){
      StorySrv.show({id: id}).$promise.then(function(data){
        $scope.currentStory = data;

        if($stateParams.page_id){
          $scope.setPage($stateParams.page_id);
        }else{
          $scope.initFirstPage();
        }
      });
    }

    $scope.setStory($stateParams.story_id);

    $scope.initFirstPage = function(){
      PageSrv.first({story_id: $scope.currentStory.id}).$promise.then(function(data){
        $scope.currentPage = data;
      });
    };

    $scope.setPage = function(page_id){
      PageSrv.show({story_id: $scope.currentStory.id, id: page_id}).$promise.then(function(data){
        $scope.currentPage = data;
        if(UserSrv.currentUser){
          $rootScope.$broadcast('updateLastPagePlay', {story: $scope.currentStory, page: $scope.currentPage});
        }
      });
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
  }

  angular
    .module('fatebook')
     .controller('StoryNavCtrl', ['$scope', '$stateParams', 'StorySrv', 'PageSrv', 'UserSrv', '$resource', '$rootScope', StoryNavCtrl]);
})();
