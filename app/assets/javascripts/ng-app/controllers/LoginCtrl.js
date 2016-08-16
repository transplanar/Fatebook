(function(){
  function LoginCtrl($scope, $rootScope, $cookies, SessionSrv, UserSrv){
//    var userID = $cookies.get('currentUser_id');
//
//    if(userID){
//      console.log('setting user on load');
//      UserSrv.db.show({id: userID}).$promise.then(function(data){
//        UserSrv.setUser(data);
//        $scope.currentUser = data;
//      });
//    }

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
        // $scope.$apply(function(){
          $scope.currentUser = data;
        // })

        UserSrv.setUser(data);
      });
    };

    $scope.logOut = function(){
      console.log('logging out');
      SessionSrv.delete({id: $scope.currentUser.id}).$promise.then(function(data){
        UserSrv.setUser(null);

        // $scope.$apply(function(){
          $scope.currentUser = null;
        // })

        $cookies.remove('currentUser_id');
        console.log('logged out');
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
    
    $rootScope.$on('updateCurrentUser', function(){
      console.log('updating user cookie', UserSrv.currentUser);

      if(UserSrv.currentUser){
        $scope.currentUser = UserSrv.currentUser;
        $cookies.put('currentUser_id', UserSrv.currentUser.id);
      }
    });
  };

  angular
    .module('fatebook')
    // .controller('LoginCtrl',['$scope', '$rootScope', 'SessionSrv','UserSrv',LoginCtrl])
    .controller('LoginCtrl',['$scope', '$rootScope', '$cookies', 'SessionSrv','UserSrv',LoginCtrl])
})();
