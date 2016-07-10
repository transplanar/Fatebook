(function(){
  function PageEditCtrl($scope,$log, $state, $stateParams,PageSrv, StorySrv, BranchSrv){
    $scope.choiceText = '';

    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.story = data;
      initCurrentPage();
    });

    var initCurrentPage =  function(){
      PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
        $scope.page = data;

        BranchSrv.findPageByDestination({id: $scope.page.id}).$promise.then(function(data){
          if(data){
            $scope.fromChoiceText = data.choice_text;
            initParentPage(data.parent_id);
          }
        });
      });
    }

    var initParentPage = function(parent_id){
      PageSrv.show({id: parent_id}).$promise.then(function(data){
        $scope.parentPage = data;
        initSiblingPages();
      });
    };

    var initSiblingPages = function(){
      // REVIEW sibling pages cleared on refresh
      $scope.siblingPages = [];

      _.each($scope.parentPage.branches, function(branch){
        PageSrv.show({id: branch.destination_id}).$promise.then(function(data){
          $scope.siblingPages.push(data);
        });
      });
    };

    $scope.submitDraft = function(){
      $scope.complete = false;
      $scope.submit();
    }

    $scope.submitComplete = function(){
      $scope.complete = true;
      $scope.submit();
    }

    // FIXME content does not parse newline constants
    $scope.submit = function(){

      if($scope.page.title !==''){
        var pageDataHash = {
          story_id: $scope.page.story.id,
          id: $scope.page.id,
          title: $scope.page.title,
          summary: $scope.page.summary,
          content: $scope.page.content,
          complete: $scope.complete
        }

        if($scope.parentPage){
          pageDataHash.parent_id = $scope.parentPage.id;
        }

        PageSrv.update(pageDataHash).$promise.then(function(data){
          $scope.page = data;
        });
      }
    }

    $scope.createBranch = function(){
      if(!_.isEmpty($scope.choiceText)) {
        var numBranches = 1;

        if($scope.page.branches){
          numBranches = $scope.page.branches.length +1;
        }

        //REVIEW would this work?
        // var numBranches = $scope.page.branches.length +1 | 1;

        var stubTitle = 'Child Page ' + numBranches + ' of Page ' + $scope.page.id;

        var pageDataHash = {
          story_id: $scope.story.id,
          parent_id: $scope.page.id,
          title: stubTitle,
          choice_text: $scope.choiceText,
        }

        PageSrv.create(pageDataHash).$promise.then(function(data){
          $scope.page = data;
        });
      }
    }

    $scope.deleteBranch = function(index){
      var page = $scope.page.branches[index];
      PageSrv.delete({parent_id: $scope.page.id, id: page.id}).$promise.then(function(data){
          $scope.page = data;
      });
    }

    $scope.navToParentStory = function(){
      $scope.submit();

      $state.go('edit_story',{story_id: $scope.story.id});
    }

    $scope.navToParentPage = function(){
      $scope.submit();

      $state.go('edit_page',{story_id: $scope.story.id, page_id: $scope.parentPage.id});
    }

    $scope.navToChildPage = function(index){
      $scope.submit();

      var pageDataHash = {
        story_id: $scope.story.id,
        parent_id: $scope.page.branches[index].parent_id,
        page_id: $scope.page.branches[index].destination_id
      }

      $state.go('edit_page', pageDataHash);
    }
  }

  angular
    .module('fatebook')
    .controller('PageEditCtrl',['$scope','$log','$state','$stateParams','PageSrv', 'PageSrv', 'StorySrv', 'BranchSrv',PageEditCtrl]);
})();
