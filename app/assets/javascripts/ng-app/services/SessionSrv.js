(function(){
  function SessionSrv($resource) {
    return $resource('/sessions/:id.json',{},
    {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    });
  }

  angular
    .module('fatebook')
    .factory('SessionSrv',['$resource', SessionSrv])
})()
