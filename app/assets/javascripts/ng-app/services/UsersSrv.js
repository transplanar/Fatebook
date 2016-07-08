(function(){
  function UsersSrv($resource) {
    // TODO refactor to store user and routing methods
    UserSrv = {};

    UserSrv.currentUser = null;

    UserSrv.route = $resource('/users',{},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'}
    });

    return UserSrv;
  }

  angular
    .module('fatebook')
    .factory('UsersSrv',['$resource', UsersSrv])
})()
