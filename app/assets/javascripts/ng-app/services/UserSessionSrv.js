// REVIEW better way to do this?
(function(){
  function UserSessionSrv() {
    UserSessionSrv = {};

    UserSessionSrv.setCurrentUser = function(user){
      console.log('user set to ', user)
      UserSessionSrv.currentUser = user;
    };

    return UserSessionSrv;
  }

  angular
    .module('fatebook')
    .factory('UserSessionSrv', [UserSessionSrv])
})()
