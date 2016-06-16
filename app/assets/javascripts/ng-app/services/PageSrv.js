(function(){
  function PageSrv($resource) {
    return $resource('/pages/:id.json',{},
    {
      show: {method: 'GET'},
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    });
  }

  angular
    .module('fatebook')
    .factory('PageSrv',['$resource', PageSrv])
})()
