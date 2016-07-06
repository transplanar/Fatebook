(function(){
  function LoginCtrl($scope, SessionsSrv, SessionSrv, UsersSrv, UserSessionSrv){
    // REVIEW TODO move to appropriate spot
    $scope.login = function(){
      SessionsSrv.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // console.log('current session' + data);
        $scope.currentUser = data;
        UserSessionSrv.setCurrentUser(data);
        // UserSessionSrv.currentUser = data;
      })
    };

    $scope.signUp = function(){
      UsersSrv.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // REVIEW sync these values better?
        $scope.currentUser = data;
        UserSessionSrv.setCurrentUser($scope.currentUser);
        // UserSessionSrv.currentUser = data;
      });
    };

    $scope.logOut = function(){
      // console.log('button')
      SessionSrv.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        $scope.currentUser = null;
        UserSessionSrv.setCurrentUser(null);
      });
    };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', 'SessionsSrv','SessionSrv','UsersSrv','UserSessionSrv',LoginCtrl])
})();
