(function(){
  function LandingCtrl($scope, StoriesSrv){
    // TODO update landing controller later
    StoriesSrv.query().$promise.then(function(data){
      $scope.stories = data;
    });
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope', 'StoriesSrv',LandingCtrl]);
})();
