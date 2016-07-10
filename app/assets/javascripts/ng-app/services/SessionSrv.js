(function(){
  function SessionSrv($resource) {
    return $resource('/sessions/:id.json', {id: '@id'},
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
    .factory('SessionSrv',['$resource', SessionSrv])
})()
