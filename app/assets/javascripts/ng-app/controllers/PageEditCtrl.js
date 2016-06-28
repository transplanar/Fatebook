(function(){
  function PageEditCtrl($scope,$log, $stateParams,PageSrv, PagesSrv, StorySrv){
    $scope.choiceText = '';

    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.story = data;
      initCurrentPage();
    });

    var initCurrentPage =  function(){
      PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
        $scope.page = data;
        initChoices();

        if($scope.page.parent_page){
          initParentPage();
        }

        // $log.log('editting page', data);
      });
    }

    var initChoices = function(){
      $scope.choices = [];

      if($scope.page.branches.length === 0){
        $scope.choices = [{text: null, saved: false}];
      }else{
        _.each($scope.page.branches, function(branch, index){
          $scope.choices.push({text: branch.choice_text, saved: true});
        });
      }
    };

    var initParentPage = function(){
      PageSrv.show({id: $scope.page.parent_page.id}).$promise.then(function(data){
        $scope.parentPage = data;
        initSiblingPages();
      });
    };

    var initSiblingPages = function(){
      // PagesSrv.query({story_id: $scope.story.id, parent_id: $scope.page.parent_page.id}).$promise.then(function(data){
      PagesSrv.query({story_id: $scope.story.id, parent_id: $scope.parentPage.id}).$promise.then(function(data){
        $scope.siblingPages = data;
      });
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
      // var lastStr = _.last($scope.choices);

      // if(lastStr !== '') {
      if(!_.isEmpty($scope.choiceText)) {
        // $scope.choices.push({text: null, saved: false});
        var numBranches = 1;

        if($scope.page.branches){
          numBranches = $scope.page.branches.length +1;
        }
        var stubTitle = 'Child Page ' + numBranches + ' of Page ' + $scope.page.id;

        pageHash = {
          story_id: $scope.story.id,
          parent_id: $scope.page.id,
          choice_text: $scope.choiceText,
          title: stubTitle
        }

        PagesSrv.create(pageHash).$promise.then(function(data){
          // REVIEW is this the best way?
          PageSrv.show({id: $scope.page.id}).$promise.then(function(data){
            $scope.page = data;
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
    .controller('PageEditCtrl',['$scope','$log','$stateParams','PageSrv', 'PagesSrv', 'StorySrv',PageEditCtrl]);
})();
