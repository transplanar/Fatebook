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

        // REVIEW why is this called twice?
        // console.log('query complete');
        initBranches(data);
        // console.log('branches ', $scope.branches);
        // console.log('first page', _.first($scope.currentStory.pages));
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
    }

    var initBranches = function(branches){
      PageSrv.db.first({story_id: $scope.currentStory.id}).$promise.then(function(data){
        var firstPage = data;

        // console.log('first call');
        $scope.tree = getTree(firstPage);
        // console.log('full tree', $scope.tree);

        // console.log('tree', $scope.tree);


        // var tree = [];
        // tree.push(firstPage);

        // tree[0].push(getDescenants);

        // $scope.tree = tree;

        // _.each( getDescenants(firstPage) ;

        // var tier1 = _.where(branches, {parent_id: firstPage.id});



        // console.log('tier1', tier1);
      });

      // var pageTree = _.where(branches, {parent_id: 1})

      // var currentBranches = [];

      // var getDescenants = function(parentBranch){
        // return _.where(branches, {parent_id: parentBranch.id});
        // return _.where(branches, {destination_id: parentBranch.id});
      // }

      // $scope.branches = _.map(branches, function(branch){
        // branch.children = getDescenants(branch);

        // return branch;
      // });

    }

    PageSrv.db.query({story_id: $stateParams.story_id}).$promise.then(function(data){
      var pages = data;
      $scope.completePages = [];
      $scope.incompletePages = [];

      _.each(pages, function(page){
        if(page.complete){
          $scope.completePages.push(page);
        }else{
          $scope.incompletePages.push(page);
        }
      })
    });
    // TODO allow for draft changes to remain saved but not published?
    $scope.saveDraft = function(){
      update(false);
    }

    $scope.publish = function(){
      update(true);
    }

    // $scope.submit = function(){
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
          // TODO display page nesting
          $scope.currentStory = data;
        });
      }
    }
  }

  angular
    .module('fatebook')
    .controller('StoryEditCtrl', ['$scope', '$stateParams','PageSrv', 'StorySrv', 'BranchSrv', StoryEditCtrl]);
})();
