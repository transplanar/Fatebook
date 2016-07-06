(function(){
  function LoginCtrl($scope, SessionsSrv, SessionSrv, UsersSrv){
    // REVIEW TODO move to appropriate spot
    $scope.login = function(){
      SessionsSrv.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        // console.log('current session' + data);
        $scope.currentUser = data;
      })
    };

    $scope.signUp = function(){
      UsersSrv.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        console.log('new user', data)
        $scope.currentUser = data;
      });
    };

    $scope.logOut = function(){
      // console.log('button')
      SessionSrv.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        console.log('logged out')
        $scope.currentUser = null;
      });
    };

  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', 'SessionsSrv','SessionSrv','UsersSrv',LoginCtrl])
})();
