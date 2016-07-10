(function(){
  function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv, UserSessionSrv){
    $scope.login = function(){
      SessionSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // console.log('current session' + data);
        $scope.currentUser = data;
        // UserSessionSrv.setCurrentUser(data);
        UserSessionSrv.currentUser = data;
        $rootScope.$broadcast('userLogin');
      })
    };

    $scope.signUp = function(){
      UserSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // REVIEW sync these values better?
        $scope.currentUser = data;
        UserSessionSrv.setCurrentUser($scope.currentUser);
        // UserSessionSrv.currentUser = data;
        $rootScope.$broadcast('userLogin');
      });
    };

    $scope.logOut = function(){
      SessionSrv.db.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        $scope.currentUser = null;
        UserSessionSrv.setCurrentUser(null);
      });
    };

  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', '$rootScope', 'SessionSrv','SessionSrv','UserSrv','UserSessionSrv',LoginCtrl])
})();
