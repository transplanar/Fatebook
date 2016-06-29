(function(){
  function PageEditCtrl($scope,$log, $stateParams,PageSrv, PagesSrv, StorySrv, BranchSrv){
    // $log.log($stateParams);
    $scope.choiceText = '';

    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.story = data;
      initCurrentPage();
    });

    var initCurrentPage =  function(){
      PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
        $scope.page = data;

        // REVIEW in the event where multiple branches point to the same page, how do you make that work?
        //NOTE note possible with current UI. Future development
        BranchSrv.query({destination_id: $scope.page.id}).$promise.then(function(data){
          if(data[0]){
            initParentPage(data[0].parent_id);
          }
        });

        $log.log('editting page', data);
        // $log.log('branches', $scope.page.branches);
        // if(!_.isEmpty($scope.page.branches)){
        //   $log.log('branches', $scope.page.branches[0].destination_id);
        // }
      });
    }

    // var initChoices = function(){
    //   $scope.choices = [];
    //
    //   if($scope.page.branches.length === 0){
    //     $scope.choices = [{text: null, saved: false}];
    //   }else{
    //     _.each($scope.page.branches, function(branch, index){
    //       $scope.choices.push({text: branch.choice_text, saved: true});
    //     });
    //   }
    // };

    // var initParentPage = function(){
    var initParentPage = function(parent_id){
      // PageSrv.show({id: $scope.page.parent_branch.parent_id}).$promise.then(function(data){
      // $log.log('parent init');
      $log.log('init parent');
      PageSrv.show({id: parent_id}).$promise.then(function(data){
        $scope.parentPage = data;
        // $log.log('parent init complete')
        initSiblingPages();
      });
    };

    var initSiblingPages = function(){
      $log.log('init siblings');
      // console.log('parent',$scope.parentPage);
      // console.log('parent branches',$scope.parentPage.branches);

      // REVIEW sibling pages cleared on refresh
      $scope.siblingPages = [];

      _.each($scope.parentPage.branches, function(branch){
        PageSrv.show({id: branch.destination_id}).$promise.then(function(data){
          $scope.siblingPages.push(data);
        });
        // $log.log($scope.siblingPages);
      });


      // PagesSrv.query({story_id: $scope.story.id, parent_id: $scope.page.parent_page.id}).$promise.then(function(data){
      // PagesSrv.query({story_id: $scope.story.id, parent_id: $scope.parentPage.id}).$promise.then(function(data){
      //   $scope.siblingPages = data;
      // });
    };

    $scope.submit = function(){
      if($scope.page.title !==''){
        // var scopeText = [];
        //
        // _.each($scope.choices, function(choice){
        //   scopeText.push(choice.text);
        // });

        // TODO update choice text OR keep in sync?

        var pageHash = {
          story_id: $scope.page.story.id,
          id: $scope.page.id,
          title: $scope.page.title,
          // summary: $scope.summary,
          summary: $scope.page.summary,
          // content: $scope.content,
          content: $scope.page.content
          // will this work?
          // choices: scopeText
        }

        if($scope.parentPage){
          // $log.log($scope.page,'has parent', $scope.parentPage);
          pageHash.parent_id = $scope.parentPage.id;
        }

        // $log.log('hsh',pageHash);

        PageSrv.update(
          // {
          //   story_id: $scope.page.story.id,
          //   id: $scope.page.id,
          //   title: $scope.page.title,
          //   // summary: $scope.summary,
          //   summary: $scope.page.summary,
          //   // content: $scope.content,
          //   content: $scope.page.content,
          //   // will this work?
          //   choices: scopeText
          // }
          pageHash
        )
        .$promise.then(function(data){
          //   // $state.go('edit_page',{story_id: data.id, page_id: data.pages[0].id});
          // $log.log(data);
          $scope.page = data;
          $log.log('result',data);
          // if($scope.page.branches){
          //   $scope.choices = $scope.page.branches;
          // }else{
          //   $scope.choices = [{text: null, saved: false}];
          // }

        });

        // REVIEW better way to do this?
        _.each($scope.choices, function(choice){
          if(!_.isEmpty(choice.text)){
            choice.saved = true;
          }
        });

        // $scope.choices = [{text: null, saved: false}];
      }
    }

    // NOTE how to get watch statements working?
    // $scope.$watch('$scope.choices',
    //   function(newVal,oldVal){
    //     $log.log('choice',$scope.choices);
    //   }
    // );

    // Creates choice box
    $scope.createBranch = function(){
      if(!_.isEmpty($scope.choiceText)) {
        var numBranches = 1;

        if($scope.page.branches){
          numBranches = $scope.page.branches.length +1;
        }

        var stubTitle = 'Child Page ' + numBranches + ' of Page ' + $scope.page.id;

        var pageDataHash = {
          story_id: $scope.story.id,
          // parent_id: $scope.page.id,
          parent_id: $scope.page.id,
          title: stubTitle,
          choice_text: $scope.choiceText,
        }

        PagesSrv.create(pageDataHash).$promise.then(function(data){
          // REVIEW is this the best way?
          PageSrv.show({id: $scope.page.id}).$promise.then(function(data){
            $scope.page = data;
            $log.log('updated page',$scope.page);
          });
        });
      }
    }

    $scope.deleteBranch = function(index){
      var page = $scope.page.branches[index];
      PageSrv.delete({parent_id: $scope.page.id, id: page.id}).$promise.then(function(data){
          $scope.page = data;
      });
    }


    // var before = function(s){
    //   $log.log('before',s);
    // }
    //
    // var after = function(s){
    //   $log.log('after',s);
    // }
    //
    //

    // Display choices
    // $scope.displayChoices()



    // $scope.submitChoice

  }

  angular
    .module('fatebook')
    .controller('PageEditCtrl',['$scope','$log','$stateParams','PageSrv', 'PagesSrv', 'StorySrv', 'BranchSrv',PageEditCtrl]);
})();
