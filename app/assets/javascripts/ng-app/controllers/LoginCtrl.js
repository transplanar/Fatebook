(function(){
  function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv, UserSessionSrv){
    $scope.login = function(){
      SessionSrv.create({
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
      UserSrv.create({
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
      SessionSrv.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        $scope.currentUser = null;
        UserSessionSrv.setCurrentUser(null);
      });
    };

  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', '$rootScope', 'SessionSrv','SessionSrv','UserSrv','UserSessionSrv',LoginCtrl])
})();
