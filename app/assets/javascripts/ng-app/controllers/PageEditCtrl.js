(function(){
  function PageEditCtrl($scope,$stateParams,PageSrv){
    PageSrv.show({id: $stateParams.page_id}).$promise.then(function(data){
      $scope.page = data;
    });

    // $scope.page = $stateParams.page
  }

  angular
    .module('fatebook')
    .controller('PageEditCtrl',['$scope','$stateParams','PageSrv',PageEditCtrl]);
})();
