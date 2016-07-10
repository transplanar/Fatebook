(function(){
  function PageSrv($resource) {
    return $resource('/pages/:id.json', {id: '@id'},
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
    .factory('PageSrv',['$resource', PageSrv])
})()
