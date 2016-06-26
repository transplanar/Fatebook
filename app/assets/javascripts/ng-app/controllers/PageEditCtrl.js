(function(){
  function PageEditCtrl($scope,$stateParams,PageSrv){
    PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
      $scope.page = data;
    });

    $scope.submit = function(){
      PageSrv.update(
        {
          story_id: $scope.page.story.id,
          id: $scope.page.id,
          title: $scope.title,
          summary: $scope.summary,
          content: $scope.content
        }
      )
      // .$promise.then(function(data){
      //   // $state.go('edit_page',{story_id: data.id, page_id: data.pages[0].id});
      // });
    }

    $scope.createChoice = function(text){
      PageSrv.update(
        {
          story_id: $scope.page.story.id,
        }
      )
    }

  }

  angular
    .module('fatebook')
    .controller('PageEditCtrl',['$scope','$stateParams','PageSrv',PageEditCtrl]);
})();
