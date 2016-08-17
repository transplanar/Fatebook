(function(){
  function UserSrv($resource,$rootScope, $cookies) {
    var UserSrv = {};

    UserSrv.setUser = function(user){
      UserSrv.currentUser = user;
      $rootScope.$broadcast('updateCurrentUser');
    };

    UserSrv.db = $resource('/users/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE', isArray: true},
    });

    var userID = $cookies.get('currentUser_id');

    if(userID){
      UserSrv.db.show({id: userID}).$promise.then(function(data){
        UserSrv.setUser(data);
      });
    }else{
      UserSrv.currentUser = null;
    }

    return UserSrv;
  }

  angular
    .module('fatebook')
    .factory('UserSrv',['$resource','$rootScope', '$cookies', UserSrv])
})()
