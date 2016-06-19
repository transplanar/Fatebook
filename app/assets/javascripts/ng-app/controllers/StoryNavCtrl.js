(function(){
//  function StoryNavCtrl($scope, StoryNavSrv){
  //  function StoryNavCtrl($scope, StoryNavSrv, $resource){
   function StoryNavCtrl($scope, StoryNavSrv, StorySrv, StoriesSrv, PageSrv, PagesSrv, $resource){
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

    $scope.createNestedPage = function(){
      console.log('button');
    }

    // $scope.story_data = StorySrv.query();
    // $scope.story_data = StoriesSrv.query();
    // console.log($scope.story_data)

    // $scope.page_data = PagesSrv.query();

    // var story = StorySrv.show({id: 1}).$promise.then(function(data){
    //   console.log(data);
    // });

    // var story = StorySrv.get({id: 1});
    // console.log(story);
    // $scope.super_story = StorySrv.show({id: 1});

    // var story = StorySrv.get({id: 1}).$promise.then(function(data){
    //   console.log(data);
    // });

    // console.log(PageSrv.get({page_id: 1}));
    // $scope.super_page = PageSrv.show({id: 3});

    // $scope.super_page.pages.create({title:'Nested Story', content: 'blah'});
    // PagesSrv.create({story_id: $scope.super_page.id, title:'Nested Story', content: 'blah'});

    // PagesSrv.create({story_id: $scope.super_story.id, title: 'Test', content: 'test'})

    // PagesSrv.create({title: 'Test', content: 'test'})
  }

  angular
    .module('fatebook')
    //  .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', '$resource', StoryNavCtrl]);
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', 'StorySrv', 'StoriesSrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
//    .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', StoryNavCtrl]);
})();
