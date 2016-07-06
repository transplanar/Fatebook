(function(){
  function UserSrv($resource) {
    return $resource('/users/:id.json',{},
    {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    });
  }

  angular
    .module('fatebook')
    .factory('UserSrv',['$resource', UserSrv])
})()
