(function(){
//  function StoryNavCtrl($scope, StoryNavSrv){
  //  function StoryNavCtrl($scope, StoryNavSrv, $resource){
   function StoryNavCtrl($scope, StoryNavSrv, StorySrv, PageSrv, PagesSrv, $resource){
    StoryNavSrv.initializeStoryData();

    $scope.debugMode = false;
    $scope.currentStory = StoryNavSrv.currentStory;
    $scope.currentPage = StoryNavSrv.currentPage;
    $scope.unfinishedPages = StoryNavSrv.unfinishedPages;

    $scope.setPage = function(dest){
      console.log('setting page', dest);
      var pages = StoryNavSrv.currentStory.pages;

      for(var i in pages){
        if (pages[i].id === dest){
          //NOTE Better way to sync controller and service?
          StoryNavSrv.currentPage = pages[i];
          $scope.currentPage = pages[i];
        }
      }

      return null;
    }

    angular.element(document).bind('keyup', function (e) {
      if(StoryNavSrv.currentPage && StoryNavSrv.currentPage.choices){
        var choiceIndex = e.keyCode - 49;
        var page = StoryNavSrv.currentPage;
        var choice = page.choices[choiceIndex];

        if(choice){
          $scope.$apply($scope.setPage(choice.dest));
        }
      }
    });

    // $scope.story_data = StorySrv.query();

    $scope.page_data = PagesSrv.query();

    // console.log(PageSrv.get({page_id: 1}));
    $scope.super_page = PageSrv.show({id: 3});
  }

  angular
    .module('fatebook')
    //  .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', '$resource', StoryNavCtrl]);
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', 'StorySrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
//    .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', StoryNavCtrl]);
})();
