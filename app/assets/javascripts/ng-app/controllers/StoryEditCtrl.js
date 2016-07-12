//TODO merge story edit and create controllers
(function(){
  function StoryEditCtrl($scope, $stateParams, PageSrv, StorySrv, BranchSrv){

    StorySrv.db.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.currentStory = data;
      $scope.title = $scope.currentStory.title;
      $scope.description = $scope.currentStory.description;
      $scope.summary = $scope.currentStory.summary;

      BranchSrv.query({story_id: $stateParams.story_id}).$promise.then(function(data){
        $scope.branches = data;
        initBranches(data);
      });
    });

    var getTree = function(page){
      var tree = [];
      var branches = _.where($scope.branches, {parent_id: page.id});
      var pages = _.map(branches, function(branch){ return branch.destination_page });

      _.each(pages, function(page){
        tree.push({page: page, children: getTree(page)});
      });

      return tree;
    };

    var initBranches = function(branches){
      console.log('initializing branches');
      PageSrv.db.first({story_id: $scope.currentStory.id}).$promise.then(function(data){
        var firstPage = data;
        $scope.tree = [];
        $scope.tree.push({page: firstPage, children: getTree(firstPage)});
        console.log('tree rendered');
      });
    };

    // PageSrv.db.query({story_id: $stateParams.story_id}).$promise.then(function(data){
    //   var pages = data;
    //   $scope.completePages = [];
    //   $scope.incompletePages = [];
    //
    //   // TODO list incomplete and highlight in tree
    //   _.each(pages, function(page){
    //     if(page.complete){
    //       $scope.completePages.push(page);
    //     }else{
    //       $scope.incompletePages.push(page);
    //     }
    //   })
    // });

    // TODO allow for draft changes to remain saved but not published?
    $scope.saveDraft = function(){
      update(false);
    }

    $scope.publish = function(){
      update(true);
    }

    var update = function(readyToPublish){
      if(!_.isEmpty($scope.title)){
        var storyDataHash =
          {
            id: $scope.currentStory.id,
            title: $scope.title,
            description: $scope.description,
            summary: $scope.summary,
            published: readyToPublish
          }

        StorySrv.db.update(storyDataHash).$promise.then(function(data){
          $scope.currentStory = data;
        });
      }
    }
  }

  angular
    .module('fatebook')
    .controller('StoryEditCtrl', ['$scope', '$stateParams','PageSrv', 'StorySrv', 'BranchSrv', StoryEditCtrl]);
})();
