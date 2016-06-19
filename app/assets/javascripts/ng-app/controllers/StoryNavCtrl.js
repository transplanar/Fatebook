(function(){
//  function StoryNavCtrl($scope, StoryNavSrv){
  //  function StoryNavCtrl($scope, StoryNavSrv, $resource){
   function StoryNavCtrl($scope, StoryNavSrv, StorySrv, StoriesSrv, PageSrv, PagesSrv, $resource){
    StoryNavSrv.initializeStoryData();

    $scope.debugMode = true;

    $scope.currentPage = StoryNavSrv.currentPage;

    //NOTE check that this works
    $scope.$watch('StoryNavSrv.currentPage',function(newVal,oldVal){
      $scope.currentPage = StoryNavSrv.currentPage;
    })

    $scope.unfinishedPages = StoryNavSrv.unfinishedPages;

    $scope.init = function(currentStory){
      // console.log('initialized');
      // console.log($scope.story_data);
      $scope.currentStory = currentStory;
      console.log(currentStory,'this');
    }

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

    $scope.story_data = StorySrv.query();

    $scope.page_data = PagesSrv.query();
    StorySrv.show({id: 1}).$promise.then(function(data){
      // $scope.currentStory = data;
      StoryNavSrv.currentStory = data;
      $scope.currentStory = StoryNavSrv.currentStory;
    })

    //TODO how do I watch/update for when new pages are created?

    // var story = StorySrv.show({id: 1}).$promise.then(function(data){
    //   // console.log(data);
    //   // return data;
    //   $scope.super_story = story;
    // });


    // console.log(story);
    // console.log(story.id);

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

    // $scope.init = function(){
    //   console.log('initialized');
    // }

    // $scope.init();
    // console.log($scope.currentStory, 'story');
    // console.log($scope.currentStory.id)
  }

  angular
    .module('fatebook')
    //  .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', '$resource', StoryNavCtrl]);
     .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', 'StorySrv', 'StoriesSrv', 'PageSrv', 'PagesSrv', '$resource', StoryNavCtrl]);
//    .controller('StoryNavCtrl', ['$scope', 'StoryNavSrv', StoryNavCtrl]);


})();
