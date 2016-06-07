(function(){
//  function StoryNavCtrl($scope){
  function StoryNavCtrl($scope, StoryNavSrv){
    StoryNavSrv.initializeStoryData();
    
    $scope.currentStory = StoryNavSrv.currentStory;
    $scope.currentPage = StoryNavSrv.currentPage;
    
    $scope.setPage = function(dest){
      console.log('setting page');
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
        var choice = StoryNavSrv.currentPage.choices[choiceIndex];
        
        console.log('choice', choice);
        
        if(choice){
          $scope.$apply($scope.setPage(choice.dest));
        }
      }
    });
  }
  
  angular
    .module('fatebook')
//    .controller('StoryNavCtrl', ['$scope', StoryNavCtrl]);
    .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', StoryNavCtrl]);
})();