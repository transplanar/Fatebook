(function(){
   function StoryNavCtrl($scope, StoryNavSrv, StorySrv, StoriesSrv, PageSrv, PagesSrv, $resource){
    // StoryNavSrv.initializeStoryData();

    $scope.debugMode = true;

    // $scope.currentPage = StoryNavSrv.currentPage;
    // $scope.unfinishedPages = StoryNavSrv.unfinishedPages;

    //NOTE Check that this works
    // $scope.$watch('StoryNavSrv.currentPage',function(newVal,oldVal){
    //   $scope.currentPage = StoryNavSrv.currentPage;
    // })

    $scope.setPage = function(dest){
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

    $scope.createNestedPage = function(){
      PagesSrv.create({story_id: StoryNavSrv.currentStory.id, title: 'Nested test', content: 'Baaa'})
    }

    // $scope.story_data = StorySrv.query();

    //TODO Make ID dynamic here as you navigate to a new page
    StorySrv.show({id: 1}).$promise.then(function(data){
      StoryNavSrv.currentStory = data;
      $scope.currentStory = StoryNavSrv.currentStory;
      $scope.initFirstPage();
    });


    $scope.initFirstPage = function(){
      PageSrv.show({story_id: StoryNavSrv.currentStory.id, id: 1}).$promise.then(function(data){
        StoryNavSrv.currentPage = data;
        $scope.currentPage = StoryNavSrv.currentPage;
        // var choices = $.map($scope.currentPage.choices, function(el) {return el});

        // console.log('choices',choices);
        // console.log($scope.currentPage.choices);
        // console.log($scope.currentPage.choices[0]);
        // console.log($scope.currentPage.choices[0]);
        // console.log(data);
      })
    }

    // StoryNavSrv.initializeStoryData();
  }

  angular
    .module('fatebook')
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', 'StorySrv', 'StoriesSrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
})();
