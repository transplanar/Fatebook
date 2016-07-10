(function(){
  // function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv, UserSessionSrv){
  function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv){
    $scope.login = function(){
      SessionSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // TODO add broadcast thing here
        UserSrv.setUser(data);
        $scope.currentUser = data;
        // $rootScope.$broadcast('updateCurrentUser');
      })
    };

    $scope.signUp = function(){
      UserSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // TODO add broadcast thing here
        UserSrv.setUser(data);
        $scope.currentUser = data;
        // $rootScope.$broadcast('updateCurrentUser');
      });
    };

    $scope.logOut = function(){
      SessionSrv.db.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        // TODO add broadcast thing here
        $scope.currentUser = null;
        UserSrv.setUser(null);
      });
    };

  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', '$rootScope', 'SessionSrv','UserSrv',LoginCtrl])
})();
