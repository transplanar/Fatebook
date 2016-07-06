(function(){
  function LandingCtrl($scope, StorySrv, StoriesSrv,UserSessionSrv){
    // TODO update landing controller later
    // StoriesSrv.query().$promise.then(function(data){

    $scope.displayStories = function(){
      StoriesSrv.query({user_id: UserSessionSrv.currentUser}).$promise.then(function(data){
        $scope.stories = data;
      });
    }

    // $scope.$watch('UserSessionSrv.currentUser', function(newVal,oldVal){
    //   console.log('changed');
    // });

    // angular.element($('#login')).scope().test();

    $scope.deleteStory = function(story_id){
      // index instead
      StorySrv.delete({id: story_id}).$promise.then(function(data){
        $scope.stories = data;
        console.log('story deleted');
      });
    }

    $scope.displayStories();
  }

  angular
    .module('fatebook')
    .controller('LandingCtrl',['$scope', 'StorySrv', 'StoriesSrv', 'UserSessionSrv', LandingCtrl]);
})();
