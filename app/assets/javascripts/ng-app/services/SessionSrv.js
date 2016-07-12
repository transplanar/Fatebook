(function(){
  function SessionSrv($resource) {
    var SessionSrv = {};

    // return $resource('/sessions/:id.json', {id: '@id'},
    SessionSrv.db = $resource('/sessions/:id.json', {id: '@id'},
    {
      query: {method: 'GET', isArray: true},
      create: {method: 'POST'},
      show: {method: 'GET'},
      update: {method: 'PUT'},
      // delete: {method: 'DELETE', isArray: true},
      delete: {method: 'DELETE'},
    });

    return SessionSrv;
  }

  angular
    .module('fatebook')
    .factory('SessionSrv',['$resource', SessionSrv])
})()
