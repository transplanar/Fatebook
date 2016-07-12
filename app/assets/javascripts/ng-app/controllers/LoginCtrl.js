(function(){
  function LoginCtrl($scope, $rootScope, SessionSrv, UserSrv){
    $scope.login = function(){
      SessionSrv.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        UserSrv.setUser(data);
        $scope.currentUser = data;
      })
    };

    $scope.signUp = function(){
      UserSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        UserSrv.setUser(data);
        $scope.currentUser = data;
      });
    };

    $scope.logOut = function(){
      SessionSrv.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        $scope.currentUser = null;
        UserSrv.setUser(null);
      });
    };

    var updateLastPageVisited = function(state, args){
      var user = UserSrv.currentUser;

      var userDataHash = {
        id: user.id
      };

      var lastPageID = "last_page_"+state+"_id";
      var lastStoryID = "last_page_"+state+"_story_id";

      userDataHash[lastPageID] = args.page.id;
      userDataHash[lastStoryID] = args.story.id;

      UserSrv.db.update(userDataHash).$promise.then(function(data){
        UserSrv.currentUser = data;
        $scope.currentUser = data;
      });
    }

    $rootScope.$on('updateLastPageEdit', function(event, args){
      updateLastPageVisited('edit', args);
    });

    $rootScope.$on('updateLastPagePlay', function(event, args){
      updateLastPageVisited('play', args);
    });
  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', '$rootScope', 'SessionSrv','UserSrv',LoginCtrl])
})();
