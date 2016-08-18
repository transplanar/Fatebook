(function(){
  function SideNavCtrl($scope, StorySrv){
    
    $scope.displayAdventures = function(){
      StorySrv.published().$promise.then(function(data){
        $scope.publishedStories = data;
      });
    }();    
  };

  angular
    .module('fatebook')
    .controller('SideNavCtrl',['$scope', 'StorySrv', SideNavCtrl]);
})();
