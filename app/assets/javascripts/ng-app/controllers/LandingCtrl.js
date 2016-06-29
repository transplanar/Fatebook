(function(){
  function LandingCtrl($scope, StorySrv, StoriesSrv){
    // TODO update landing controller later
    StoriesSrv.query().$promise.then(function(data){
      $scope.stories = data;
    });

    $scope.deleteStory = function(index){
      console.log('deleting story');
      // index instead
      StorySrv.delete({id: $scope.stories[index].id}).$promise.then(function(data){
        $scope.stories = data;
        console.log('story deleted');
      });
    }
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope', 'StorySrv', 'StoriesSrv',LandingCtrl]);
})();
