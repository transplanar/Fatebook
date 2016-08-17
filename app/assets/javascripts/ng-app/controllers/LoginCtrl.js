(function(){
  function LoginCtrl($scope, $rootScope, $cookies, $state, SessionSrv, UserSrv){
    $scope.login = function(){
      SessionSrv.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        if(data.username){
          UserSrv.setUser(data);
          $scope.currentUser = data;
        }else{
          console.log('Invalid username ' + $scope.usernameInput);
        }
      })
    };

    $scope.signUp = function(){
      UserSrv.db.create({
        username: $scope.usernameInput,
        password: $scope.passwordInput
      }).$promise.then(function(data){
        $scope.currentUser = data;

        UserSrv.setUser(data);
      });
    };

    $scope.logOut = function(){
      SessionSrv.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        UserSrv.setUser(null);
        $scope.currentUser = null;
      });

      $cookies.remove('currentUser_id');
      $state.go('landing');
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

    $rootScope.$on('updateCurrentUser', function(){
      if(UserSrv.currentUser){
        $scope.currentUser = UserSrv.currentUser;
        $cookies.put('currentUser_id', UserSrv.currentUser.id);
      }
    });
  };

  angular
    .module('fatebook')
    .controller('LoginCtrl',['$scope', '$rootScope', '$cookies', '$state', 'SessionSrv','UserSrv',LoginCtrl])
})();
