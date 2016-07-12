(function(){
  function UserSrv($resource,$rootScope) {
    var UserSrv = {};
    UserSrv.currentUser = null;

    UserSrv.setUser = function(user){
      UserSrv.currentUser = user;
      $rootScope.$broadcast('updateCurrentUser');
    };

    // return $resource('/users/:id.json', {id: '@id'},
    UserSrv.db = $resource('/users/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE', isArray: true},
    });

    return UserSrv;
  }

  angular
    .module('fatebook')
    .factory('UserSrv',['$resource','$rootScope', UserSrv])
    // .service('UserSrv',['$resource','$rootScope', UserSrv])
})()
