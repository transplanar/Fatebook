(function(){
  function UserSrv($resource) {
    var UserSrv = {};

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
    .factory('UserSrv',['$resource', UserSrv])
})()
