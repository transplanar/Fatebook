(function(){
  function LandingCtrl($scope, StorySrv, StoriesSrv){
    // TODO update landing controller later
    StoriesSrv.query().$promise.then(function(data){
      $scope.stories = data;
    });

    $scope.deleteStory = function(story_id){
      console.log('deleting story');
      StorySrv.delete({id: story_id}).$promise.then(function(data){
        $scope.stories = data;
        console.log('story deleted');
      });
    }
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope', 'StorySrv', 'StoriesSrv',LandingCtrl]);
})();
