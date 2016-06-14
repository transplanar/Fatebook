(function(){
//  function StoryNavCtrl($scope, StoryNavSrv){
   function StoryNavCtrl($scope, StoryNavSrv, $resource){
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

     var Story = $resource('/stories/:id.json', {},{
       update: {method: 'PUT'}
     });
    
     //NOTE Need to parse to float? https://youtu.be/KElJ2nhYoOg?t=14m7s
     $scope.data = Story.query();
  }

  angular
    .module('fatebook')
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', '$resource', StoryNavCtrl]);
//    .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', StoryNavCtrl]);
})();
