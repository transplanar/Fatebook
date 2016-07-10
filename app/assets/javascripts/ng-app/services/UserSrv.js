(function(){
  function UserSrv($resource) {
    return $resource('/users/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      delete: {method: 'DELETE', isArray: true},
    });
  }

  angular
    .module('fatebook')
    .factory('UserSrv',['$resource', UserSrv])
})()
