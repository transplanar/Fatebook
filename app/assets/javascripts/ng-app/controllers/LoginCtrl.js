(function(){
  // function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv, UserSessionSrv){
  function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv){
    $scope.login = function(){
      SessionSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
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
        UserSrv.setUser(data);
        $scope.currentUser = data;
        // $rootScope.$broadcast('updateCurrentUser');


        // REVIEW sync these values better?
        // UserSessionSrv.setCurrentUser($scope.currentUser);
        // UserSrv.currentUser = data;
        // $rootScope.$broadcast('updateCurrentUser');
      });
    };

    $scope.logOut = function(){
      SessionSrv.db.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        $scope.currentUser = null;
        // UserSessionSrv.setCurrentUser(null);
        UserSrv.setUser(null);
      });
    };

  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', '$rootScope', 'SessionSrv','UserSrv',LoginCtrl])
})();
