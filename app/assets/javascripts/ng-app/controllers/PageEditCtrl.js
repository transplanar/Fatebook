(function(){
  function PageEditCtrl($scope,$log, $stateParams,PageSrv, PagesSrv, StorySrv){
    StorySrv.show({id: $stateParams.story_id}).$promise.then(function(data){
      $scope.story = data;
      initCurrentPage();
    });

    var initCurrentPage =  function(){
      PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
        $scope.page = data;

        if($scope.page.parent_page){
          initParentPage();
        }
      });
    }

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



    // $log('siblings',$scope.page);


    // Start with single blank element
    $scope.choices = [{text: null, saved: false}];

    $scope.submit = function(){
      if($scope.page.title !==''){
        var scopeText = [];

        _.each($scope.choices, function(choice){
          scopeText.push(choice.text);
        });

        PageSrv.update(
          {
            story_id: $scope.page.story.id,
            id: $scope.page.id,
            title: $scope.page.title,
            // summary: $scope.summary,
            summary: $scope.page.summary,
            // content: $scope.content,
            content: $scope.page.content,
            // will this work?
            choices: scopeText
          }
        )
        .$promise.then(function(data){
          //   // $state.go('edit_page',{story_id: data.id, page_id: data.pages[0].id});
          // console.log(data);
          $scope.page = data;
          $scope.choices = $scope.page.branches;
        });

        // REVIEW better way to do this?
        _.each($scope.choices, function(choice){
          if(!_.isEmpty(choice.text)){
            choice.saved = true;
          }
        });
      }
    }

    // NOTE how to get watch statements working?
    // $scope.$watch('$scope.choices',
    //   function(newVal,oldVal){
    //     console.log('choice',$scope.choices);
    //   }
    // );

    // Creates choice box
    $scope.addChoice = function(){
      var lastStr = _.last($scope.choices);

      // if(lastStr !== '') {
      if(!_.isEmpty(lastStr)) {
        $scope.choices.push({text: null, saved: false});
      }
    }

    $scope.deleteChoice = function(id){
      $scope.choices.splice(id,1);
    }

    var before = function(s){
      console.log('before',s);
    }

    var after = function(s){
      console.log('after',s);
    }

    // $scope.submitChoice

  }

  angular
    .module('fatebook')
    .controller('PageEditCtrl',['$scope','$log','$stateParams','PageSrv', 'PagesSrv', 'StorySrv',PageEditCtrl]);
})();
