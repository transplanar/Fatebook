(function(){
  function PageEditCtrl($scope,$log, $stateParams,PageSrv){
    $scope.pageSaved = false;

    PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
      $scope.page = data;
    });

    // Start with single blank element
    $scope.choices = [''];

    $scope.submit = function(){


      PageSrv.update(
        {
          story_id: $scope.page.story.id,
          id: $scope.page.id,
          title: $scope.title,
          summary: $scope.summary,
          content: $scope.content,
          // will this work?
          choices: $scope.choices
        }
      )
      .$promise.then(function(data){
      //   // $state.go('edit_page',{story_id: data.id, page_id: data.pages[0].id});
        console.log(data);
      });

      $scope.pageSaved = true;
    }

    // NOTE how to get watch statements working?
    // $scope.$watch('$scope.choices',
    //   function(newVal,oldVal){
    //     console.log('choice',$scope.choices);
    //   }
    // );

    // Creates choice box
    $scope.addChoice = function(){
      // console.log('choice added');
      // console.log($scope.choices.last);
      var lastStr = $scope.choices[$scope.choices.length-1];

      if(lastStr !== ''){
        $scope.choices.push('');
      }

      console.log('choice',$scope.choices);
      console.log('last',_.last($scope.choices));
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
    .controller('PageEditCtrl',['$scope','$log','$stateParams','PageSrv',PageEditCtrl]);
})();
